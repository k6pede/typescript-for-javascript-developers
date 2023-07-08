export {};

// namespaceで名前空間を作成
namespace Japanese {
  // exportで、外の空間からもアクセスできるように
  export class Person {
    constructor(public name: string) {}
  }

  //namespace内でネストしたnamespaceを定義可能
  export namespace Tokyo {
    export class Person {
      constructor(public name: string) {};
    }
  }

  export namespace Osaka {
    export class Person {
      constructor(public name: string) {};
    }
  }
}

namespace English {
  export class Person {
    constructor(
    public firstName: string, 
    public middleName: string, 
    public lastName: string) 
    {};
  }
}
// Japanese内のPersonクラスを参照
const me = new Japanese.Person('ham');
const michael = new English.Person('Michael','Joseph','Jackson');
// Japanese内のTokyo内のPersonクラスを参照
const meTokyo = new Japanese.Tokyo.Person('tokyoman');

console.log(me.name);
console.log(meTokyo.name);
console.log(michael.firstName);