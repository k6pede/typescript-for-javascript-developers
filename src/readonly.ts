export {};

class VisaCard {
  // readonly修飾子をつけることで、変更不可　読み取り専用のメンバ変数に
  // 前提としてreadonly属性は外部から読み取るものなので、publicがなくても初期化処理がなされる
  // しかし、省略せずに明示的にした方が親切... readonlyを変更したときにコンパイルエラーが出るし...
  constructor(public readonly owner: string) {
  }
}

let myVisaCard = new VisaCard('ham');
console.log(myVisaCard.owner);

//error TS2540: Cannot assign to 'owner' because it is a read-only property.
//myVisaCard.owner = 'becon';