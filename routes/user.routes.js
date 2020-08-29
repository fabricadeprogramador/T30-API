var express = require("express");
var router = express.Router();
const { v4: uuidv4 } = require("uuid");

let arr = [
  {
    id: uuidv4(),
    userName: "Virmerson",
    password: "4343",
  },
  {
    id: uuidv4(),
    userName: "A",
    password: "343",
  },
  {
    id: uuidv4(),
    userName: "B",
    password: "434",
  },
  {
    id: uuidv4(),
    userName: "C",
    password: "5434",
  },
];

router.get("/", (req, res) => {
  res.json(arr);
});

router.post("/", (req, res) => {
  //só aceita o que realmente queremos
  let user = {
    id: uuidv4(),
    userName: req.body.userName,
    password: req.body.password,
  };
  //let user = req.body;  // aceita tudo
  arr.push(user);
  res.json(arr);
});

router.delete("/:id", (req, res) => {
  //Pega o indice do primeiro elemento que possuir o ID igual ao que está chegando por parametro
  let indice = arr.findIndex((e) => e.id == req.params.id);
  if (indice != -1) arr.splice(indice, 1);
  res.json(arr);
});

router.put("/:id", (req, res) => {
  //Busca o usuario dentro do array que conhecide com o id informado
  let indice = arr.findIndex((e) => e.id == req.params.id);
  let userAlterar = arr[indice];
  //Alteração do Objeto
  let user = {
    id: userAlterar.id,
    userName: req.body.userName ? req.body.userName : userAlterar.userName,
    password: req.body.password ? req.body.password : userAlterar.password,
  };
  //Atualiza no array
  arr[indice] = user;
  res.json(arr);
});

module.exports = router;
