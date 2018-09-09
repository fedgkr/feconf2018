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
              <span>프론트엔드 개발자에 의한! 프론트엔드 개발자를 위한!</span>
              <br />
              <span>프론트엔드 개발의 소중한 경험을 공유합니다!</span>
            </div>
            <div className={css.Desc}>
              프론트엔드를 개발하며 마주했던 치열한 고민과 깊은 인사이트를 공유하며 여러분과 함께 성장하고 싶습니다.
              프론트엔드를 개발하며 마주했던 치열한 고민과 깊은 인사이트를 공유하며 여러분과 함께 성장하고 싶습니다.
              프론트엔드를 개발하며 마주했던 치열한 고민과 깊은 인사이트를 공유하며 여러분과 함께 성장하고 싶습니다.
            </div>
            <div className={css.Date}>2018년 11월 03일 토요일 10:00 - 17:00</div>
            <div className={css.Location}>Lotte Tower 31F | 서울시 송파구 올림픽로 300</div>
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