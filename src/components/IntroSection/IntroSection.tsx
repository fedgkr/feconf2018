import React from 'react'
import css from './IntroSection.scss'

interface IntroSectionProps {
}

interface IntroSectionState {
}

export class IntroSection extends React.Component<IntroSectionProps, IntroSectionState> {
  constructor(props: IntroSectionProps) {
    super(props)
  }

  render() {
    return (
      <div className={css.IntroSection}>

      </div>
    )
  }
}