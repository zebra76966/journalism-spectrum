const Card = (props) => {
  // console.log(props.isVoted)
  let isVoted = props.isVoted ? 'card-select' : ''
  return (
    <>
      <div
        className={`card ${isVoted}`}
        onClick={(e) =>
          isVoted ? props.onDelete(props.res.id) : props.onClick(props.res.id)
        }
      >
        <div
          style={{
            width: '100%',
          }}
        >
          <img src={props.res.dp} className='vote-img' alt='...' />
          <h3>{props.res.name}</h3>
        </div>
        {props.isVoted && <i className='fa fa-check selected-check'></i>}
      </div>
    </>
  )
}

export default Card
