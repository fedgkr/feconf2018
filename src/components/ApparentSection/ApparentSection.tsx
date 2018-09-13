import React from 'react';
import css from './ApparentSection.scss';

interface Props {
  rootMargin?: string;
}

export class ApparentSection extends React.Component<Props> {
  private wrapper: HTMLElement;

  public componentDidMount() {
    const { rootMargin } = this.props;
    const options = { threshold: 0, rootMargin: rootMargin || '-70px' };
    const io = new IntersectionObserver(this.onIntersecting, options);
    io.observe(this.wrapper);
  }

  public render() {
    return (
      <div className={css.ApparentSection} ref={el => (this.wrapper = el)}>
        {this.props.children}
      </div>
    );
  }

  private onIntersecting = (entries: IntersectionObserverEntry[]) => {
    entries.forEach(({ target, isIntersecting }) => {
      if (isIntersecting) {
        target.classList.add(css.appear);
      } else {
        target.classList.remove(css.appear);
      }
    });
  };
}
