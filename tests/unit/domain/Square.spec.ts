import Square from '@/domain/Square';


const START: Square = new Square('-', '0', 'スタート');
const LAWYER: Square = new Square('0', '101', '弁護士に就職マス');
const END: Square = new Square('301', '900', 'ゴール');

describe('マス', () => {
  it('初期化した値は0,0であること', () => {
    const expected: Square = Square.init();
    const actual: Square = new Square('0', '0');

    expect(expected).toStrictEqual(actual);
  });
});

describe('画面遷移できるかどうか', () => {
  it('スタートから弁護士マスに遷移できる', () => {
    expect(START.canTransition(LAWYER)).toBe(true);
  });

  it('スタートから直接ゴールには遷移できない', () => {
    expect(START.canTransition(END)).toBe(false);
  });
});
