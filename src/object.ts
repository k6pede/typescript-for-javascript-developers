export {};

//object　制約はゆるい
let profile1: object = { name: 'Ham' };
profile1 = { birth: 1976 };

// {} プロパティに対して型宣言ができる
let profile2: {
  name: string;
} = { name: 'Ham' };

//再代入はすでに宣言している型にあった値しかプロパティしか出来ない
profile2 = { name: '1976' };
