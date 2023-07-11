export {};

//　型が異なるだけで同じ処理をする関数などを共通化したい場合
//const echo = (arg: number):number => {
//  return arg;
//};
//
//const echo = (arg: string):string => {
//  return arg;
//}

// ジェネリクス関数 T: 抽象的な型...numberにもstringにもなる
const echo = <T>(arg: T): T => {
  return arg;
}

console.log(echo<number>(100));
console.log(echo<string>('hello'));
console.log(echo<boolean>(true));


// class Mirror {
//   constructor(public value: number) {}
//   echo(): number {
//     return this.value;
//   }
// }

// ジェネリクスのクラス
class Mirror<T> {
  constructor(public value: T) {}
  echo(): T {
    return this.value;
  }
}

console.log(new Mirror<number>(123).echo());
console.log(new Mirror<string>('1234str').echo());
console.log(new Mirror<boolean>(true).echo());