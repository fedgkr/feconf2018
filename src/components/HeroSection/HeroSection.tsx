import React from 'react';
import { FlipClock } from './components/FlipClock/FlipClock';
import { SpaceShuttle } from './components/SpaceShuttle/SpaceShuttle';
import css from './HeroSection.scss';
import { CONST } from '../../values/Const';
import { FESTA_LINK_TYPE, GAService } from '../service/ga.service';

interface Props {
  appWidth: number;
  deadline: number;
}

interface State {
  presentLeft: LeftTime;
}

interface LeftTime {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export class HeroSection extends React.Component<Props, State> {
  constructor(props: Props) {
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
          <h1 className={css.Logo}>
            <img src="static/images/logo/img-logo@2x.png" alt="FEConf 2018" />
          </h1>
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
          <SpaceShuttle />
          <div className={css.ButtonWrap}>
            <a href={CONST.FESTA_LINK} onClick={() => GAService.festaClick(FESTA_LINK_TYPE.TOP)}>
              <button>컨퍼런스 참가하기</button>
            </a>
            <p className={css.RegisterNotice}>
              <span>2018년 10월 4일(목) 오후 3시부터 신청 가능</span>
              <span>2018.10.04(목) 오후 3시부터 가능</span>
            </p>
          </div>
        </div>
        <div className={css.Background}>
          <img className={css.TopRight} src="static/images/pages/hero/topright-shade.png" alt="Shade" />
          <img className={css.BottomLeft} src="static/images/pages/hero/bottomleft-shade.png" alt="Shade" />
        </div>
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
