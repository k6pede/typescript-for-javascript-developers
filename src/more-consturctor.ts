export {};

class Person {

  //コンストラクタの引数にアクセス修飾子を設定すると...
  constructor(public name:string, public age:number) {
  }
}

//初期化処理を書いていなくても、自動で初期化処理を行なってくれるようになる！
const me = new Person('ham',43);
console.log(me);