export {};

type Profile = {
  name: string;
  age: number;
};

const me: Profile = {
  name: 'hame',
  age: 43,
};

me.age++;

console.log(me); //{ name: 'hame', age: 44 }

type PersonalDataType = Readonly<Profile>;

const friend: PersonalDataType = {
  name: 'shige',
  age: 40,
};

// 読み取り専用プロパティであるため、'age' に代入することはできません。ts(2540)
// friend.age++;

type Yomitori<T> = {
  readonly [P in keyof T]: T[P]; 
};

type YomitoriProfile = Yomitori<Profile>;
