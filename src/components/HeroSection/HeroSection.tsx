import React from 'react';
import { FlipClock } from './components/FlipClock/FlipClock';
import { SpaceShuttle } from './components/SpaceShuttle/SpaceShuttle';
import { CONST } from '../../values/Const';
import css from './HeroSection.scss';

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
          <div className={css.SocialWrap}>
            <ul className={css.SocialList}>
              <li className={css.SocialItem}>
                <a href="https://www.facebook.com/groups/webfrontend" title="프론트엔드개발그룹" target="_blank">
                  <span className="blind">프론트엔드개발그룹</span>
                </a>
              </li>
              <li className={css.SocialItem}>
                <a href="https://www.facebook.com/feconf.kr" title="FEConf 페이스북 페이지" target="_blank">
                  <span className="blind">FEConf 페이지</span>
                </a>
              </li>
              <li className={css.SocialItem}>
                <a href="mailto:feconf@googlegroups.com" title="FEConf 이메일" target="_blank">
                  <span className="blind">이메일</span>
                </a>
              </li>
            </ul>
          </div>
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
            <a href={CONST.JOIN_LINK} onClick={this.onClickJoin}>
              <button>컨퍼런스 참가하기</button>
            </a>
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
    let t = deadline - date;

    if (t <= 0) {
      t = 0;
    }

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

  private onClickJoin(event: React.MouseEvent<HTMLAnchorElement>) {
    event.preventDefault();
    alert('참가 신청을 마감했습니다.');
  }
}
