import React from 'react'
import css from './FooterSection.scss'

interface FooterSectionProps {
}

interface FooterSectionState {
}

export class FooterSection extends React.Component<FooterSectionProps, FooterSectionState> {
  constructor(props: FooterSectionProps) {
    super(props)
  }

  render() {
    return (
      <div className={css.FooterSection}>

      </div>
    )
  }
}