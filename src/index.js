const express = require("express");
const { v4: uudiv4 } = require("uuid");

const app = express();

app.use(express.json());

const customers = [];


// app.get("/account", (request, response) => {
//   return response.json(["conta 001", "Conta 002"]);
// });

app.post("/account", (request, response) => {
  const { cpf, name } = request.body;
  const id = uudiv4();

  customers.push({
    cpf,
    name,
    id,
    statement: []
  });

  return response.status(201).send();
});

app.listen(3333);
