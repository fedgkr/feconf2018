import { EtcData } from 'db/Etc';
import { getNOrderSpeakers, Speaker } from 'db/Speaker';
import React from 'react';
import { SessionPair } from '../SessionPair/SessionPair';
import css from './TrackPair.scss';

interface TrackPairProps {
  speakerList: Speaker[];
  selectSpeaker: (o: boolean, s: Speaker) => void;
}

export class TrackPair extends React.Component<TrackPairProps> {
  public render() {
    const { selectSpeaker } = this.props;
    return (
      <div className={css.TrackPair}>
        <div className={css.LabelWrap}>
          <div className={css.Label}>Track 1</div>
          <div className={css.Label}>Track 2</div>
          <div className="clear" />
        </div>
        <div className={css.SessionWrap}>
          <SessionPair
            time={EtcData.sessionOrderMappingTime[1]}
            speakerList={getNOrderSpeakers(1)}
            selectSpeaker={selectSpeaker}
          />
          <SessionPair
            time={EtcData.sessionOrderMappingTime[2]}
            speakerList={getNOrderSpeakers(2)}
            selectSpeaker={selectSpeaker}
          />
          <SessionPair
            time={EtcData.sessionOrderMappingTime.launch}
            speakerList={[]}
            noSpeaker={true}
            content="점심"
            selectSpeaker={selectSpeaker}
          />
          <SessionPair
            time={EtcData.sessionOrderMappingTime[3]}
            speakerList={getNOrderSpeakers(3)}
            selectSpeaker={selectSpeaker}
          />
          <SessionPair
            time={EtcData.sessionOrderMappingTime[4]}
            speakerList={getNOrderSpeakers(4)}
            selectSpeaker={selectSpeaker}
          />
          <SessionPair
            time={EtcData.sessionOrderMappingTime.break}
            speakerList={[]}
            noSpeaker={true}
            content="Break Time"
            selectSpeaker={selectSpeaker}
          />
          <SessionPair
            time={EtcData.sessionOrderMappingTime[5]}
            speakerList={getNOrderSpeakers(5)}
            selectSpeaker={selectSpeaker}
          />
          <SessionPair
            time={EtcData.sessionOrderMappingTime[6]}
            speakerList={getNOrderSpeakers(6)}
            selectSpeaker={selectSpeaker}
          />
        </div>
      </div>
    );
  }
}
