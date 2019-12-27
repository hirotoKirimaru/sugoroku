import Square from '@/domain/Square';


let START: Square = new Square('-', '0', 'スタート');
let LAWYER: Square = new Square('0', '101', '弁護士に就職マス');
let END: Square = new Square('301', '900', 'ゴール');

describe('マス', () => {
  it('初期化した値は0,0であること', () => {
    const expected: Square = Square.init();
    const actual: Square = new Square('0', '0');

    expect(expected).toStrictEqual(actual);
  });
});

  describe('画面遷移できるかどうか', () => {
    it('スタートから弁護士マスに遷移できる', () => {
      START.validateTransition(LAWYER);
    });

    it('スタートから直接ゴールには遷移できない', () => {
      const test  = () => {
        START.validateTransition(END);
      };
      expect(test).toThrowError('次のマスに遷移できません');
    });
  });
