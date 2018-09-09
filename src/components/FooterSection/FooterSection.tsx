import React from 'react'
import css from './FooterSection.scss'

interface FooterSectionProps {
}

interface FooterSectionState {
}

export class FooterSection extends React.Component<FooterSectionProps, FooterSectionState> {
  constructor(props: FooterSectionProps) {
    super(props)
  }

  render() {
    return (
      <div className={css.FooterSection}>
        <div className={css.Content}>
          <div className={css.Title}>
            프론트엔드 개발자에 의한, 프론트엔드 개발자를 위한, <br/>
            2018 FE conference. 여러분의 참여를 기다립니다.
          </div>

          <a href="https://festa.io">
            <button className={css.Button}>지금 등록하러 가기</button>
          </a>
        </div>
      </div>
    )
  }
}
