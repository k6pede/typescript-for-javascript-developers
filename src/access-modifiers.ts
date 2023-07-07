export {};

class Person {
  //アクセス修飾子privateを設定することで、インスタンスからの呼び出しを防ぐ
  //メソッドなど内部の処理では呼び出せる サブクラスではアクセスできない
  //publicはデフォ　
  //protected はクラス内部からのアクセスはできるが、サブクラスでもアクセスが可能になる
  protected name: string;
  protected age: number;
  protected nation: string;

  //コンストラクタはreturnしないのでアノテーションは不要
  constructor(name: string, age: number, nation: string) {
    this.name = name;
    this.age = age;
    this.nation = nation;
  }

  profile(): string {
    return `name: ${this.name}, age: ${this.age}`;
  }
}

class Android extends Person {
  constructor(name: string, age: number, nation: string) {
    //super()で親クラスのコンストラクに引数を渡して実行
    super(name,age,nation);
  }

  profile(): string {
    return `name: ${this.name}, age: ${this.age}, nation: ${this.nation}`;
  }
}
let taro = new Person('taro', 30, 'Japan');
console.log(taro.profile());

