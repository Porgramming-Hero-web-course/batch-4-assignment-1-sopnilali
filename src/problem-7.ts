// Create a TypeScript class Car with properties make, model, and year. Include a method getCarAge that returns the car's age based on the current year.

class Car {
  make: string;
  model: string;
  year: number;

  constructor(make: string, model: string, year: number) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  getCarAge(): number {
    const currentYear = new Date().getFullYear();
    return currentYear - this.year;
  }
}

const toyotaCamry = new Car('Toyota', 'Camry', 2021);

// Print the car's make, model, year, and age
// console.log(`The make Car is ${toyotaCamry.make} and the model is ${toyotaCamry.model} and current year is ${toyotaCamry.year} and car age is ${toyotaCamry.getCarAge()} years`);