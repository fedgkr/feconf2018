import React from 'react';
import css from './FooterSection.scss';

export class FooterSection extends React.Component {
  public render() {
    return (
      <footer className={css.FooterSection}>
        <div className={css.Content}>
          <div className={css.Title}>
            Enjoy Experience Everywhere!<br />
            FEConf 2018은 여러분의 참여를 기다립니다.
          </div>

          <a href="https://festa.io">
            <button className={css.Button}>지금 등록하러 가기</button>
          </a>
        </div>
      </footer>
    );
  }
}
