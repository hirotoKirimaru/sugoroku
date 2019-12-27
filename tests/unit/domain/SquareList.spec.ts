import SquareList from '@/domain/SquareList';
import Square from '@/domain/Square';

let START: Square = new Square('-', '0', 'スタート');
let LAWYER: Square = new Square('0', '101', '弁護士に就職マス');
let IDOL: Square = new Square('101', '102', 'アイドルに就職マス');
let PART: Square = new Square('102', '103', 'フリーターマス');
let OFFICE_WORKER: Square = new Square('0', '201', '会社員に就職マス');
let PAYDAY1: Square = new Square('103', '301', '給料日');
let PAYDAY2: Square = new Square('201', '301', '給料日');
let END: Square = new Square('301', '900', 'ゴール');

function extracted() {
  const squareList: SquareList = new SquareList();

  squareList.add(START);
  squareList.add(LAWYER);
  squareList.add(IDOL);
  squareList.add(PART);
  squareList.add(OFFICE_WORKER);
  squareList.add(PAYDAY1);
  squareList.add(PAYDAY2);
  squareList.add(END);
  return squareList;
}

describe('マス一覧', () => {
  it('初期位置の次は、弁護士マスか会社員マス', () => {
    const squareList: SquareList = extracted();

    const expected : Array<Square> = new Array<Square>();
    expected.push(LAWYER);
    expected.push(OFFICE_WORKER);

    expect(squareList.nextList(START)).toEqual(expected);
  });

  it('会社員コースに進んでも、特別コースに進んでも、給料日を迎えられる。', () => {
    const squareList = extracted();

    expect(squareList.nextList(PART)[0].position).toEqual(PAYDAY1.position);
    expect(squareList.nextList(OFFICE_WORKER)[0].position).toEqual(PAYDAY2.position);
  });
});
