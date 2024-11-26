const person = {
  firstName: "Oleksii",
  lastName: "Kud",
  age: 29,
};

person.email = "test@gmail.com";
delete person.age;

console.log(person);
