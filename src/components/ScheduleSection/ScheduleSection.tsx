import { Speaker } from 'db/Speaker';
import React from 'react';
import { CONST } from 'values/Const';
import { ApparentSection } from '../ApparentSection/ApparentSection';
import { TrackList } from './components/TrackList/TrackList';
import { TrackPair } from './components/TrackPair/TrackPair';
import css from './ScheduleSection.scss';

interface ScheduleSectionProps {
  appWidth: number;
  speakerList: Speaker[];
  selectSpeaker: (o: boolean, s: Speaker) => void;
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
    const { appWidth, speakerList, selectSpeaker } = this.props;
    const { rendered } = this.state;
    const isMobile = appWidth < CONST.TABLET_WIDTH;
    return (
      <section className={css.ScheduleSection} id="schedule">
        <ApparentSection>
          <div className={css.Content}>
            <h2 className={css.Title}>SCHEDULE</h2>
            <div className={css.Intro}>
              <div className={css.Schedule}>
                <div className={css.Time}>10:00 ~ 10:40</div>
                <div className={css.Desc}>입장 및 등록</div>
              </div>
              <div className={css.Schedule}>
                <div className={css.Time}>10:40 ~ 10:50</div>
                <div className={css.Desc}>오프닝 키노트</div>
              </div>
            </div>
            <div className={css.TrackWrap}>
              {rendered && isMobile ? (
                <TrackList speakerList={speakerList} selectSpeaker={selectSpeaker} />
              ) : (
                <TrackPair speakerList={speakerList} selectSpeaker={selectSpeaker} />
              )}
            </div>
          </div>
        </ApparentSection>
      </section>
    );
  }
}
