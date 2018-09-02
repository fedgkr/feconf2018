import React from 'react'
import css from './Button.scss'

interface ButtonProps {
}

interface ButtonState {
}

export class Button extends React.Component<ButtonProps, ButtonState> {
  constructor(props: ButtonProps) {
    super(props)
  }

  render() {
    return (
      <button className={css.Button}></button>
    )
  }
}