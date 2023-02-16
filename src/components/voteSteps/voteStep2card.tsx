import { Slider } from '../Slider'

const cardAlign = {
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
}

const VoteCard = (props: any) => {
  return (
    <div className='container' style={{ marginBottom: '100px' }}>
      <div className='card'>
        <div style={cardAlign}>
          <img src={props.res.imageURL} className='vote-img' alt='...' />
          <h3 style={{ fontWeight: 'bold' }}>{props.res.name}</h3>
        </div>
      </div>
      <p style={{ color: 'rgba(0, 0, 0, 0.6)' }}>Political Spectrum</p>
      <Slider type='political' hidetext={false} />
      <p style={{ color: 'rgba(0, 0, 0, 0.6)' }}>Social Spectrum</p>
      <Slider type='social' hidetext={false} />
    </div>
  )
}

export default VoteCard
