//exportすることで、モジュール化している。　これがなければグローバル空間に変数を定義することになるが、グローバル空間では変数が衝突する恐れが非常に大きい。
export {};

let name = 'TypeScript';

//:(コロン) をつけて型をつける = 型注釈　アノテーション
let isFinished: boolean = true;
isFinished = false;

console.log({ isFinished });
