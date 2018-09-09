import React, {Fragment} from 'react'
import {getNOrderSpeakers, Speaker} from "db/Speaker";
import {EtcData} from "db/Etc";
import {SessionItem} from "../SessionItem/SessionItem";
import css from './TrackList.scss'

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
                time={EtcData.sessionOrderMappingTime[1]}
                speaker={getNOrderSpeakers(1)[track - 1]}
              />
              <SessionItem
                time={EtcData.sessionOrderMappingTime[2]}
                speaker={getNOrderSpeakers(2)[track - 1]}
              />
              <SessionItem
                time={EtcData.sessionOrderMappingTime['launch']}
                noSpeaker={true}
                content="점심"
              />
              <SessionItem
                time={EtcData.sessionOrderMappingTime[3]}
                speaker={getNOrderSpeakers(3)[track - 1]}
              />
              <SessionItem
                time={EtcData.sessionOrderMappingTime[4]}
                speaker={getNOrderSpeakers(4)[track - 1]}
              />
              <SessionItem
                time={EtcData.sessionOrderMappingTime['break']}
                noSpeaker={true}
                content="Break Time"
              />
              <SessionItem
                time={EtcData.sessionOrderMappingTime[5]}
                speaker={getNOrderSpeakers(5)[track - 1]}
              />
              <SessionItem
                time={EtcData.sessionOrderMappingTime[6]}
                speaker={getNOrderSpeakers(6)[track - 1]}
              />
            </div>
          </Fragment>
        ))}
      </div>
    )
  }
}
