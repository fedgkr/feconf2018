import { Speaker } from 'db/Speaker';
import React from 'react';
import { SpeakerProfile } from '../Speaker/SpeakerProfile';
import css from './SpeakersRow.scss';

interface SpeakersRowProps {
  speakerList: Speaker[];
  num: number;
  selectSpeaker: (o: boolean, s: Speaker) => void;
}

interface SpeakersRowState {
  rendered: boolean;
}

export class SpeakersRow extends React.Component<SpeakersRowProps, SpeakersRowState> {
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
    const { speakerList, num, selectSpeaker } = this.props;
    const { rendered } = this.state;
    return (
      <div className={css.SpeakersRow}>
        {speakerList.map((speaker, i) => (
          <SpeakerProfile
            key={rendered.toString() + i}
            speaker={speaker}
            isLast={(i + 1) % num === 0}
            selectSpeaker={selectSpeaker}
          />
        ))}
        {rendered ? <div className={`clear`} /> : null}
      </div>
    );
  }
}
