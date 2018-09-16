import React from 'react'
import css from './Firework.scss'

interface FireworkProps {
}

interface FireworkState {
}

export class Firework extends React.Component<FireworkProps, FireworkState> {
  public render() {
    return (
      <div className={css.Firework} />
    )
  }
}
