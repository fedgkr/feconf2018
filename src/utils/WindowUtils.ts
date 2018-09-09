export class WindowUtils {
  static getWidth() {
    return typeof window === 'object' ? window.innerWidth : 0
  }
}
