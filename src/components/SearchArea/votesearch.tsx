import React from 'react'
import { useState } from 'react'
import Card from './votejournCard'
import mockData from './MOCK_DATA.json'

function SearchArea() {
  const [datas, setData] = useState(mockData)
  const [search, setSearch] = useState('')
  const [selectog, setSelectTog] = useState([])
  console.log(selectog)
  return (
    <>
      <div className='page'>
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
            {datas.map((pini) => {
              if (pini.name.toLowerCase().includes(search)) {
                return (
                  <Card
                    key={pini.id}
                    res={pini}
                    isVoted={selectog.includes(pini.id) ? true : false}
                    onClick={(val) => setSelectTog((ini) => [...ini, val])}
                    onDelete={(val) =>
                      setSelectTog((ini) =>
                        ini.filter(function (e) {
                          return e != pini.id
                        })
                      )
                    }
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
