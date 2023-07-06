export {};

const reducer = (accumlator: number, currentValue: number) => {

  return accumlator + currentValue;
}

// 引数の数を指定しなくてもよい形　REST
const sum: (...values: number[]) => number
 = (...values: number[]): number => {
  return values.reduce(reducer);
  
};

console.log(sum(1,2,3,4,5));
