import React from 'react';
import cc from 'classcat';
import css from './SpaceShuttle.scss';
import { ArrayUtils } from '../../../../utils/ArrayUtils';

interface State {
  active: boolean;
}

export class SpaceShuttle extends React.Component<{}, State> {
  public state = {
    active: false,
  };
  private wrapper: HTMLElement;

  public componentDidMount() {
    const options = { threshold: 0, rootMargin: '-70px' };
    const io = new IntersectionObserver(this.onIntersecting, options);
    io.observe(this.wrapper);
  }

  public shouldComponentUpdate(_, nextState: State) {
    return this.state.active !== nextState.active;
  }

  public render() {
    const { active } = this.state;
    return (
      <div className={css.SpaceShuttle} ref={el => (this.wrapper = el)}>
        <img className={css.Shuttle} src="static/images/pages/hero/shuttle.png" alt="Hero Image" />
        {ArrayUtils.createNArray(6).map(i => {
          const order = i + 1;
          const style = this.getRandomAnimationProp();
          return (
            <div
              key={order}
              style={style}
              className={cc({
                [css.Star]: true,
                [css[`Star${order}`]]: true,
                [css.active]: active,
              })}
            >
              <div className={css.Sprite} />
            </div>
          );
        })}
      </div>
    );
  }

  private getRandomAnimationProp() {
    const { active } = this.state;
    return {
      transitionDelay: active ? `${Math.random() / 3}s` : '0s',
      transitionDuration: active ? `${1.5}s` : '0s',
    };
  }

  private onIntersecting = (entries: IntersectionObserverEntry[]) => {
    entries.forEach(({ isIntersecting }) => {
      this.setState({ active: isIntersecting });
    });
  };
}
