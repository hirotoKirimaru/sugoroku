/**
 * 駒
 */
import Square from '@/domain/Square';

export default class Token {
  id: string;

  /** 現在地 */
  currentSquare: Square;

  constructor(id?: string, square ?: Square) {
    this.id = id || '';
    this.currentSquare = square || Square.init();
  }

  /**
   * 駒を次のマスに進める。
   *
   * @param next 次のマス
   */
  public move(next: Square): void {
    if (!this.currentSquare.canTransition(next)) {
      throw new Error('次のマスに遷移できません');
    }
    this.currentSquare = next;
  }
}
