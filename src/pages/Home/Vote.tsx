import SearchArea from '../../components/voteSteps/votesearch'
import VoteStepa from '../../components/voteSteps/voteStep2'
import mockData from '../../components/voteSteps/MOCK_DATA.json'
import { JournalismSpectrumEdit } from '../../components/Grid/SpectrumEditPage'
import { useState } from 'react'

const btnFix = {
  position: 'fixed',
  bottom: '5%',
  right: '5%',
  zIndex: '99',
} as const
const btnBack = {
  background: 'none',
  border: 'none',
  color: '#214354',
  fontWeight: '400',
  fontSize: '32px',
} as const

const Voting = (): JSX.Element | any => {
  const [swingState, setSwingState] = useState('')
  const [datas, setData] = useState(mockData)
  const [selectog, setSelectTog] = useState<number[]>([])
  const [warntog, setWarntog] = useState(false)
  const [steps, setStep] = useState(1)
  console.log(selectog)
  const warn = {
    color: '#ed1b24',
    background: 'rgb(255 202 202)',
    padding: '20px',
    borderRadius: '5px',
    display: warntog ? 'block' : 'none',
    textAlign: 'center',
  } as const

  switch (steps) {
    case 1:
      return (
        <>
          <div className='hideDesk'>
            <JournalismSpectrumEdit
              onClick={(val: any) => setStep((ini) => ini + val)}
            />
          </div>

          <div className='container slideToggler' style={{ padding: '0 1rem' }}>
            <h4 style={warn}>Please Choose atleast One!</h4>
            <SearchArea
              allres={datas}
              selected={selectog}
              onClick={(val: number) => setSelectTog((ini) => [...ini, val])}
              onDelete={(val: number) =>
                setSelectTog((ini) =>
                  ini.filter(function (e) {
                    return e != val
                  })
                )
              }
            />
            <button
              onClick={() =>
                selectog.length == 0
                  ? setWarntog(true)
                  : setStep((ini) => ini + 1)
              }
              className='ctav'
              style={btnFix}
            >
              Proceed to vote <i className='fa fa-arrow-right'></i>
            </button>
          </div>
        </>
      )
      break
    case 2:
      return (
        <div className='container' style={{ padding: '0 1rem' }}>
          <div style={{ display: 'flex', padding: '0 10px' }}>
            <button onClick={() => setStep((ini) => ini - 1)} style={btnBack}>
              <i className='fa fa-arrow-left'></i>
            </button>

            <h1 style={{ margin: '0 auto' }}>Vote your Journalist?</h1>
          </div>
          <VoteStepa allres={datas} selected={selectog} />
          <button
            onClick={() => setStep((ini) => ini + 1)}
            className='ctav'
            style={btnFix}
          >
            Submit <i className='fa fa-check'></i>
          </button>
        </div>
      )
      break
    case 3:
      return (
        <>
          <div className='container' style={{ padding: '0 1rem' }}>
            <div className='success'>
              <h3>
                <i className='fa fa-check'></i> Vote your Journalist?
              </h3>
              <p>
                Let your friends know their biases! Share the journalism
                spectrum with them.
              </p>
              <button onClick={() => setStep((ini) => ini + 0)}>
                <i className='fa fa-arrow-left'></i> Share
              </button>
            </div>
          </div>

          {/* Swing Newsletter section Start==> */}
          <section className='section text-center'>
            <h2>Some heading describing the newsletters</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea eaque
              et nobis delectus, aut quos, dolorum adipisci maxime expedita
              laborum obcaecati sequi est alias vel sapiente modi quas nostrum.
              Ab.
            </p>

            <div className='swing-section'>
              <div className='ctaBox'>
                <p className='sm-text'>OPINION</p>
                <h3>
                  How feasible is MSP as a legal legal right? the Good, the Bad
                  and the Impossible
                </h3>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id
                  ea, quas voluptatum atque quod, dolore voluptate minus debitis
                  numquam fuga ratione obcaecati, libero sed quos impedit
                  quaerat perspiciatis asperiores veritatis.
                </p>
                <button
                  onClick={() => {
                    setSwingState('left')
                    window.open(`https://eepurl.com/icAf5z`, '_blank')
                  }}
                  className={`ctav ${
                    swingState === 'left' ? 'active-btn' : ''
                  }`}
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
                  How feasible is MSP as a legal legal right? the Good, the Bad
                  and the Impossible
                </h3>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id
                  ea, quas voluptatum atque quod, dolore voluptate minus debitis
                  numquam fuga ratione obcaecati, libero sed quos impedit
                  quaerat perspiciatis asperiores veritatis.
                </p>
                <button
                  onClick={() => {
                    setSwingState('right')
                    window.open(`https://eepurl.com/icAf5z`, '_blank')
                  }}
                  className={`ctav ${
                    swingState === 'right' ? 'active-btn' : ''
                  }`}
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
        </>
      )
      break
    default:
      break
  }
}

export default Voting
