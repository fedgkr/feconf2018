import React from 'react';
import css from './ApparentSection.scss';

export class ApparentSection extends React.Component {
  private wrapper: HTMLElement;
  private target: HTMLElement;

  public componentDidMount() {
    const options = { threshold: 0, rootMargin: '-70px' };
    const io = new IntersectionObserver(this.onIntersecting, options);
    io.observe(this.wrapper);
  }

  public render() {
    return (
      <div className={css.ApparentSection} ref={el => (this.wrapper = el)}>
        <div className={css.Target} ref={el => (this.target = el)}>
          {this.props.children}
        </div>
      </div>
    );
  }

  private onIntersecting = (entries: IntersectionObserverEntry[]) => {
    entries.forEach(({ isIntersecting }) => {
      if (isIntersecting) {
        this.target.classList.add(css.appear);
      } else {
        this.target.classList.remove(css.appear);
      }
    });
  };
}
