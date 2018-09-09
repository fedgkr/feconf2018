import React from 'react'
import leftPad from 'left-pad'
import {Digit} from "./components/Digit/Digit";
import css from './FlipClock.scss';

interface FlipClockProps {
  title: string
  value: number
  maxValue: number
}

interface FlipClockState {
}

export class FlipClock extends React.Component<FlipClockProps, FlipClockState> {
  render() {
    const {title, value = 0, maxValue} = this.props
    const strList = leftPad(value, 2, '0').split('')
    return (
      <div className={css.FlipClock}>
        <div className={css.Title}>{title}</div>
        <div className={css.DigitWrap}>
          {strList.map((str, idx) => (
            <Digit
              key={idx}
              value={Number(str)}
              maxValue={parseInt(String(maxValue)[idx], 10)}
            />
          ))}
        </div>
      </div>
    )
  }
}
