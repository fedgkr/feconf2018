import { Company } from 'db/Company';
import React from 'react';
import css from './SponsorLogo.scss';

interface Props {
  company: Company;
}

const SponsorLogo: React.SFC<Props> = ({ company }) => (
  <li className={css.SponsorLogo}>
    <a className={css.Anchor} href={company.link} target="_blank">
      <span className="blind">{company.name}</span>
      <img className={css.Image} src={company.logo} alt={`${company.name}의 로고`} />
    </a>
  </li>
);

export { SponsorLogo };
