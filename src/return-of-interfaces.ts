export {};

class Wizard {}
class Monk {}

// TypeScriptは単一継承 単一のクラスしか継承できない...
// class Taro extends Wizard , Monk{};

// 複数のクラスは継承できないがインターフェースならできる　多重継承のようなことができる
// interface => 実装

interface Sage {
  // シグネチャ : 処理の実行がわからないメソッドの宣言 => imprements先でオーバーライドする必要がある => TSだとエラーが出るため実装忘れが減る
  ionazun(): void;
}

interface Warrior {
  attack(): void;
}

//複数のインターフェースを実装したクラスの作成が可能
class Jiro implements Sage, Warrior {
  ionazun(): void {
    console.log('ionazun');
  }
  attack(): void {
      console.log('attack');
  }
};

const jiro = new Jiro();
jiro.ionazun();
jiro.attack();
