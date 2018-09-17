import React from 'react';
import cc from 'classcat';
import css from './SpaceShuttle.scss';
import { ArrayUtils } from '../../../../utils/ArrayUtils';
import {WindowUtils} from "../../../../utils/WindowUtils";

const starPosition = {
  0: {
    left: 12 / 100,
    top: 15 / 100,
  },
  1: {
    left: 29 / 100,
    top: 23 / 100,
  },
  2: {
    left: 18.6 / 100,
    top: 42.7 / 100,
  },
  3: {
    left: 73.5 / 100,
    top: 21 / 100,
  },
  4: {
    left: 81 / 100,
    top: 35.3 / 100,
  },
  5: {
    left: 91 / 100,
    top: 20 / 100,
  },
}

export class SpaceShuttle extends React.Component<{}> {
  public shouldComponentUpdate() {
    return false;
  }

  public render() {
    const appWidth = WindowUtils.getWidth()
    const isMobile = WindowUtils.isMobileSize()
    const width = isMobile ? appWidth * 0.7 : 577
    const height = width * 0.96
    return (
      <div className={css.SpaceShuttle}>
        <img className={css.Shuttle} src="static/images/pages/hero/shuttle.png" alt="Hero Image" />
        {ArrayUtils.createNArray(6).map(i => {
          const order = i + 1;
          // const style = this.getRandomAnimationProp()
          const pos = starPosition[i]
          const originX = pos ? (0.5 - pos.left) * width : 0
          const originY = pos ? (0.8 - pos.top) * height : 0
          const style = {
            transform: `translate3d(${originX}px, ${originY}px, 0)`,
          }
          return (
            <div
              key={order}
              className={cc({ [css.Star]: true, [css[`Star${order}`]]: true })}
              style={style}
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
      animationDuration: `${2 + (Math.random() * 3)}s`,
    };
  }
}
