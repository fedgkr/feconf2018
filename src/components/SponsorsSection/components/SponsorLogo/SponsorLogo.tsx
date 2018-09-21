import cc from 'classcat';
import { Company } from 'db/Company';
import React from 'react';
import css from './SponsorLogo.scss';
import { GAService } from '../../../service/ga.service';

interface Props {
  company: Company;
}

const SponsorLogo: React.SFC<Props> = ({ company }) => (
  <li
    className={cc({
      [css.SponsorLogo]: true,
      [css.DIAMOND]: company.isLevelDiamond(),
      [css.PLATINUM]: company.isLevelPlatinum(),
      [css.GOLD]: company.isLevelGold(),
      [css.ETC]: company.isLevelEtc(),
    })}
  >
    <a className={css.Anchor} href={company.link} target="_blank" onClick={() => GAService.sponsorClick(company)}>
      <span className="blind">{company.name}</span>
      <img className={css.Image} src={company.logo} alt={`${company.name}의 로고`} />
    </a>
  </li>
);

export { SponsorLogo };
