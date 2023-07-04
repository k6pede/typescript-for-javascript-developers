export {};

//tuple型 配列の要素番号ごとに型指定できる
let profile: [string, number] = ['ham', 43];

//下のように、指定した型以外の値を入れようとするとエラー
//profile = [43,'ham'];