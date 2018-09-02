import React from 'react'
import css from './Button.scss'

interface ButtonProps {
  label: string
  color: string
  background: string
}

interface ButtonState {
}

export class Button extends React.Component<ButtonProps, ButtonState> {
  constructor(props: ButtonProps) {
    super(props)
  }

  render() {
    const {label, background, color} = this.props
    return (
      <button
        className={css.Button}
        style={{background, color}}
      >
        {label}
      </button>
    )
  }
}
