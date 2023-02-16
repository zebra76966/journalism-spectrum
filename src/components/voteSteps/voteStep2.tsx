import React from 'react'
import VoteCard from './voteStep2card'
import { useState } from 'react'

function SearchArea(props: any) {
  return (
    <>
      <div className='container'>
        <div className='section'>
          <div>
            {props.allres.journalists.map((pini: any) => {
              if (props.selected.includes(pini.id)) {
                return <VoteCard key={pini.id} res={pini} />
              }
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default SearchArea
