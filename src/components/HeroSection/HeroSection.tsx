import React from 'react'
import css from './HeroSection.scss'
import {FlipClock} from "./components/FlipClock/FlipClock";
import {Button} from "../Button/Button";

interface HeroSectionProps {
}

interface HeroSectionState {
}

export class HeroSection extends React.Component<HeroSectionProps, HeroSectionState> {
  constructor(props: HeroSectionProps) {
    super(props)
  }

  render() {
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
                value={50}
              />
            </div>
            <div className={css.Time}>
              <FlipClock
                title={'HOUR'}
                value={13}
              />
              <div className={css.TimeDivider}>
                <span className={css.Circle} />
                <span className={css.Circle} />
              </div>
              <FlipClock
                title={'MINUTE'}
                value={56}
              />
            </div>
          </div>
          <div className={css.ButtonWrap}>
            <a href="https://festa.io">
              <Button
                background="#ffeb3b"
                color="#000"
                label="컨퍼런스 참가하기"
              />
            </a>
          </div>
        </div>
      </div>
    )
  }
}
