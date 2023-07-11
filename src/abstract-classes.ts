export {};

// 抽象クラス:抽象メソッドを有するクラス
// 抽象メソッド:オーバーライドする必要があるメソッド
abstract class Animal {
  abstract cry(): string;
}

class Lion extends Animal {
  cry() {
    return 'roar';
  }
}

//抽象クラスを継承した際、抽象メソッドをオーバーライドしなければエラーとなる。’
class Tiger extends Animal {
  cry() {
    return 'grrrr';
  }
};