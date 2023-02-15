import React from 'react'
import PropTypes from 'prop-types'
import { COL_HEADERS, ROW_HEADERS } from './constants'
import { Grid } from './Grid'

import './Spectrum.css'

const Spectrum = ({
  selectedJournalist,
  clearCurrentJournalistSelection,
  avgJournalists,
  currentJournoIndex,
  setCurrentJournoIndex,
  resetCurrentJournoIndex,
}: any) => {
  return (
    <div className='spectrum-parent'>
      <h4 className='leftHead'>Social Spectrum Scale</h4>

      <div className='spectrum-area'>
        <div className='v-stack'>
          {ROW_HEADERS.map((rowH, i) => (
            <div key={i}>{rowH.value}</div>
          ))}
        </div>
        <Grid
          selectedJournalist={selectedJournalist}
          clearCurrentJournalistSelection={clearCurrentJournalistSelection}
          avgJournalists={avgJournalists}
          currentJournoIndex={currentJournoIndex}
          setCurrentJournoIndex={setCurrentJournoIndex}
          resetCurrentJournoIndex={resetCurrentJournoIndex}
        />
        <div></div>
        <div className='h-stack'>
          {COL_HEADERS.map((colH, i) => (
            <div key={i}>{colH.value}</div>
          ))}
        </div>
        <div></div>
        <h4 style={{ textAlign: 'center' }}>Political Scale</h4>
      </div>
    </div>
  )
}

Spectrum.propTypes = {
  selectedJournalist: PropTypes.object,
  clearCurrentJournalistSelection: PropTypes.func,
  avgJournalists: PropTypes.array,
  currentJournoIndex: PropTypes.object,
  setCurrentJournoIndex: PropTypes.func,
  resetCurrentJournoIndex: PropTypes.func,
}

export { Spectrum }
