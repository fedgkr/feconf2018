export class WindowUtils {
  public static getWidth() {
    return typeof window === 'object' ? window.innerWidth : 0;
  }
}
