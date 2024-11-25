const users = [
  {
    name: "Oleksii",
    email: "test1@gmail.com",
    age: 29,
  },
  {
    name: "Ihor",
    email: "test2@gmail.com",
    age: 20,
  },
  {
    name: "Anna",
    email: "test3@gmail.com",
    age: 19,
  },
];

for (const { name, email, age } of users) {
  console.log(`${name}, ${email}, ${age}`);
}
