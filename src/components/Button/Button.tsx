import React from 'react';
import css from './Button.scss';

interface ButtonProps {
  color: string;
  background: string;
}

export class Button extends React.Component<ButtonProps> {
  public render() {
    const { children, background, color } = this.props;
    return (
      <button className={css.Button} style={{ background, color }}>
        {children}
      </button>
    );
  }
}
