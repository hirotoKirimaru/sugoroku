/**
 * マス一覧
 */
import Square from "@/domain/Square";

export default class SquareList {
  private squareList: Array<Square>;

  constructor() {
    this.squareList = new Array<Square>();
  }

  public add(square: Square) {
    this.squareList.push(square);
  }
}
