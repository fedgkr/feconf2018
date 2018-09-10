import { Company } from 'db/Company';
import React from 'react';
import css from './SponsorLogo.scss';

interface SponsorLogoProps {
  company: Company;
}

export class SponsorLogo extends React.Component<SponsorLogoProps> {
  public render() {
    const { company } = this.props;
    return <img className={css.SponsorLogo} src={company.logo} alt={`${company.name} Image`} />;
  }
}
