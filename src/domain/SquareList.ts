/**
 * マス一覧
 */
import Square from '@/domain/Square';

export default class SquareList {
  squareList: Square[];

  constructor(squares ?:Array<Square>) {
    this.squareList = squares || [];
  }

  public getSquareList(): Array<Square> {
    return this.squareList;
  }

  public add(square: Square) {
    this.squareList.push(square);
  }

  // Listのもちものではない。
  // public move(current: Square, next: Square): void {
  //   this.validateTransition(current, next);
  // }


  /**
   * 対象のマスから遷移可能だったリストを取得する
   *
   * @param target 現在マス
   */
  // public validateTransition(current: Square, next: Square): void {
  //   if (current.position === next.prePosition) {
  //     return;
  //   }
  //   throw new Error('次のマスに遷移できません');
  // }

  /**
   * 対象のマスから次のマスに遷移できるリストを取得する
   *
   * @param target 現在マス
   */
  public nextList(target: Square): Array<Square> {
    return this.squareList.filter(e => e.prePosition === target.position);
  }
}
