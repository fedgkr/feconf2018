import React from 'react'
import leftPad from 'left-pad'
import css from './FlipClock.scss'

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
          {strList.map((str, idx) => (
            <div key={idx} className={css.Digit}>
              <div className={css.Top}>
                <div className={css.Front}>{str}</div>
                <div className={css.Back}>{str}</div>
              </div>
              <div className={css.Bottom}>
                <div className={css.Front}>{str}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }
}
