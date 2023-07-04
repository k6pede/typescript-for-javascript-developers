export {};

//別名 aliasをつける type Alias = ...; 別名は大文字から

type MOJIRETSU = string;
const fooString: string = 'Hello';
//型として使えている
const fooMojiretsu: MOJIRETSU = 'Hello';

const example1 = {
  name: 'Ham',
  age: 43
};

//オブジェクトにも使える
type Profile = {
  name: string;
  age: number;
}

const example2: Profile = {
  name: 'Ham',
  age: 43
};

//リバースエンジニアリング的にすでにあるものからタイプエイリアスもできる
type Profile2 = typeof example1;