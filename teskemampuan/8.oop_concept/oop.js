class Car {
    constructor(nama, tahun, hargaSewa) {
      this.nama = nama;
      this.tahun = tahun;
      this.hargaSewa = hargaSewa;
    }
  
    // example method to get a formatted string of the car's details
    getCarDetails() {
      return `Name: ${this.nama}, Year: ${this.tahun}, Hire rate: ${this.hargaSewa} dollar/day`;
    }
  }
  
  const myCar = new Car('SUV', 1946, 100);
  console.log(myCar.nama); // outputs: Tesla Model S
  console.log(myCar.tahun); // outputs: 2020
  console.log(myCar.hargaSewa, "dollar"); // outputs: 200
  console.log(myCar.getCarDetails()); // outputs: Name: Tesla Model S, Year: 2020, Hire rate: 200/day