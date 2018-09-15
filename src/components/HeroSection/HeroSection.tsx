import React from 'react';
import { FlipClock } from './components/FlipClock/FlipClock';
import css from './HeroSection.scss';
import {CanvasStar} from "./components/CanvasStar/CanvasStar";

interface HeroSectionProps {
  appWidth: number;
  deadline: number;
}

interface HeroSectionState {
  presentLeft: LeftTime;
}

interface LeftTime {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export class HeroSection extends React.Component<HeroSectionProps, HeroSectionState> {
  constructor(props: HeroSectionProps) {
    super(props);

    this.state = {
      presentLeft: this.getLeftTime(Date.now()),
    };
  }

  public componentDidMount() {
    this.timer();
  }

  public render() {
    const { presentLeft } = this.state;
    return (
      <section className={css.HeroSection}>
        <div className={css.Content}>
          <h2 className={css.Logo}>
            <img src="static/images/logo/img-logo@2x.png" alt="FEConf 2018" />
          </h2>
          <div className={css.ClockWrap}>
            <div className={css.Day}>
              <FlipClock title={'DAY'} value={presentLeft.days} maxValue={99} />
            </div>
            <div className={css.Time}>
              <FlipClock title={'HOUR'} value={presentLeft.hours} maxValue={23} />
              <div className={css.TimeDivider}>
                <span className={css.Circle} />
                <span className={css.Circle} />
              </div>
              <FlipClock title={'MINUTE'} value={presentLeft.minutes} maxValue={59} />
            </div>
          </div>
          <div className={css.HeroImage}>
            <img src="static/images/pages/hero/spaceshuttle@2x.png" alt="Hero Image" />
          </div>
          <div className={css.ButtonWrap}>
            <a href="https://festa.io">
              <button>컨퍼런스 참가하기</button>
            </a>
          </div>
        </div>
        <CanvasStar />
      </section>
    );
  }

  private timer() {
    window.setTimeout(() => {
      this.setState({
        presentLeft: this.getLeftTime(Date.now()),
      });
      this.timer();
    }, 1000);
  }

  private getLeftTime(date: number) {
    const { deadline } = this.props;
    const t = deadline - date;
    const seconds = Math.floor((t / 1000) % 60);
    const minutes = Math.floor((t / (1000 * 60)) % 60);
    const hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    const days = Math.floor(t / (1000 * 60 * 60 * 24));

    return {
      days,
      hours,
      minutes,
      seconds,
    };
  }
}
