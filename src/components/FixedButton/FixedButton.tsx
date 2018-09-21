import React from 'react';
import css from './FixedButton.scss';
import {CONST} from "../../values/Const";
import {FESTA_LINK_TYPE, GAService} from "../service/ga.service";

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
        <a className={css.Anchor} href={CONST.FESTA_LINK} ref={el => (this.anchor = el)} onClick={() => GAService.festaClick(FESTA_LINK_TYPE.MOBILE)}>
          등록하기
        </a>
      </div>
    );
  }
}
