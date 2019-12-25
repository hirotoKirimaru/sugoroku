/**
 * 駒
 */
import Square from "@/domain/Square";

export default class Token {
  /** 現在地 */
  private currentSquare: Square;

  constructor(currentSquare: Square) {
    this.currentSquare = currentSquare;
  }
}
