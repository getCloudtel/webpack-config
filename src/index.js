import axios from "axios";

const getTodo = async () => {
  const res = await axios("https://jsonplaceholder.typicode.com/todos/1");

  console.log(res.data);
};

getTodo();
