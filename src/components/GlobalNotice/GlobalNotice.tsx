import css from './GlobalNotice.scss';

const GlobalNotice: React.SFC = () => (
  <p className={css.wrapper}>
    <span>참가 신청은 시스템에 장애가 있어 10월 5일(금)으로 연기됐습니다. </span>
    <span>
      자세한 내용은{' '}
      <a href="https://www.facebook.com/feconf.kr" target="_blank">
        페이스북 페이지
      </a>
      를 확인해주세요
    </span>
  </p>
);

export { GlobalNotice };
