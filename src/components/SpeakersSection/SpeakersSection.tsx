import React from 'react'
import css from './SpeakersSection.scss'

interface SpeakersSectionProps {
}

interface SpeakersSectionState {
}

export class SpeakersSection extends React.Component<SpeakersSectionProps, SpeakersSectionState> {
  constructor(props: SpeakersSectionProps) {
    super(props)
  }

  render() {
    return (
      <div className={css.SpeakersSection}>

      </div>
    )
  }
}