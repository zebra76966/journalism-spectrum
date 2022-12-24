import classes from './Home.module.css'
import hero from './hero.png'
import Explainer from './Explainer'

function Home() {
  return (
    <div className='page'>
      <div className={classes.hero}>
        <div
          className={classes.image}
          style={{ backgroundImage: `url(${hero})` }}
        />
        <div className='column'>
          <h1>Journalism Spectrum</h1>
          <div className={classes.copy}>
            Are your views truly neutral? In the age of information, it is easy
            to get into echo chambers of your own opinions.{' '}
          </div>
          <div className={classes.copy}>
            To get out of your echo chambers you need to consume diverse news.
            Learn which side your preferred journalists lean on and make sure to
            hear the opinon of the other side.
          </div>
        </div>
      </div>
      <div className={classes.section}>
        <Explainer />
      </div>
    </div>
  )
}

export default Home
