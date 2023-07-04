export {};

let numbers: number[] = [1, 2, 3];
console.log(numbers);

//interface オリジナルの型を定義するとき
//<> ジェネリクス　
let numbers2: Array<number> = [1, 2, 3];
let string2: Array<string> = ['tokyo', 'osaka', 'kyoto'];

//配列、２次元配列のアノテーション
let strings: string[] = ['TypeScript', 'JavaScript', 'CoffeeScript'];
let twoDarray :number[][]= [
  [50, 100],
  [150, 200]
];
//複数の型が混在する配列のアノテーション union型
let array: (string | number | boolean)[] = [1, false, 'Japan'];