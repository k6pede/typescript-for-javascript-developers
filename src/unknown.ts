export {};

const kansu = (): number => 43;

let numberAny: any = kansu();
let numberUnknown: unknown = kansu();


let sumAny = numberAny + 10;
//'numberUnknown''は 'unknown' 型です。=> WARN:この変数は、数字じゃないかもしれない
//let sumUnknown = numberUnknown + 10;

// type ofを活用することで型を確認しながら安全に実行させていく仕組み = 'タイプガード'
if (typeof numberUnknown === 'number') {
  let sumUnknown = numberUnknown + 10;
  console.log(sumUnknown);
}