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
  constructor(props: FlipClockProps) {
    super(props)
  }

  render() {
    const {title, value = 0} = this.props
    const strValue = leftPad(value, 2, '0')
    return (
      <div className={css.FlipClock}>
        <div className={css.Title}>{title}</div>
        <div className={css.DigitWrap}>
          <div className={css.Digit}>
            <div className={css.Front}></div>
            <div className={css.Back}></div>
          </div>
          <div className={css.Digit}>
            <div className={css.Front}></div>
            <div className={css.Back}></div>
          </div>
        </div>
      </div>
    )
  }
}
