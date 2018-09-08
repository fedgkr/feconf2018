import React from 'react'
import css from './TrackPair.scss'
import {getNOrderSpeakers, Speaker} from "../../../../db/Speaker";
import {SessionPair} from "../SessionPair/SessionPair";

interface TrackPairProps {
  speakerList: Speaker[]
}

interface TrackPairState {
}

export class TrackPair extends React.Component<TrackPairProps, TrackPairState> {
  render() {
    return (
      <div className={css.TrackPair}>
        <div className={css.LabelWrap}>
          <div className={css.Label}>
            Track 1
          </div>
          <div className={css.Label}>
            Track 2
          </div>
          <div className="clear"/>
        </div>
        <div className={css.SessionWrap}>
          <SessionPair
            time="10:30 - 11:00"
            speakerList={getNOrderSpeakers(1)}
          />
          <SessionPair
            time="11:00 - 11:30"
            speakerList={getNOrderSpeakers(2)}
          />
          <SessionPair
            time="11:30 - 12:00"
            speakerList={getNOrderSpeakers(3)}
          />
          <SessionPair
            time="12:00 - 13:00"
            speakerList={[]}
            noSpeaker={true}
            content="점심"
          />
          <SessionPair
            time="13:00 - 13:30"
            speakerList={getNOrderSpeakers(4)}
          />
          <SessionPair
            time="13:30 - 14:00"
            speakerList={getNOrderSpeakers(5)}
          />
          <SessionPair
            time="14:00 ~"
            speakerList={[]}
            noSpeaker={true}
            content="네트워킹 및 담소"
          />
        </div>
      </div>
    )
  }
}
