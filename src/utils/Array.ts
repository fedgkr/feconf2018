export class ArrayUtils {
  static createNArray(val: number = 0) {
    return [...Array(val).keys()]
  }
}
