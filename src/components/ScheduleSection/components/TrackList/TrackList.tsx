import React, {Fragment} from 'react'
import css from './TrackList.scss'
import {getNOrderSpeakers, Speaker} from "../../../../db/Speaker";
import {SessionItem} from "../SessionItem/SessionItem";

interface TrackListProps {
  speakerList: Speaker[]
}

interface TrackListState {
}

export class TrackList extends React.Component<TrackListProps, TrackListState> {
  render() {
    const trackList = [1, 2]
    return (
      <div className={css.TrackList}>
        {trackList.map((track) => (
          <Fragment key={track}>
            <div className={css.Label}>
              Track {track}
            </div>
            <div className={css.SessionWrap}>
              <SessionItem
                time="10:30 - 11:00"
                speaker={getNOrderSpeakers(1)[track - 1]}
              />
              <SessionItem
                time="10:30 - 11:00"
                speaker={getNOrderSpeakers(2)[track - 1]}
              />
              <SessionItem
                time="10:30 - 11:00"
                speaker={getNOrderSpeakers(3)[track - 1]}
              />
              <SessionItem
                time="12:00 - 13:00"
                noSpeaker={true}
                content="점심"
              />
              <SessionItem
                time="13:00 - 13:30"
                speaker={getNOrderSpeakers(4)[track - 1]}
              />
              <SessionItem
                time="13:30 - 14:00"
                speaker={getNOrderSpeakers(5)[track - 1]}
              />
              <SessionItem
                time="14:00 ~"
                noSpeaker={true}
                content="네트워킹 및 담소"
              />
            </div>
          </Fragment>
        ))}
      </div>
    )
  }
}
