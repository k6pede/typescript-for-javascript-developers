export {};

// 不確定な情報を持ちうる変数

//ts-config.json内の　strictNullChecks = falseを設定するとnullを設定できるようになってしまう => nullableな状態

//union型を使うことでnullを設定できる xx | null
let profile: { name: string; age: number | null } = {
  name: 'hame',
  age: null
};