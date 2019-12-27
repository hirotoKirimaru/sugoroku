/**
 * マス一覧
 */
import Square from '@/domain/Square';

export default class SquareList {
  squareList: Square[];

  constructor(squares ?:Array<Square>) {
    this.squareList = squares || [];
  }

  public add(square: Square) {
    this.squareList.push(square);
  }

  /**
   * 対象のマスから次のマスに遷移できるリストを取得する
   *
   * @param target 現在マス
   */
  public nextList(target: Square): Array<Square> {
    return this.squareList.filter(e => e.prePosition === target.position);
  }
}
