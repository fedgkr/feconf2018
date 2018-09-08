import React from 'react'
import cc from 'classcat'
import css from './Digit.scss'

interface DigitProps {
  value: number
  maxValue: number
}

interface DigitState {
  present: number
  next: number
  flip: boolean
}

export class Digit extends React.Component<DigitProps, DigitState> {
  topFront: HTMLDivElement
  topBack: HTMLDivElement
  bottomFront: HTMLDivElement

  constructor(props: DigitProps) {
    super(props)

    this.state = {
      present: 0,
      next: 0,
      flip: false,
    }
  }

  componentDidMount() {
    this.flip(this.props.value)
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.value !== nextProps.value) {
      this.flip(nextProps.value)
    }
  }

  flip(present) {
    const next = present - 1 < 0 ? this.props.maxValue : present - 1
    this.setState({flip: true})
    setTimeout(() => {
      this.setState({present, next, flip: false})
    }, 750)
  }

  render() {
    const {present, next, flip} = this.state
    return (
      <div className={css.Digit}>
        <div className={css.Top}>
          <div
            ref={el => (this.topFront = el)}
            className={cc({
              [css.Front]: true,
              [css.Flip]: flip,
            })}
          >
            {present}
          </div>
          <div
            ref={el => (this.topBack = el)}
            className={cc({
              [css.Back]: true,
              [css.Flip]: flip,
            })}
          >
            {next}
          </div>
          <div className={css.Next}>{next}</div>
        </div>
        <div className={css.Bottom}>
          <div ref={el => (this.bottomFront= el)} className={css.Front}>
            {present}
          </div>
        </div>
      </div>
    )
  }
}
