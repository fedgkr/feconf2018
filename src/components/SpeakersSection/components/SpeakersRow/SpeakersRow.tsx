import React from 'react'
import css from './SpeakersRow.scss'
import {Speaker} from "../../../../db/Speaker";
import {SpeakerProfile} from "../Speaker/SpeakerProfile";

interface SpeakersRowProps {
  speakerList: Speaker[]
  num: number
}

interface SpeakersRowState {
  rendered: boolean
}

export class SpeakersRow extends React.Component<SpeakersRowProps, SpeakersRowState> {
  constructor(props) {
    super(props)

    this.state = {
      rendered: false,
    }
  }

  componentDidMount() {
    this.setState({rendered: true})
  }

  render() {
    const {speakerList, num} = this.props
    const {rendered} = this.state
    return (
      <div className={css.SpeakersRow}>
        {speakerList.map((speaker, i) => {
          return (
            <SpeakerProfile
              key={rendered.toString() + i}
              speaker={speaker}
              isLast={(i + 1) % num === 0}
            />
          )
        })}
        <div className={`clear`} />
      </div>
    )
  }
}
