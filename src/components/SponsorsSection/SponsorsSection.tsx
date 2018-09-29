import cc from 'classcat';
import { companyList } from 'db/Company';
import React from 'react';
import { ApparentSection } from '../ApparentSection/ApparentSection';
import { SponsorLogo } from './components/SponsorLogo/SponsorLogo';
import css from './SponsorsSection.scss';

const diamondSponsors = companyList.filter(c => c.isLevelDiamond());
const platinumSponsors = companyList.filter(c => c.isLevelPlatinum());
const goldSponsors = companyList.filter(c => c.isLevelGold());
const etcSponsors = companyList.filter(c => c.isLevelEtc());

const SponsorsSection: React.SFC = () => (
  <section className={css.SponsorsSection} id="sponsors">
    <ApparentSection>
      <div className={css.Content}>
        <h2 className={css.Title}>SPONSORS</h2>
        <p className={css.Desc}>
          <span>스폰서의 소중한 후원과 여러분의 참여가 </span>
          <br />
          <span>FEConf 2018를 만듭니다. </span>
          <br />
          <span>고맙습니다.</span>
        </p>
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
          <div className={cc({ [css.LevelWrap]: true, [css.Etc]: true })}>
            <h3 className={css.LevelTitle}>ETC</h3>
            <ul className={css.SponsorList}>
              {etcSponsors.map((c, idx) => (
                <SponsorLogo key={idx} company={c} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </ApparentSection>
  </section>
);

export { SponsorsSection };
