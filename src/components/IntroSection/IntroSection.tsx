import { Button } from 'components/Button/Button';
import React from 'react';
import css from './IntroSection.scss';

interface IntroSectionProps {
  appWidth: number;
}

export class IntroSection extends React.Component<IntroSectionProps> {
  public render() {
    return (
      <div className={css.IntroSection}>
        <div className={css.Content}>
          <div className={css.TitleArea}>
            <span>2018</span>
            <br />
            <span>프론트엔드</span>
            <br />
            <span>컨퍼런스</span>
            <br />
            <span>코리아</span>
          </div>
          <div className={css.DescArea}>
            <div className={css.Title}>INTRO</div>
            <div className={css.SubTitle}>
              <span>Enjoy Experience Everywhere</span>
              <br />
              <span>프론트엔드 개발의 소중한 경험을 공유합니다!</span>
            </div>
            <div className={css.Desc}>
              <p>
                작년 가을 첫걸음을 내디딘 FEConf를 기억하는지요?<br />
                발표자의 소중한 경험이 담긴 주제와 여러분의 참여가 있었기에 가능했습니다.<br />
                올해는 더 많은 발표자를 모시고 더 많은 자리를 마련했습니다.<br />
                프론트엔드를 개발하며 마주했던 치열한 고민과 깊은 인사이트를 공유하며 여러분과 함께 성장하고 싶습니다.<br />
                프론트엔드 개발자의 축제 FEConf! 여러분과 함께 즐기겠습니다!
              </p>
            </div>
            <div className={css.Date}>
              <img src="static/images/pages/intro/calendar@2x.png" alt="Calendar"/>
              <p>2018년 11월 03일 토요일 10:00 - 17:00</p>
            </div>
            <div className={css.Location}>
              <img src="static/images/pages/intro/map@2x.png" alt="Map"/>
              <p>Lotte Tower 31F | 서울시 송파구 올림픽로 300</p>
            </div>
            <div className={css.ButtonWrap}>
              <Button background="#a821d2" color="#fff">
                사전 등록하기
              </Button>
            </div>
          </div>
          <div className="clear" />
        </div>
      </div>
    );
  }
}
