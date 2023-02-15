import React from 'react'
import PropTypes from 'prop-types'

import { FaTimes } from 'react-icons/fa'
import './JournoChip.css'

const JournoChip = ({
  selectedJournalist,
  clearCurrentJournalistSelection,
  resetCurrentJournoIndex,
}: any) => {
  return (
    <div
      className='chip-area'
      draggable='true'
      onDragStart={(e) => {
        ;(e.target as HTMLDivElement).style.opacity = '0.4'
      }}
      onDragEnd={(e) => {
        ;(e.target as HTMLDivElement).style.opacity = '1'
      }}
    >
      <img
        src={selectedJournalist.image}
        alt='Reporter name'
        className='chip-image'
        draggable='false'
      />
      <p className='chip-title'>{selectedJournalist.value}</p>
      <FaTimes
        onClick={() => {
          clearCurrentJournalistSelection()
          resetCurrentJournoIndex()
        }}
      />
    </div>
  )
}

JournoChip.propTypes = {
  selectedJournalist: PropTypes.object,
  clearCurrentJournalistSelection: PropTypes.func,
  resetCurrentJournoIndex: PropTypes.func,
}

export { JournoChip }
