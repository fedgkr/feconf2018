import React from 'react';
import css from './FixedButton.scss';

export class FixedButton extends React.Component {
  private anchor: HTMLAnchorElement;

  public componentDidMount() {
    const doc = document.scrollingElement || document.documentElement;
    window.addEventListener('scroll', () => {
      if (doc.scrollTop > 100) {
        this.anchor.classList.add(css.Show);
      } else {
        this.anchor.classList.remove(css.Show);
      }
    });
  }

  public render() {
    return (
      <div className={css.FixedButton}>
        <a className={css.Anchor} href="#" ref={el => (this.anchor = el)} onClick={this.onClickJoin}>
          등록하기
        </a>
      </div>
    );
  }

  private onClickJoin = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    alert('아직 신청 기간이 아닙니다.');
  };
}
