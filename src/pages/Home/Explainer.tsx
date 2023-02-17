import { Slider } from '../../components'
import SearchArea from '../../components/SearchArea/search'
import { useEffect, useState } from 'react'
import { Outlet, Link } from 'react-router-dom'
import { Spectrum } from '../../components/Grid/Spectrum'

function Explainer() {
  // Sepctrum code VARS
  const [averages, setAverages] = useState([])
  const [swingState, setSwingState] = useState('')

  const [activeBtn, setActivebtn] = useState('team')
  let chkBtnstate = activeBtn == 'team' ? 'active' : ''

  return (
    <>
      <div className='section'>
        <h2>What is left and right?</h2>
        <span>
          Brief meaning of both sides. Lorem ipsum dolor sit amet consecture.
          Lorem ipsum dolor sit amet consecture. Brief meaning of both sides.
          Lorem ipsum dolor sit amet consecture. Lorem ipsum dolor sit amet
          consecture. Brief meaning of both sides. Lorem ipsum dolor sit amet
          consecture. Lorem ipsum dolor sit amet consecture. Brief meaning of
          both sides. Lorem ipsum dolor sit amet consecture. Lorem ipsum dolor
          sit amet consecture.
        </span>
      </div>

      <div className='section slideToggler'>
        <h3>Political Spectrum</h3>
        <span>
          Use the sliders below to learn more about political and social views
          in each segment of the spectrum.
        </span>
        <span
          style={{
            background: '#F4F4F4',
            padding: '20px',
            borderRadius: '10px',
          }}
        >
          <Slider type='political' hidetext={true} />
        </span>
      </div>

      <div className='section slideToggler'>
        <h3>Social Spectrum</h3>
        <span>
          Use the sliders below to learn more about political and social views
          in each segment of the spectrum.
        </span>
        <span
          style={{
            background: '#F4F4F4',
            padding: '20px',
            borderRadius: '10px',
          }}
        >
          <Slider type='social' hidetext={true} />
        </span>
      </div>
      <hr />

      <div className='section'>
        <h3>Where do the mainstream journalists lie?</h3>
        <p>Chart based on votes from our in house team and subsribers</p>
        <div className='chartTabber'>
          <button
            className={activeBtn == 'team' ? 'active' : ''}
            style={{ borderRadius: '50rem 0 0 50rem' }}
            onClick={() => setActivebtn('team')}
            id='team'
          >
            {activeBtn == 'team' && (
              <i className='fa fa-check' style={{ paddingRight: '10px' }}></i>
            )}
            NL Team
          </button>
          <button
            className={activeBtn == 'subs' ? 'active' : ''}
            style={{ borderRadius: '0 50rem 50rem 0' }}
            onClick={() => setActivebtn('subs')}
            id='subs'
          >
            {activeBtn == 'subs' && (
              <i className='fa fa-check' style={{ paddingRight: '10px' }}></i>
            )}
            NL Subscribers
          </button>
        </div>

        <div className='container' style={{ position: 'relative' }}>
          <Spectrum selectedJournalist={null} avgJournalists={averages} />
        </div>
      </div>

      <div className='section'>
        <SearchArea />
      </div>

      <hr />

      <div className='section'>
        <h3>Vote yourself!</h3>
        <p>
          What do you think of these journalists? Vote yourself and let the
          world know!
        </p>
        <Link to='/journalism-spectrum/vote' className='ctav'>
          Vote <i className='fa fa-arrow-right'></i>
        </Link>
      </div>
      {/* Swing Newsletter section Start==> */}
      <section className='section'>
        <h2>Some heading describing the newsletters</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea eaque et
          nobis delectus, aut quos, dolorum adipisci maxime expedita laborum
          obcaecati sequi est alias vel sapiente modi quas nostrum. Ab.
        </p>

        <div className='swing-section'>
          <div className='ctaBox'>
            <p className='sm-text'>OPINION</p>
            <h3>
              How feasible is MSP as a legal legal right? the Good, the Bad and
              the Impossible
            </h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id ea,
              quas voluptatum atque quod, dolore voluptate minus debitis numquam
              fuga ratione obcaecati, libero sed quos impedit quaerat
              perspiciatis asperiores veritatis.
            </p>
            <button
              onClick={() => {
                setSwingState('left')
                window.open(`https://eepurl.com/icAf5z`, '_blank')
              }}
              className={`ctav ${swingState === 'left' ? 'active-btn' : ''}`}
            >
              Swing Left
            </button>
          </div>
          <img
            src='https://images.assettype.com/newslaundry/2022-11/2957df0c-31f5-40d5-ac89-036b750e9d67/spectrum_left.png'
            alt='spectrum-left'
          />
        </div>
        <div className='swing-section reverse-row'>
          <div className='ctaBox'>
            <p className='sm-text'>OPINION</p>
            <h3>
              How feasible is MSP as a legal legal right? the Good, the Bad and
              the Impossible
            </h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id ea,
              quas voluptatum atque quod, dolore voluptate minus debitis numquam
              fuga ratione obcaecati, libero sed quos impedit quaerat
              perspiciatis asperiores veritatis.
            </p>
            <button
              onClick={() => {
                setSwingState('right')
                window.open(`https://eepurl.com/icAf5z`, '_blank')
              }}
              className={`ctav ${swingState === 'right' ? 'active-btn' : ''}`}
            >
              Swing Right
            </button>
          </div>
          <img
            src='https://images.assettype.com/newslaundry/2022-11/75b25ccc-793f-42b5-92e2-eb44bf105125/spectrum_right.png'
            alt='spectrum-right'
            className='swing-me-btn-image'
          />
        </div>

        {swingState && (
          <p className='newsletter-open'>
            We will open up a mailchimp newsletter signup page after this:
            <b>
              {swingState === 'right'
                ? 'Swing Me Right Newsletter'
                : 'Swing Me Left Newsletter'}
            </b>
          </p>
        )}
      </section>
      {/* Swing Newsletter section End==> */}
      <Outlet />
    </>
  )
}

export default Explainer
