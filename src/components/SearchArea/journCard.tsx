const Card = (props) => {
  return (
    <>
      <div className='card'>
        <div
          style={{
            width: '100%',
          }}
        >
          <img
            src={props.res.dp}
            style={{
              width: '250px',
              height: '250px',
              objectFit: 'cover',
              borderRadius: '100%',
            }}
            alt='...'
          />
          <h3>{props.res.name}</h3>
          <h4>{props.res.job}</h4>
          <a href='#'>
            <i className='fa fa-twitter' />
          </a>
        </div>
      </div>
    </>
  )
}

export default Card
