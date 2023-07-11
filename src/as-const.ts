export {};

let name = 'atu';

name = 'ham';

// const アサーション
// xx as const => xx型になる = xxしか際代入できない = 実質定数である
let nickname = 'ham' as const;
nickname = 'ham';


// オブジェクトでも可能　{} as const 
// 値が全てreadonlyな属性に変わる
let profile = {
  name: 'atu',
  height: 178
} as const;

