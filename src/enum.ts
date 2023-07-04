export {};

//enum 列挙型 中に列挙した要素には、番号が振られる
enum Months {
  January = 1, //数値のenumの先頭の要素を1でオーバーライドすると以降は１からインクリメントされる
  February,
  March,
  April,
  May,
  June,
  July,
  August,
  September,
  October,
  November,
  December,
}

//番号が出力される
console.log(Months.January); //1
console.log(Months.February); //2
console.log(Months.December); //12

enum COLORS {
  RED = '#FF0000',
  WHITE = '#FFFFFF',
  GREEN = '#008000',
  BLUE = '#0000FF',
  BLACK = '#000000'
  
}
let green = COLORS.GREEN;
console.log(green); //#008000

//追加できる
enum COLORS {
  YELLOW = '#FFFF00' ,
  //GRAY 列挙型メンバーには初期化子が必要です。error!

}

//プロパティ 'YELLOW' は型 'typeof COLORS' に存在しません。 !error
//COLORS.GRAY;

