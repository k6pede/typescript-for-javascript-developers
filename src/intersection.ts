export {};

//intersection 交差型

type Pitcher1 = {
  throwingSpeed: number;
};

type Batter1 = {
  battingAverage: number;
};

const DaimajinSasaki: Pitcher1 = {
  throwingSpeed : 154
};
const OchiaiHitomitsu: Batter1 = {
  //型 '{ throwingSpeed: number; battingAverage: number; }' を型 'Batter1' に割り当てることはできません。
  //オブジェクト リテラルは既知のプロパティのみ指定できます。'throwingSpeed' は型 'Batter1' に存在しません。
  //throwingSpeed : 154,
  battingAverage : 0.367
};

//二つの型を合わせた型を定義したい
//わざわざ新規作成すると...
// type TwoWayPlayer = {
//   throwingSpeed: number;
//   battingAverage: number;
// }

//二つの型を合わせたintersectionの作成 複数の型を&で連結する
type TwoWayPlayer = Pitcher1 & Batter1;
const OtaniShouhei: TwoWayPlayer = {
  throwingSpeed: 165,
  battingAverage: 0.286
};