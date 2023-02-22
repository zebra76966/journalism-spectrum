import { useState, useEffect } from 'react'
import { Slider } from '../Slider'

const cardAlign = {
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
}

const VoteCard = (props: any) => {
  const [xCoor, setXCoor] = useState(0)
  const [yCoor, setYCoor] = useState(0)

  useEffect(() => {
    let x = xCoor
    let y = yCoor
    let index = x + y * 6
    props.calculate(index)
  }, [xCoor, yCoor])

  return (
    <div className='container' style={{ marginBottom: '100px' }}>
      <div className='card'>
        <div style={cardAlign}>
          <img src={props.res.imageURL} className='vote-img' alt='...' />
          <h3 style={{ fontWeight: 'bold' }}>{props.res.name}</h3>
        </div>
      </div>
      <p style={{ color: 'rgba(0, 0, 0, 0.6)' }}>Political Spectrum</p>
      <Slider
        type='political'
        hidetext={false}
        index={(val: number) => setXCoor(val)}
      />
      <p style={{ color: 'rgba(0, 0, 0, 0.6)' }}>Social Spectrum</p>
      <Slider
        type='social'
        hidetext={false}
        index={(val: number) => setYCoor(val)}
      />
    </div>
  )
}

export default VoteCard
