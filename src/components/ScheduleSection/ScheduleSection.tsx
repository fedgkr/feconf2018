import React from 'react'
import css from './ScheduleSection.scss'
import {Speaker} from "../../db/Speaker";
import {TrackList} from "./components/TrackList/TrackList";

interface ScheduleSectionProps {
  speakerList: Speaker[]
}

interface ScheduleSectionState {
}

export class ScheduleSection extends React.Component<ScheduleSectionProps, ScheduleSectionState> {
  constructor(props: ScheduleSectionProps) {
    super(props)
  }

  render() {
    const {speakerList} = this.props
    return (
      <div className={css.ScheduleSection} id="schedule">
        <div className={css.Content}>
          <div className={css.Title}>SCHEDULE</div>
          <div className={css.Intro}>
            <div className={css.Schedule}>
              <div className={css.Time}>
                9:00 ~ 10:00
              </div>
              <div className={css.Desc}>
                입장 및 등록
              </div>
            </div>
            <div className={css.Schedule}>
              <div className={css.Time}>
                10:00 ~ 10:30
              </div>
              <div className={css.Desc}>
                오프닝 키노트
              </div>
            </div>
          </div>
          <div className={css.TrackWrap}>
            <TrackList speakerList={speakerList} />
          </div>
        </div>
      </div>
    )
  }
}
