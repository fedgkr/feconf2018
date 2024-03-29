import { EtcData } from 'db/Etc';
import { getNOrderSpeakers, Speaker } from 'db/Speaker';
import React, { Fragment } from 'react';
import { SessionItem } from '../SessionItem/SessionItem';
import css from './TrackList.scss';

interface TrackListProps {
  speakerList: Speaker[];
  selectSpeaker: (o: boolean, s: Speaker) => void;
}

export class TrackList extends React.Component<TrackListProps> {
  public render() {
    const { selectSpeaker } = this.props;
    const trackList = [1, 2];
    return (
      <div className={css.TrackList}>
        {trackList.map(track => (
          <Fragment key={track}>
            <div className={css.Label}>
              <span>Track {track}</span><br />
              <span>({track === 1 ? '오디토리움' : '컨퍼런스룸'})</span>
            </div>
            <div className={css.SessionWrap}>
              <SessionItem
                time={EtcData.sessionOrderMappingTime[1]}
                speaker={getNOrderSpeakers(1)[track - 1]}
                selectSpeaker={selectSpeaker}
              />
              <SessionItem
                time={EtcData.sessionOrderMappingTime[2]}
                speaker={getNOrderSpeakers(2)[track - 1]}
                selectSpeaker={selectSpeaker}
              />
              <SessionItem
                time={EtcData.sessionOrderMappingTime.launch}
                noSpeaker={true}
                content="점심"
                selectSpeaker={selectSpeaker}
              />
              <SessionItem
                time={EtcData.sessionOrderMappingTime[3]}
                speaker={getNOrderSpeakers(3)[track - 1]}
                selectSpeaker={selectSpeaker}
              />
              <SessionItem
                time={EtcData.sessionOrderMappingTime[4]}
                speaker={getNOrderSpeakers(4)[track - 1]}
                selectSpeaker={selectSpeaker}
              />
              <SessionItem
                time={EtcData.sessionOrderMappingTime.break}
                noSpeaker={true}
                content="Break Time"
                selectSpeaker={selectSpeaker}
              />
              <SessionItem
                time={EtcData.sessionOrderMappingTime[5]}
                speaker={getNOrderSpeakers(5)[track - 1]}
                selectSpeaker={selectSpeaker}
              />
              <SessionItem
                time={EtcData.sessionOrderMappingTime[6]}
                speaker={getNOrderSpeakers(6)[track - 1]}
                selectSpeaker={selectSpeaker}
              />
            </div>
          </Fragment>
        ))}
      </div>
    );
  }
}
