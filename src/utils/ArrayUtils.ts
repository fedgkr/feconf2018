export class ArrayUtils {
  public static createNArray(val: number = 0) {
    return [...Array(val).keys()];
  }
}
