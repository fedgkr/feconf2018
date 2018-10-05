import React from 'react';
import css from './FooterSection.scss';

export class FooterSection extends React.Component {
  private wrapper: HTMLElement;

  public componentDidMount() {
    const options = { threshold: 0.4 };
    const io = new IntersectionObserver(this.onIntersecting, options);
    io.observe(this.wrapper);
  }

  public render() {
    return (
      <footer className={css.FooterSection} ref={el => (this.wrapper = el)}>
        <div className={css.Content}>
          <p className={css.Title}>
            <span>Enjoy Experience Everywhere!</span>
            <br />
            <span>FEConf 2018은 여러분의 참여를 기다립니다.</span>
          </p>

          <a href="#" onClick={this.onClickJoin}>
            <button className={css.Button}>지금 등록하러 가기</button>
          </a>
          <img className={css.ImageCut1} src="static/images/pages/footer/cut1.png" aria-hidden="true" />
          <img className={css.ImageCut2} src="static/images/pages/footer/cut2.png" aria-hidden="true" />
          <img className={css.ImageCut3} src="static/images/pages/footer/cut3.png" aria-hidden="true" />
          <img className={css.ImageCut4} src="static/images/pages/footer/cut4.png" aria-hidden="true" />
          <img className={css.ImageCut5} src="static/images/pages/footer/cut5.png" aria-hidden="true" />
          <img className={css.ImageCut6} src="static/images/pages/footer/cut6.png" aria-hidden="true" />
          <img className={css.ImageCut7} src="static/images/pages/footer/cut7.png" aria-hidden="true" />
        </div>
      </footer>
    );
  }

  private onIntersecting = (entries: IntersectionObserverEntry[]) => {
    entries.forEach(({ target, intersectionRatio }) => {
      if (intersectionRatio >= 0.4) {
        target.classList.add(css.appear);
      } else {
        target.classList.remove(css.appear);
      }
    });
  };

  private onClickJoin = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    alert('아직 신청 기간이 아닙니다.');
  };
}
