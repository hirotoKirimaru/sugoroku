/**
 * マス
 */
export default class Square {
  /** 前回の現在位置 */
  prePosition: string;

  /** 現在地 */
  position: string;

  /** 説明 */
  private description: string;

  constructor(prePosition: string, position: string, description ?: string) {
    this.prePosition = prePosition;
    this.position = position;
    this.description = description || '';
  }

  public static init(): Square {
    return new Square('0', '0');
  }

  /**
   * 対象のマスへ画面遷移できるか確認する
   *
   * @param next
   */
  public canTransition(next: Square): boolean {
    return this.position === next.prePosition;
  }
}
