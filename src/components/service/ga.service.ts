import {Company} from "../../db/Company";

export enum GA_CATEGORY {
  LINK = 'LINK',
}

export enum GA_ACTION {
  CLICK_LINK = 'CLICK_LINK',
  CLICK_SPONSOR = 'CLICK_SPONSOR',
}

export enum FESTA_LINK_TYPE {
  TOP = 'TOP',
  INTRO = 'INTRO',
  BOTTOM = 'BOTTOM',
  MOBILE = 'MOBILE',
}

export class GAService {
  public static festaClick(position: FESTA_LINK_TYPE) {
    window.ga('send', 'event', GA_CATEGORY.LINK, GA_ACTION.CLICK_LINK, position);
  }

  public static sponsorClick(company: Company) {
    window.ga('send', 'event', GA_CATEGORY.LINK, GA_ACTION.CLICK_SPONSOR, company.name);
  }
}
