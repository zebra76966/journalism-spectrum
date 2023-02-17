import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { JournoChip } from './JournoChip'
import { JournoTileGroup } from './JournoTileGroup'
import ogData from '../../components/Grid/data.json'

import { COL_HEADERS, NO_OF_COLS, NO_OF_ROWS, ROW_HEADERS } from './constants'
import './Grid.css'

const Grid = ({
  selectedJournalist,
  clearCurrentJournalistSelection,
  avgJournalists,
  currentJournoIndex = {
    cellWeightX: 1,
    cellWeightY: 1,
    index: 15,
  },
  setCurrentJournoIndex,
  resetCurrentJournoIndex,
}: any) => {
  const [datas, setData] = useState(ogData)
  const ndata = datas.journalists.slice(0, 4)

  const [currentUrl, setCurrentUrl] = useState('')
  useEffect(() => {
    let cu = window.location.pathname
    setCurrentUrl(cu)
  }, [])

  const [items] = useState(
    [...Array(NO_OF_COLS * NO_OF_ROWS)].map((elem, i) => {
      return {
        cellWeightX: COL_HEADERS[i % 6].weight,
        cellWeightY: ROW_HEADERS[Math.floor(i / 6)].weight,
        index: i,
      }
    })
  )

  const handleDrop = (
    e: any,
    itemIndex: any,
    itemCellWeightX: any,
    itemCellWeightY: any
  ) => {
    console.log({ itemIndex, itemCellWeightX, itemCellWeightY })
    console.log({ handleDrop: e.target })

    e.preventDefault()
    e.stopPropagation()

    setCurrentJournoIndex({
      cellWeightX: itemCellWeightX,
      cellWeightY: itemCellWeightY,
      index: itemIndex,
    })
  }
  // Getting voting data start===>
  const [votingBallot, setVotingBallot] = useState<any>([])
  useEffect(() => {
    let votedData =
      localStorage.getItem('votedInfo') == null
        ? null
        : JSON.parse(localStorage.getItem('votedInfo') || '{}')

    votedData !== null ? setVotingBallot(votedData.votedTo) : ''
  }, [])
  let count = 0
  let countMain = 0
  // Getting Voting Data end==>

  return (
    <div className='spectrum-grid'>
      {items.map((item, j) => {
        const toPaintBorderRight = item.cellWeightX === -1
        const toPaintBorderLeft = item.cellWeightX === 1
        const toPaintBorderUp = item.cellWeightY === -1
        const toPaintBorderDown = item.cellWeightY === 1
        count = 0
        return (
          <div
            className={`grid-item ${
              item.index === currentJournoIndex.index &&
              selectedJournalist !== null
                ? ''
                : 'grid-cell'
            } ${toPaintBorderRight ? 'border-r' : ''} ${
              toPaintBorderLeft ? 'border-l' : ''
            } ${toPaintBorderUp ? 'border-t' : ''} ${
              toPaintBorderDown ? 'border-b' : ''
            }`}
            key={item.index}
            onDrop={(e) =>
              handleDrop(e, item.index, item.cellWeightX, item.cellWeightY)
            }
            onDragOver={(e) => {
              e.preventDefault()
              e.stopPropagation()
              return false
            }}
          >
            <>
              {currentUrl == '/journalism-spectrum/' &&
                votingBallot.length !== 0 && (
                  <div className='votedGrid'>
                    {votingBallot.map((ini: any, i: number) => {
                      if (ini.index == item.index && count <= 2) {
                        count = count + 1
                        return <img src={ini.image} className='smDpimg' />
                      } else if (ini.index == item.index && count > 2) {
                        count = count + 1
                        countMain = countMain + 1
                      }
                    })}
                    {count > 2 && (
                      <span className='smDptext'>+ {countMain + 1}</span>
                    )}
                  </div>
                )}
            </>

            {avgJournalists &&
            avgJournalists.filter(
              (journo: any) =>
                journo.avgCellWeightX === item.cellWeightX &&
                journo.avgCellWeightY === item.cellWeightY
            ).length ? (
              <JournoTileGroup
                journalists={avgJournalists.filter(
                  (journo: any) =>
                    journo.avgCellWeightX === item.cellWeightX &&
                    journo.avgCellWeightY === item.cellWeightY
                )}
              />
            ) : item.index === currentJournoIndex.index &&
              selectedJournalist !== null ? (
              <JournoChip
                selectedJournalist={selectedJournalist}
                clearCurrentJournalistSelection={
                  clearCurrentJournalistSelection
                }
                resetCurrentJournoIndex={resetCurrentJournoIndex}
              />
            ) : (
              <></>
            )}
          </div>
        )
      })}
    </div>
  )
}

Grid.propTypes = {
  selectedJournalist: PropTypes.object,
  clearCurrentJournalistSelection: PropTypes.func,
  avgJournalists: PropTypes.array,
  currentJournoIndex: PropTypes.object,
  setCurrentJournoIndex: PropTypes.func,
  resetCurrentJournoIndex: PropTypes.func,
}

export { Grid }
