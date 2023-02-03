import React from 'react'
import Card from './votejournCard'
import { useState } from 'react'

function SearchArea(props) {
  const [search, setSearch] = useState('')
  return (
    <>
      <div className='container'>
        <h1 style={{ textAlign: 'center' }}>Which journalist do you follow?</h1>
        <div className='section'>
          <div className='search'>
            <input
              type='text'
              placeholder='Search Journalists'
              onChange={(e) => setSearch(e.target.value.toLowerCase())}
            />
            <i className='fa fa-search fs-2'></i>
          </div>

          <div className='cardLayout'>
            {props.allres.map((pini) => {
              if (pini.name.toLowerCase().includes(search)) {
                return (
                  <Card
                    key={pini.id}
                    res={pini}
                    isVoted={props.selected.includes(pini.id) ? true : false}
                    onClick={(val) => props.onClick(val)}
                    onDelete={(val) => props.onDelete(val)}
                  />
                )
              }
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default SearchArea
