import React from 'react';
import cc from 'classcat';
import css from './SpaceShuttle.scss';
import { ArrayUtils } from '../../../../utils/ArrayUtils';

export class SpaceShuttle extends React.Component<{}> {
  public shouldComponentUpdate() {
    return false;
  }

  public render() {
    return (
      <div className={css.SpaceShuttle}>
        <img className={css.Shuttle} src="static/images/pages/hero/shuttle.png" alt="Hero Image" />
        {ArrayUtils.createNArray(6).map(i => {
          const order = i + 1;
          const style = this.getRandomAnimationProp();
          return (
            <div key={order} style={style} className={cc({ [css.Star]: true, [css[`Star${order}`]]: true })}>
              <div className={css.Sprite} />
            </div>
          );
        })}
      </div>
    );
  }

  private getRandomAnimationProp() {
    return {
      animationDelay: `${Math.random()}s`,
      animationDuration: `${1.5}s`,
    };
  }
}
