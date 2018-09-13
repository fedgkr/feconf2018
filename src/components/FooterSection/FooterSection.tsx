import React from 'react';
import css from './FooterSection.scss';

export class FooterSection extends React.Component {
  public render() {
    return (
      <footer className={css.FooterSection}>
        <div className={css.Content}>
          <p className={css.Title}>
            <span>Enjoy Experience Everywhere!</span>
            <br />
            <span>FEConf 2018은 여러분의 참여를 기다립니다.</span>
          </p>

          <a href="https://festa.io">
            <button className={css.Button}>지금 등록하러 가기</button>
          </a>
          <div className={css.LeftImage}>
            <img className={css.PC} src="static/images/pages/footer/bottomleft-illust@2x.png" alt="People" />
            <img className={css.Mobile} src="static/images/pages/footer/mobile-bottomleft-illust@2x.png" alt="People" />
          </div>
          <div className={css.RightImage}>
            <img className={css.PC} src="static/images/pages/footer/bottomright-illust@2x.png" alt="People" />
            <img
              className={css.Mobile}
              src="static/images/pages/footer/mobile-bottomright-illust@2x.png"
              alt="People"
            />
          </div>
        </div>
      </footer>
    );
  }
}
