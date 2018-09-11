import cc from 'classcat';
import { companyList, SupportLevel } from 'db/Company';
import React from 'react';
import { SponsorLogo } from './components/SponsorLogo/SponsorLogo';
import css from './SponsorsSection.scss';

interface SponsorsSectionProps {
  appWidth: number;
}

export class SponsorsSection extends React.Component<SponsorsSectionProps> {
  public render() {
    return (
      <section className={css.SponsorsSection} id="sponsors">
        <div className={css.Content}>
          <h2 className={css.Title}>SPONSORS</h2>
          <div className={css.Desc}>
            스폰서의 소중한 후원과 여러분의 참여가 FEConf 2018를 만듭니다.<br />
            고맙습니다.
          </div>
          <div className={css.SponsorsWrap}>
            <div
              className={cc({
                [css.LevelWrap]: true,
                [css.Diamond]: true,
              })}
            >
              <h2 className={css.LevelTitle}>DIAMOND</h2>
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
              <h2 className={css.LevelTitle}>PLATINUM</h2>
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
              <h2 className={css.LevelTitle}>GOLD</h2>
              <div className={css.SponsorList}>
                {companyList.filter(c => c.level === SupportLevel.GOLD).map((c, idx) => (
                  <SponsorLogo key={idx} company={c} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
