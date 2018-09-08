import React from 'react'
import css from './HeroSection.scss'
import {FlipClock} from "./components/FlipClock/FlipClock";
import {Button} from "../Button/Button";

interface HeroSectionProps {
  appWidth: number
  deadline: string
}

interface HeroSectionState {
  presentLeft: LeftTime
}

interface LeftTime {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export class HeroSection extends React.Component<HeroSectionProps, HeroSectionState> {
  constructor(props: HeroSectionProps) {
    super(props)

    this.state = {
      presentLeft: this.getLeftTime(Date.now()),
    }
  }

  componentDidMount() {
    this.timer()
  }

  timer() {
    window.setTimeout(() => {
      this.setState({
        presentLeft: this.getLeftTime(Date.now()),
      })
      this.timer()
    }, 1000)
  }

  getLeftTime(date: number) {
    const {deadline} = this.props
    const endDate = Date.parse(deadline)
    const t = endDate - date
    const seconds = Math.floor((t / 1000) % 60)
    const minutes = Math.floor((t / (1000 * 60)) % 60)
    const hours = Math.floor((t / (1000 * 60 * 60)) % 60)
    const days = Math.floor(t / (1000 * 60 * 60 * 24))

    return {
      days,
      hours,
      minutes,
      seconds,
    }
  }

  render() {
    const {presentLeft} = this.state
    return (
      <div className={css.HeroSection}>
        <div className={css.Content}>
          <div className={css.Logo}>
              <span>FE</span><br/>
              <span>CONF</span><br/>
              <span>2018</span>
          </div>
          <div className={css.ClockWrap}>
            <div className={css.Day}>
              <FlipClock
                title={'DAY'}
                value={presentLeft.days}
                maxValue={99}
              />
            </div>
            <div className={css.Time}>
              <FlipClock
                title={'HOUR'}
                value={presentLeft.hours}
                maxValue={23}
              />
              <div className={css.TimeDivider}>
                <span className={css.Circle} />
                <span className={css.Circle} />
              </div>
              <FlipClock
                title={'MINUTE'}
                value={presentLeft.minutes}
                maxValue={59}
              />
            </div>
          </div>
          <div className={css.ButtonWrap}>
            <a href="https://festa.io">
              <Button
                background="#ffeb3b"
                color="#000"
              >
                컨퍼런스 참가하기
              </Button>
            </a>
          </div>
        </div>
      </div>
    )
  }
}
