import React from 'react'
import { useState } from 'react'
import Card from './journCard'
import mockData from './MOCK_DATA.json'

function SearchArea() {
  const [datas, setData] = useState(mockData)
  const [search, setSearch] = useState('')

  return (
    <>
      <div className='search'>
        <input
          type='text'
          placeholder='Search Journalists'
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
        />
        <i className='fa fa-search fs-2'></i>
      </div>

      <div
        style={{
          display: 'flex',
          overflowX: 'scroll',
          gap: '40px',
          whiteSpace: 'nowrap',
          width: '100%',
        }}
      >
        {datas.map((pini) => {
          if (pini.name.toLowerCase().includes(search)) {
            return <Card key={pini.id} res={pini} />
          }
        })}
      </div>
    </>
  )
}

export default SearchArea
