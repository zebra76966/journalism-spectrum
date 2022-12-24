import classes from './Slider.module.scss'
import { max, min, map, find } from 'lodash'
import React from 'react'

type SliderValue = {
  label: string
  value: number
  description: string
}

type SliderProps = {
  type: 'political' | 'social'
}

const politicalValues: SliderValue[] = [
  {
    label: 'Liberal',
    value: 2,
    description:
      'Liberal Description. Lorem ipsum dolor sit amet consecture. Lorem ipsum dolor sit amet consecture. Lorem ipsum dolor sit amet',
  },
  {
    label: 'Slightly liberal',
    value: 1,
    description:
      'Slightly liberal Description. Lorem ipsum dolor sit amet consecture. Lorem ipsum dolor sit amet consecture. Lorem ipsum dolor sit amet',
  },
  {
    label: 'Centrist',
    value: 0,
    description:
      'Centrist Description. Lorem ipsum dolor sit amet consecture. Lorem ipsum dolor sit amet consecture. Lorem ipsum dolor sit amet',
  },
  {
    label: 'Slightly Conservative',
    value: -1,
    description:
      'Slightly Conservative Description. Lorem ipsum dolor sit amet consecture. Lorem ipsum dolor sit amet consecture. Lorem ipsum dolor sit amet',
  },
  {
    label: 'Conservative',
    value: -2,
    description:
      'Conservative Description. Lorem ipsum dolor sit amet consecture. Lorem ipsum dolor sit amet consecture. Lorem ipsum dolor sit amet',
  },
]

const socialValues: SliderValue[] = [
  {
    label: 'Liberal',
    value: 2,
    description:
      'Liberal Description. Lorem ipsum dolor sit amet consecture. Lorem ipsum dolor sit amet consecture. Lorem ipsum dolor sit amet',
  },
  {
    label: 'Slightly liberal',
    value: 1,
    description:
      'Slightly liberal Description. Lorem ipsum dolor sit amet consecture. Lorem ipsum dolor sit amet consecture. Lorem ipsum dolor sit amet',
  },
  {
    label: 'Centrist',
    value: 0,
    description:
      'Centrist Description. Lorem ipsum dolor sit amet consecture. Lorem ipsum dolor sit amet consecture. Lorem ipsum dolor sit amet',
  },
  {
    label: 'Slightly Conservative',
    value: -1,
    description:
      'Slightly Conservative Description. Lorem ipsum dolor sit amet consecture. Lorem ipsum dolor sit amet consecture. Lorem ipsum dolor sit amet',
  },
  {
    label: 'Conservative',
    value: -2,
    description:
      'Conservative Description. Lorem ipsum dolor sit amet consecture. Lorem ipsum dolor sit amet consecture. Lorem ipsum dolor sit amet',
  },
]

function Slider({ type = 'political' }: SliderProps) {
  const values = type === 'political' ? politicalValues : socialValues
  const [value, setValue] = React.useState(0)
  return (
    <div className={`${classes.sliderContainer} ${classes[type]}`}>
      <input
        className={`${classes.slider} ${classes[type]}`}
        type='range'
        min={min(map(values, 'value'))}
        max={max(map(values, 'value'))}
        step='1'
        defaultValue={0}
        value={value}
        onChange={(e) => setValue(parseInt(e.target.value))}
      />
      <output className={classes[type]}>
        <h2>{find(values, (v) => v.value === value)?.label}</h2>
      </output>
      <span style={{ textAlign: 'center' }}>
        {find(values, (v) => v.value === value)?.description}
      </span>
    </div>
  )
}

export default Slider
