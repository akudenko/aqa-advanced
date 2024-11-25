const car1 = {
  brand: "Mazda",
  model: "6",
  year: "2016",
};

const car2 = {
  brand: "Volvo",
  model: "s60",
  owner: "Oleksii Kud",
};

const car3 = { ...car1, ...car2 };
console.log(car3);
