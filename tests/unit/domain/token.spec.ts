import Token from '@/domain/Token';
import Square from '@/domain/Square';

const START: Square = new Square('-', '0', 'スタート');
const LAWYER: Square = new Square('0', '101', '弁護士に就職マス');
const IDOL: Square = new Square('101', '102', 'アイドルに就職マス');

describe('駒', () => {
  it('マスを引数に与えないときに、初期化したマスで生成されていること', () => {
    const token: Token = new Token('1');

    const token2: Token = new Token('1', Square.init());

    expect(token).toStrictEqual(token2);
  });
  it('マスを引数に与えた時に、与えたマスで生成されていること', () => {
    const token: Token = new Token('1', new Square('9999', '9999'));

    const token2: Token = new Token('1', Square.init());

    expect(token).not.toStrictEqual(token2);
  });
});

describe('move', () => {
  it('次のマスに遷移できる場合は次のマスを設定する', () => {
    const token: Token = new Token('1', START);
    token.move(LAWYER);

    expect(token.currentSquare).toBe(LAWYER);
  });

  it('次のマスに遷移できない場合はエラーが出力される', () => {
    const error = () => {
      const token: Token = new Token('1', START);
      token.move(IDOL);
    };

    expect(error).toThrowError('次のマスに遷移できません');
  });
});
