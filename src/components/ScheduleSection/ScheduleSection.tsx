import React from 'react'
import css from './ScheduleSection.scss'

interface ScheduleSectionProps {
}

interface ScheduleSectionState {
}

export class ScheduleSection extends React.Component<ScheduleSectionProps, ScheduleSectionState> {
  constructor(props: ScheduleSectionProps) {
    super(props)
  }

  render() {
    return (
      <div className={css.ScheduleSection}>

      </div>
    )
  }
}