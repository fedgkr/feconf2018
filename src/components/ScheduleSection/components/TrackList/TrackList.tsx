import React from 'react'
import css from './TrackList.scss'
import {getNOrderSpeakers, Speaker} from "../../../../db/Speaker";
import {Session} from "../Session/Session";

interface TrackListProps {
  speakerList: Speaker[]
}

interface TrackListState {
}

export class TrackList extends React.Component<TrackListProps, TrackListState> {
  constructor(props: TrackListProps) {
    super(props)
  }

  render() {
    return (
      <div className={css.TrackList}>
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
          <Session
            time="10:30 - 11:00"
            speakerList={getNOrderSpeakers(1)}
          />
          <Session
            time="11:00 - 11:30"
            speakerList={getNOrderSpeakers(2)}
          />
          <Session
            time="11:30 - 12:00"
            speakerList={getNOrderSpeakers(3)}
          />
          <Session
            time="12:00 - 13:00"
            speakerList={[]}
            noSpeaker={true}
            content="점심"
          />
          <Session
            time="13:00 - 13:30"
            speakerList={getNOrderSpeakers(4)}
          />
          <Session
            time="13:30 - 14:00"
            speakerList={getNOrderSpeakers(5)}
          />
          <Session
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
