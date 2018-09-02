import React from 'react'
import css from './SponsorsSection.scss'

interface SponsorsSectionProps {
}

interface SponsorsSectionState {
}

export class SponsorsSection extends React.Component<SponsorsSectionProps, SponsorsSectionState> {
  constructor(props: SponsorsSectionProps) {
    super(props)
  }

  render() {
    return (
      <div className={css.SponsorsSection}></div>
    )
  }
}