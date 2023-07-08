export {};

// static 変化しないメンバ, インスタンスを作らなくても参照できる

class Me {
  static isProgrammer: boolean = true;
  static firstName: string = 'atsushi';
  static lastName: string = 'Ishida';

  static work() {
    //"Hey, guys! This is Atsushi! Are you interested in TS? Lets dive into TS!";
    return `Hey, guys! This is ${this.firstName}! Are you interested in TS? Lets dive into TS!`;
  }
}

class You extends Me {
  static firstName: string = 'u';
  static work(): string {
    return `Hey, guys! This is ${this.firstName}! Are you interested in TS? Lets dive into TS!`;
  }
}

//let me = new Me();
//console.log(me.isProgrammer);

// Class.member変数名(メソッド名)　でアクセスできる
console.log(Me.isProgrammer);
console.log(Me.work());
console.log(You.work());