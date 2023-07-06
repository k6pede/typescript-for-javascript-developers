export {};

const nextYearSalary = (currentSalary: number, rate: number = 1.1) => {
  return currentSalary * rate;
};

console.log(nextYearSalary(1000, 1.05));

//該当引数を与えなければデフォルト引数が適用される
console.log(nextYearSalary(1000));