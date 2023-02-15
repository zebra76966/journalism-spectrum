import React from 'react'
import PropTypes from 'prop-types'
import './JournoTile.css'

const JournoTile = ({ journalist }: any) => {
  return (
    <div className='journo-tile-div'>
      <img
        src={journalist.image}
        alt={journalist.name}
        className='journo-tile-image'
      />
      <p className='tooltiptext'>{journalist.name}</p>
    </div>
  )
}

JournoTile.propType = {
  journalist: PropTypes.shape({
    name: PropTypes.string,
    image: PropTypes.string,
  }),
}

export { JournoTile }
