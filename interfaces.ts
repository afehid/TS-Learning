interface Reportable {
  name: string;
  year: Date;
  broken: boolean;
  summary(): string;
}

const oldCivic = {
  name: 'civic',
  year: new Date(),
  broken: true,
  summary(): string {
    return `Name: ${this.name}`;
  },
};

// const printVehice = (vehice: {
//   name: string;
//   year: number;
//   broken: boolean;
const printVehice = (vehicle: Reportable): void => {
  console.log(`
  
  Vehicle Name: ${vehicle.name},
  Vehicle Year: ${vehicle.year}
  Vehice broken?: ${vehicle.broken}
  `);
};
printVehice(oldCivic);
