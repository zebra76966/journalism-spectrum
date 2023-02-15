import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { JournoTile } from './JournoTile'

import { FaTimes } from 'react-icons/fa'
import './JournoTileGroup.css'

const MAX_JOURNALISTS_TO_SHOW = 4

const ExtraCount = ({ count }: any) => {
  const toShowCount = count - MAX_JOURNALISTS_TO_SHOW
  return (
    <div className='extra-tile-div'>
      <p>+{toShowCount}</p>
    </div>
  )
}

const ViewAllModal = ({ journalists, setIsModalOpen }: any) => {
  return (
    <>
      <div className='view-all-modal-div'>
        <div className='modal-contents'>
          <div className='modal-content-title-row'>
            <p className='modal-content-title'>View All</p>
            <button className='close-btn' onClick={() => setIsModalOpen(false)}>
              <FaTimes />
            </button>
          </div>
          <div className='modal-contents-wrapper'>
            {journalists.map((journo: any, i: any) => (
              <div className='content-row' key={i}>
                <img
                  src={journo.image}
                  alt={journo.name}
                  className='content-image'
                  loading='eager'
                />
                <p className='content-title'>{journo.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className='view-all-modal-outline'></div>
    </>
  )
}

const JournoTileGroup = ({ journalists }: any) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <div className='tile-group-div'>
      {journalists.length > MAX_JOURNALISTS_TO_SHOW
        ? [
            ...journalists
              .slice(0, MAX_JOURNALISTS_TO_SHOW)
              .map((journo: any, i: any) => (
                <JournoTile key={i} journalist={journo} />
              )),
            <ExtraCount
              key={MAX_JOURNALISTS_TO_SHOW}
              count={journalists.length}
            />,
          ]
        : journalists.map((journo: any, i: any) => (
            <JournoTile key={i} journalist={journo} />
          ))}
      {journalists.length > MAX_JOURNALISTS_TO_SHOW ? (
        <div className='view-all-btn-div'>
          <button className='view-all-btn' onClick={() => setIsModalOpen(true)}>
            View All
          </button>
        </div>
      ) : null}
      {journalists.length > MAX_JOURNALISTS_TO_SHOW && isModalOpen && (
        <ViewAllModal
          journalists={journalists}
          setIsModalOpen={setIsModalOpen}
        />
      )}
    </div>
  )
}

JournoTileGroup.propType = {
  journalists: PropTypes.array,
}

export { JournoTileGroup }
