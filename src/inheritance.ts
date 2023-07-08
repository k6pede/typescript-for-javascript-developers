export {};

class Animal {
  constructor(public name: string) {};
  run(): string {
    return 'I can run';
  }
}

class Lion extends Animal {
  public speed: number;
  constructor(name: string, speed: number) {
    super(name);
    this.speed = speed;
  };
  run(): string {
    const parentMessage = super.run();
    return `${super.run()} by ${this.speed}km`;
  }
}

// let animal = new Animal();
// let lion = new Lion();

// console.log(animal.run());
// console.log(lion.run());
console.log(new Animal('Mick').run());
console.log(new Lion('Simba',80).run());