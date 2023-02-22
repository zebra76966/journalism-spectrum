import classes from './Slider.module.scss'
import { max, min, map, find, values } from 'lodash'
import React from 'react'

type SliderValue = {
  label: string
  value: number
  description: string
}

type SliderProps = {
  type: 'political' | 'social'
  hidetext: false | true
  index: any
}

const politicalValues: SliderValue[] = [
  {
    label: 'Laissez Faire',
    value: 5,
    description:
      'Liberal Description. Lorem ipsum dolor sit amet consecture. Lorem ipsum dolor sit amet consecture. Lorem ipsum dolor sit amet',
  },
  {
    label: 'Capitalist',
    value: 4,
    description:
      'Liberal Description. Lorem ipsum dolor sit amet consecture. Lorem ipsum dolor sit amet consecture. Lorem ipsum dolor sit amet',
  },
  {
    label: 'Regulationist',
    value: 3,
    description:
      'Slightly liberal Description. Lorem ipsum dolor sit amet consecture. Lorem ipsum dolor sit amet consecture. Lorem ipsum dolor sit amet',
  },
  {
    label: 'Welfarist',
    value: 2,
    description:
      'Centrist Description. Lorem ipsum dolor sit amet consecture. Lorem ipsum dolor sit amet consecture. Lorem ipsum dolor sit amet',
  },
  {
    label: 'Socialist',
    value: 1,
    description:
      'Slightly Conservative Description. Lorem ipsum dolor sit amet consecture. Lorem ipsum dolor sit amet consecture. Lorem ipsum dolor sit amet',
  },
  {
    label: 'Communist',
    value: 0,
    description:
      'Conservative Description. Lorem ipsum dolor sit amet consecture. Lorem ipsum dolor sit amet consecture. Lorem ipsum dolor sit amet',
  },
]

const socialValues: SliderValue[] = [
  {
    label: 'Anarchism',
    value: 5,
    description:
      'Liberal Description. Lorem ipsum dolor sit amet consecture. Lorem ipsum dolor sit amet consecture. Lorem ipsum dolor sit amet',
  },
  {
    label: 'Libertarianism',
    value: 4,
    description:
      'Liberal Description. Lorem ipsum dolor sit amet consecture. Lorem ipsum dolor sit amet consecture. Lorem ipsum dolor sit amet',
  },
  {
    label: 'Liberalism',
    value: 3,
    description:
      'Slightly liberal Description. Lorem ipsum dolor sit amet consecture. Lorem ipsum dolor sit amet consecture. Lorem ipsum dolor sit amet',
  },
  {
    label: 'Statist',
    value: 2,
    description:
      'Centrist Description. Lorem ipsum dolor sit amet consecture. Lorem ipsum dolor sit amet consecture. Lorem ipsum dolor sit amet',
  },
  {
    label: 'Authoritarian',
    value: 1,
    description:
      'Slightly Conservative Description. Lorem ipsum dolor sit amet consecture. Lorem ipsum dolor sit amet consecture. Lorem ipsum dolor sit amet',
  },
  {
    label: 'Totalitarian',
    value: 0,
    description:
      'Conservative Description. Lorem ipsum dolor sit amet consecture. Lorem ipsum dolor sit amet consecture. Lorem ipsum dolor sit amet',
  },
]

function Slider({ type = 'political', hidetext = false, index }: SliderProps) {
  const values = type === 'political' ? politicalValues : socialValues
  const [value, setValue] = React.useState(0)

  return (
    <div className={`${classes.sliderContainer} ${classes[type]}`}>
      <div className={classes.leftRight}>
        <h4>Left</h4>
        <h4>Right</h4>
      </div>
      <input
        className={`${classes.slider} ${classes[type]}`}
        type='range'
        min={min(map(values, 'value'))}
        max={max(map(values, 'value'))}
        step='1'
        defaultValue={1}
        value={value}
        onChange={(e) => {
          setValue(parseInt(e.target.value))
          index(parseInt(e.target.value))
        }}
      />
      <output className={classes[type]}>
        <h3>{find(values, (v) => v.value === value)?.label}</h3>
      </output>
      {hidetext && (
        <span style={{ textAlign: 'center' }}>
          {find(values, (v) => v.value === value)?.description}
        </span>
      )}
    </div>
  )
}

export default Slider
