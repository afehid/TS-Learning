const carMakes = ['ford', 'toyota', 'chevy'];
const dates = [new Date(), new Date()];

// Two dimensional arrays
const carsByMake = [['f150'], ['corolla'], ['camaro']];

// if we want to initialize and indicate an array

const test: string[][] = [];

const carr = carMakes[0];

const myCar = carMakes.pop();

//carMakes.push(100);

carMakes.map((car: string): string => {
  return car;
});

//Flexible types

const importantDates: (Date | string)[] = [];

importantDates.push('2030-10-10');
importantDates.push(new Date());
