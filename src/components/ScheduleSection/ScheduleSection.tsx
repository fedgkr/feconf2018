import { Speaker } from 'db/Speaker';
import React from 'react';
import { CONST } from 'values/Const';
import { TrackList } from './components/TrackList/TrackList';
import { TrackPair } from './components/TrackPair/TrackPair';
import css from './ScheduleSection.scss';

interface ScheduleSectionProps {
  appWidth: number;
  speakerList: Speaker[];
}

interface ScheduleSectionState {
  rendered: boolean;
}

export class ScheduleSection extends React.Component<ScheduleSectionProps, ScheduleSectionState> {
  constructor(props) {
    super(props);

    this.state = {
      rendered: false,
    };
  }

  public componentDidMount() {
    this.setState({ rendered: true });
  }

  public render() {
    const { appWidth, speakerList } = this.props;
    const { rendered } = this.state;
    const isTablet = appWidth < CONST.TABLET_WIDTH;
    return (
      <div className={css.ScheduleSection} id="schedule">
        <div className={css.Content}>
          <div className={css.Title}>SCHEDULE</div>
          <div className={css.Intro}>
            <div className={css.Schedule}>
              <div className={css.Time}>9:00 ~ 10:00</div>
              <div className={css.Desc}>입장 및 등록</div>
            </div>
            <div className={css.Schedule}>
              <div className={css.Time}>10:00 ~ 10:30</div>
              <div className={css.Desc}>오프닝 키노트</div>
            </div>
          </div>
          <div className={css.TrackWrap}>
            {rendered && isTablet ? <TrackList speakerList={speakerList} /> : <TrackPair speakerList={speakerList} />}
          </div>
        </div>
      </div>
    );
  }
}
