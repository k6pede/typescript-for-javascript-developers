export {};

let fooCompatible: any;
let barCompatible: string = 'TypeScript';

console.log(typeof fooCompatible); // undefined

// fooに対して、barが代入できる => 型の互換性がある、と言える
fooCompatible = barCompatible;

console.log(typeof fooCompatible); // string

let fooIncompatible: string;
let barIncompatible: number = 1;

// 型 'number' を型 'string' に割り当てることはできません => 型の互換性がない
//fooIncompatible = barIncompatible;

let fooString: string;
let barString: string = 'string';

fooString = barString;

// 文字列リテラル型は文字列型と互換性がある
let fooStringLireral: 'fooStringLiteral' = 'fooStringLiteral';
fooString = fooStringLireral;

let fooNumber: number;
let fooNumberLiteral: 1976 = 1976;
fooNumber = fooNumberLiteral;

interface Animal {
  age: number;
  name: string;
}
class Person {
  constructor(public age: number, public name: string) {}

}

// 代入されるオブジェクト、するオブジェクトが互換性を持つかは、メンバが同じかどうかで決定される
// interfaceとclassは、メンバが同じであれば互換性を持つ => 構造的部分型
let me: Animal;
me = new Person(43, 'name');