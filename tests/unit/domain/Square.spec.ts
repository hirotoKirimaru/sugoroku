import Square from "@/domain/Square";

describe('マス', () => {
  it('初期化した値は0,0であること', () => {
    let expected: Square = Square.init();
    let actual: Square = new Square("0","0");

    expect(expected).toStrictEqual(actual);
  });
});
