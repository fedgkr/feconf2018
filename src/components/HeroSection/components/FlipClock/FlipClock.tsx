import React from 'react'
import leftPad from 'left-pad'
import css from './FlipClock.scss'
import {Digit} from "./components/Digit/Digit";

interface FlipClockProps {
  title: string
  value: number
}

interface FlipClockState {
}

export class FlipClock extends React.Component<FlipClockProps, FlipClockState> {
  render() {
    const {title, value = 0} = this.props
    const strList = leftPad(value, 2, '0').split('')
    return (
      <div className={css.FlipClock}>
        <div className={css.Title}>{title}</div>
        <div className={css.DigitWrap}>
          {strList.map((str, idx) => <Digit key={idx} value={Number(str)} />)}
        </div>
      </div>
    )
  }
}
