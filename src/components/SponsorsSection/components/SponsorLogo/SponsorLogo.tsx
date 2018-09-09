import React from 'react'
import css from './SponsorLogo.scss'
import {Company} from "../../../../db/Company";

interface SponsorLogoProps {
  company: Company
}

interface SponsorLogoState {
}

export class SponsorLogo extends React.Component<SponsorLogoProps, SponsorLogoState> {
  render() {
    const {company} = this.props
    return (
      <img className={css.SponsorLogo} src={company.logo} alt={company.name + ' Image'} />
    )
  }
}
