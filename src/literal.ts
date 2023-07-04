export {};

let dayOfTHeWeek: string = '日';
//型が文字列だが、想定していない文字列が格納される可能性もある => この場合月〜日以外の文字列はエラーとして弾きたい
dayOfTHeWeek = '月';
dayOfTHeWeek = '31';

//特定の文字列を型として設定できる literal + union
let dayOfTHeWeek2: '日'|'月'|'火'|'木'|'金'|'土' = '日';
dayOfTHeWeek2 = '月';
//dayOfTHeWeek2 = '31'; error!

//数値のliteral
let month: 1|2|3|4|5|6|7|8|9|10|11|12 = 1;
month = 12;
//month = 13; error!

//booleanのliteral
let TRUE: true = true;
//TRUE = false; error!
