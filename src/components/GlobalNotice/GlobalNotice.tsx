import css from './GlobalNotice.scss';
import React from "react";

const GlobalNotice: React.SFC = () => (
  <p className={css.wrapper}>
    <span>2018년 10월 6일(토) 오후 3시부터 </span>
    <br />
    <span>밋고(Meetgo)를 통해 예약이 시작됩니다.</span>
  </p>
);

export { GlobalNotice };
