export {};

class Person {
  name: string;
  age: number;

  //コンストラクタはreturnしないのでアノテーションは不要
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  profile(): string {
    return `name: ${this.name}, age: ${this.age}`;
  }
}
let taro = new Person('taro', 30);
// let jiro = new Person();
console.log(taro.profile());
