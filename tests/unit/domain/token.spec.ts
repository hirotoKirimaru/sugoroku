import Token from '@/domain/Token';
import Square from '@/domain/Square';

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
