const Card = (props: any) => {
  return (
    <>
      <div className='card'>
        <div
          style={{
            width: '100%',
          }}
        >
          <img
            src={props.res.imageURL}
            style={{
              width: '200px',
              height: '200px',
              objectFit: 'cover',
              borderRadius: '100%',
            }}
            alt='...'
          />
          <h3>{props.res.name}</h3>
          <h4>Journalist</h4>
          <a href={props.res.twitterProfileURL}>
            <i className='fa fa-twitter' />
          </a>
        </div>
      </div>
    </>
  )
}

export default Card
