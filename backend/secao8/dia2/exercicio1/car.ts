class Car {
  brand: string;
  color: string;
  doors: number;

  constructor(brand: string, color: string, doors: number) {
    this.brand = brand;
    this.color = color;
    this.doors = doors;
  }

  honk(): void {
    console.log(`O carro de cor ${this.color} buzinou!`);
  }

  turnOn(): void {
    console.log(`O carro da marca ${this.brand} e cor ${this.color} foi ligado.`);
  }
}

const car1 = new Car('Chevrolet', 'vermelho', 4);

car1.honk();
car1.turnOn();