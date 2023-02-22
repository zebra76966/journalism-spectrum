import React from 'react'
import VoteCard from './voteStep2card'
import { useState, useEffect } from 'react'

const btnFix = {
  position: 'fixed',
  bottom: '5%',
  right: '5%',
  zIndex: '99',
} as const

function VoteStepa(props: any) {
  const member = 'rishabh@newslaundry.com'

  // const [options, setOptions] = useState<any[]>([])
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)
  const [calIndex, setCalIndex] = useState(-1)
  const [isSelectOpen, setIsSelectOpen] = useState(false)
  let selected: any = []

  const [currentJournoIndex, setCurrentJournoIndex] = useState({
    cellWeightX: 1,
    cellWeightY: 1,
    index: 15,
  })

  const handleSubmit = async () => {
    setIsSubmitting(true)

    if (!member) {
      // If the user has not logged in, redirect him to the login/signup page
      setIsSubmitting(false)
    }

    // props.allres.journalists.map((ini: any) => {
    console.log(selected)
    // })

    try {
      const submission = 'submit data via POST request'

      console.log({ submission })
      let arr =
        localStorage.getItem('votedInfo') == null
          ? { votedTo: [{}] }
          : JSON.parse(localStorage.getItem('votedInfo') || '{}')
      arr.votedTo.push({
        id: selected.id,
        name: selected.name,
        image: selected.imageURL,
        index: calIndex,
        votedBy: member,
      })
      props.onClick(1)
      localStorage.setItem('votedInfo', JSON.stringify(arr))
      setIsSubmitting(false)

      // Navigate to confirm page
      return submission
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <>
      <div className='container'>
        <div className='section'>
          <div>
            {props.allres.journalists.map((pini: any) => {
              if (props.selected == pini.id) {
                selected = pini
                return (
                  <VoteCard
                    key={pini.id}
                    calculate={(val: number) => setCalIndex(val)}
                    res={pini}
                  />
                )
              }
            })}
          </div>
        </div>
      </div>
      <button onClick={handleSubmit} className='ctav' style={btnFix}>
        Submit <i className='fa fa-check'></i>
      </button>
    </>
  )
}

export default VoteStepa
