import css from './GlobalNotice.scss';

const GlobalNotice: React.SFC = () => (
  <p className={css.wrapper}>
    <span>참가 신청 문제로 불편을 드려 대단히 죄송합니다. </span>
    <br />
    <span>빠른 시일 내에 참가 신청 재공지 하겠습니다.</span>
  </p>
);

export { GlobalNotice };
