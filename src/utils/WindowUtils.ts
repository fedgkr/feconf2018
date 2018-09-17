import {CONST} from "../values/Const";

export class WindowUtils {
  public static getWidth() {
    return typeof window === 'object' ? window.innerWidth : 0;
  }
  public static isMobileSize() {
    return WindowUtils.getWidth() < CONST.MOBILE_WIDTH
  }
  public static preventDefault(e) {
    e.preventDefault();
  }
  public static stopPropagation(e) {
    e.stopPropagation();
  }
}
