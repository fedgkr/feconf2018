import css from './GlobalNotice.scss';
import React from "react";

const GlobalNotice: React.SFC = () => (
  <p className={css.wrapper}>
    <span>지금, 밋고(Meetgo)에서 예약이 진행 중입니다.</span>
  </p>
);

export { GlobalNotice };
