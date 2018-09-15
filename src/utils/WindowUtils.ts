export class WindowUtils {
  public static getWidth() {
    return WindowUtils.isClient() ? window.innerWidth : 0;
  }
  public static isClient() {
    return typeof window === 'object'
  }
  public static preventDefault(e) {
    e.preventDefault();
  }
  public static stopPropagation(e) {
    e.stopPropagation();
  }
}
