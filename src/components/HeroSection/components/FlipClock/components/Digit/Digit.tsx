import React from 'react'
import css from './Digit.scss'

interface DigitProps {
  value: number
}

interface DigitState {
}

export class Digit extends React.Component<DigitProps, DigitState> {
  topFront: HTMLDivElement
  bottomFront: HTMLDivElement
  constructor(props: DigitProps) {
    super(props)
  }

  componentDidMount() {
    setTimeout(() => {
      this.topFront.style.transform = 'rotateX(180deg)'
    }, 1000)
  }

  render() {
    const {value = 0} = this.props
    return (
      <div className={css.Digit}>
        <div className={css.Top}>
          <div ref={el => (this.topFront = el)} className={css.Front}>{value}</div>
          <div className={css.Back}>{Number(value) + 1}</div>
        </div>
        <div className={css.Bottom}>
          <div ref={el => (this.bottomFront= el)} className={css.Front}>{value}</div>
          <div className={css.Back}>{Number(value) + 1}</div>
        </div>
      </div>
    )
  }
}
