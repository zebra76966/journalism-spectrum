import { Slider } from '../../components'
import SearchArea from '../../components/SearchArea/search'
import { useState } from 'react'

function Explainer() {
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

      <div className='section'>
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
          <Slider type='political' />
        </span>
      </div>

      <div className='section'>
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
          <Slider type='social' />
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
        <button className='ctav'>
          Vote <i className='fa fa-arrow-right'></i>
        </button>
      </div>
    </>
  )
}

export default Explainer
