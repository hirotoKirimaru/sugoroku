/**
 * 駒
 */
import Square from '@/domain/Square';

export default class Token {
  private id: string;

  /** 現在地 */
  private currentSquare: Square;

  constructor(id: string, square ?: Square) {
    this.id = id;
    this.currentSquare = square || Square.init();
  }

  /**
   * 駒を次のマスに進める。
   *
   * @param next 次のマス
   */
  public move(next: Square): void {
    this.currentSquare.canTransition(next);
    this.currentSquare = next;
  }
}
