import cc from 'classcat';
import { companyList } from 'db/Company';
import React from 'react';
import { SponsorLogo } from './components/SponsorLogo/SponsorLogo';
import css from './SponsorsSection.scss';

const diamondSponsors = companyList.filter(c => c.isLevelDiamond());
const platinumSponsors = companyList.filter(c => c.isLevelPlatinum());
const goldSponsors = companyList.filter(c => c.isLevelGold());

const SponsorsSection: React.SFC = () => (
  <section className={css.SponsorsSection} id="sponsors">
    <div className={css.Content}>
      <h2 className={css.Title}>SPONSORS</h2>
      <div className={css.Desc}>
        2018 FE 컨퍼런스 코리아는 스폰서들의 후원과
        <br />
        여러분의 참여로 개최될 수 있었습니다. 감사합니다.
      </div>
      <div className={css.SponsorsWrap}>
        <div className={cc({ [css.LevelWrap]: true, [css.Diamond]: true })}>
          <h3 className={css.LevelTitle}>DIAMOND</h3>
          <ul className={css.SponsorList}>
            {diamondSponsors.map((c, idx) => (
              <SponsorLogo key={idx} company={c} />
            ))}
          </ul>
        </div>
        <div className={cc({ [css.LevelWrap]: true, [css.Platinum]: true })}>
          <h3 className={css.LevelTitle}>PLATINUM</h3>
          <ul className={css.SponsorList}>
            {platinumSponsors.map((c, idx) => (
              <SponsorLogo key={idx} company={c} />
            ))}
          </ul>
        </div>
        <div className={cc({ [css.LevelWrap]: true, [css.Gold]: true })}>
          <h3 className={css.LevelTitle}>GOLD</h3>
          <ul className={css.SponsorList}>
            {goldSponsors.map((c, idx) => (
              <SponsorLogo key={idx} company={c} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export { SponsorsSection };
