import React from 'react'
import css from './TrackPair.scss'
import {getNOrderSpeakers, Speaker} from "../../../../db/Speaker";
import {SessionPair} from "../SessionPair/SessionPair";
import {EtcData} from "../../../../db/Etc";

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
            time={EtcData.sessionOrderMappingTime[1]}
            speakerList={getNOrderSpeakers(1)}
          />
          <SessionPair
            time={EtcData.sessionOrderMappingTime[2]}
            speakerList={getNOrderSpeakers(2)}
          />
          <SessionPair
            time={EtcData.sessionOrderMappingTime['launch']}
            speakerList={[]}
            noSpeaker={true}
            content="점심"
          />
          <SessionPair
            time={EtcData.sessionOrderMappingTime[3]}
            speakerList={getNOrderSpeakers(3)}
          />
          <SessionPair
            time={EtcData.sessionOrderMappingTime[4]}
            speakerList={getNOrderSpeakers(4)}
          />
          <SessionPair
            time={EtcData.sessionOrderMappingTime['break']}
            speakerList={[]}
            noSpeaker={true}
            content="Break Time"
          />
          <SessionPair
            time={EtcData.sessionOrderMappingTime[5]}
            speakerList={getNOrderSpeakers(5)}
          />
          <SessionPair
            time={EtcData.sessionOrderMappingTime[6]}
            speakerList={getNOrderSpeakers(6)}
          />
        </div>
      </div>
    )
  }
}
