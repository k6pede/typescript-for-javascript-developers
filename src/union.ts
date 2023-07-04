export {};

//union型　共用体型

let value = 1;
//アノテーションしていなくても、型推論からコンパイルエラーが出る
//value = 'foo';

//両方のデータを格納したい場合　=> union型
let value2: number | string = 1;
value2 = 'foo';
