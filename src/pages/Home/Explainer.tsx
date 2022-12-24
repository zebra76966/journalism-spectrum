import { Slider } from '../../components'

function Explainer() {
  return (
    <div className='section'>
      <h2>Political and Social Spectrum</h2>
      <span>
        Use the sliders below to learn more about political and social views in
        each segment of the spectrum.
      </span>
      <Slider type='political' />
      <Slider type='social' />
    </div>
  )
}

export default Explainer
