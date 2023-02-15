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
        <div className='container' style={{ padding: '0 1rem' }}>
          <div className='success'>
            <h3>
              <i className='fa fa-check'></i> Vote your Journalist?
            </h3>
            <p>
              Let your friends know their biases! Share the journalism spectrum
              with them.
            </p>
            <button onClick={() => setStep((ini) => ini + 0)}>
              <i className='fa fa-arrow-left'></i> Share
            </button>
          </div>
        </div>
      )
      break
    default:
      break
  }
}

export default Voting
