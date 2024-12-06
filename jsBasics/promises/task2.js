function fetchTodo() {
  return fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => {
      return response.json();
    })
    .catch((error) => {
      console.error("Error: ", error);
      throw error;
    });
}

function fetchUser() {
  return fetch("https://jsonplaceholder.typicode.com/users/1")
    .then((response) => {
      return response.json();
    })
    .catch((error) => {
      console.log("Promise.all:");
      console.log("Todo:", todo);
      console.log("User:", user);
      throw error;
    });
}

Promise.all([fetchTodo(), fetchUser()])
  .then(([todo, user]) => {
    console.log("Promise.all:");
    console.log("Todo:", todo);
    console.log("User:", user);
  })
  .catch((error) => {
    console.error("Error: ", error);
  });

Promise.race([fetchTodo(), fetchUser()])
  .then((result) => {
    console.log("Promise.race:", result);
  })
  .catch((error) => {
    console.error("Error: ", error);
  });
