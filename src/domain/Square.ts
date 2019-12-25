/**
 * マス
 */
export default class Square {
  private a: string;
  private b: string;

  constructor(a: string, b: string) {
    this.a = a;
    this.b = b;
  }

  public static init(): Square {
    return new Square('0', '0');
  }
}
