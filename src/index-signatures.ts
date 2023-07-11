export {};

// オブジェクトに動的にプロパティを追加していきたい場合 -> インデックスシグネチャ

//let profile: { name?: string } = {};

// How to write index signatures
// { [index: typeForIndex ]: typeForValue }
interface Profile {
  name: string;
  underTwenty: boolean;
  [index: string]: string | number | boolean;
}

let profile: Profile = { name: 'ham', underTwenty: false };

profile.name = 'ham';
profile.age = 43;
profile.nation = 'Japan';