export {};

//以下二つはsignature
//signatureで設定していない型はそもそも渡されない => elseいらない
function double(value: number): number;
function double(value: string): string;

//関数の実態の方では型制約を行う必要はない　signatureで型制約はできる
function double(value: any):any {
  //typeofで引数の型を判別できる
  if (typeof value === 'number') {
    return value * 2;
  }else if (typeof value === 'string') {
    return value + value;
  }
  //else {
  //   throw 'numberでもStringでもないよ';
  // }
  console.log(typeof value);
}


console.log(double(100));
console.log(double("Go "));