import { CONST } from '../values/Const';

export class WindowUtils {
  public static getWidth() {
    return typeof window === 'object' ? window.innerWidth : 0;
  }
  public static isMobileSize() {
    return WindowUtils.getWidth() < CONST.MOBILE_WIDTH;
  }
  public static preventDefault(e) {
    e.preventDefault();
  }
  public static stopPropagation(e) {
    e.stopPropagation();
  }
  public static alertApplicationDate(e) {
    e.preventDefault()
    alert(
      "참가신청은 10월 4일 오후 3시부터 진행될 예정입니다. 주최 측 사정에 의하여 변경될 수 있습니다. 참고 부탁드립니다."
    );
  }
}
