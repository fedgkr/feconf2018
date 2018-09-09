import React from 'react'
import cc from 'classcat'
import css from './SponsorsSection.scss'
import {companyList, SupportLevel} from "../../db/Company";
import {SponsorLogo} from "./components/SponsorLogo/SponsorLogo";

interface SponsorsSectionProps {
  appWidth: number
}

interface SponsorsSectionState {
}

export class SponsorsSection extends React.Component<SponsorsSectionProps, SponsorsSectionState> {
  constructor(props: SponsorsSectionProps) {
    super(props)
  }

  render() {
    return (
      <div className={css.SponsorsSection} id="sponsors">
        <div className={css.Content}>
          <div className={css.Title}>SPONSORS</div>
          <div className={css.Desc}>
            2018 FE 컨퍼런스 코리아는 스폰서들의 후원과 여러분의 참여로 개최될 수 있었습니다. 감사합니다.
          </div>
          <div className={css.SponsorsWrap}>
            <div
              className={cc({
                [css.LevelWrap]: true,
                [css.Diamond]: true,
              })}
            >
              <h2 className={css.LevelTitle}>
                DIAMOND
              </h2>
              <div className={css.SponsorList}>
                {companyList.filter(c => c.level === SupportLevel.DIAMOND).map((c, idx) => (
                  <SponsorLogo key={idx} company={c} />
                ))}
              </div>
            </div>
            <div
              className={cc({
                [css.LevelWrap]: true,
                [css.Platinum]: true,
              })}
            >
              <h2 className={css.LevelTitle}>
                PLATINUM
              </h2>
              <div className={css.SponsorList}>
                {companyList.filter(c => c.level === SupportLevel.PLATINUM).map((c, idx) => (
                  <SponsorLogo key={idx} company={c} />
                ))}
              </div>
            </div>
            <div
              className={cc({
                [css.LevelWrap]: true,
                [css.Gold]: true,
              })}
            >
              <h2 className={css.LevelTitle}>
                GOLD
              </h2>
              <div className={css.SponsorList}>
                {companyList.filter(c => c.level === SupportLevel.GOLD).map((c, idx) => (
                  <SponsorLogo key={idx} company={c} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
