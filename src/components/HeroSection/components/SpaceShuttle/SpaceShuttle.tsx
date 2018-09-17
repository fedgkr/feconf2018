import React from 'react';
import css from './SpaceShuttle.scss';
import { ArrayUtils } from '../../../../utils/ArrayUtils';
import cc from 'classcat';

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
          return (
            <div
              key={order}
              className={cc({ [css.Star]: true, [css[`Star${order}`]]: true })}
              style={this.getRandomAnimationProp()}
            >
              <img src={`static/images/pages/hero/star-${order}.png`} alt={`Star Image ${order}`} />
            </div>
          );
        })}
      </div>
    );
  }

  private getRandomAnimationProp() {
    return {
      animationDelay: `${1 + (Math.random() * 3)}s`,
      animationDuration: `${2 + (Math.random() * 4)}s`,
    };
  }
}
