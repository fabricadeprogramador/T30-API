const express = require("express");
const Usuario = require("../models/usuario");

const router = express.Router();

router.get("/", (req, res) => {
  Usuario.find(function (err, arr) {
    if (err) return res.send("Nao foi possivel buscar");
    res.json(arr);
  });
});

router.post("/", (req, res) => {
  //só aceita o que realmente queremos

  const usuario = new Usuario(req.body);

  usuario
    .save()
    .then(() => res.send("Cadastrado com sucesso"))
    .catch(() => res.send("Erro ao cadastrar"));
});

router.delete("/:id", (req, res) => {
  Usuario.findByIdAndDelete(req.params.id)
    .then(() => res.send("Deletado com sucesso"))
    .catch(() => res.send("Erro ao deletar"));
});

router.put("/:id", (req, res) => {
  Usuario.findByIdAndUpdate(req.params.id, req.body)
    .then(() => res.send("Alterado com sucesso"))
    .catch(() => res.send("Erro ao alterar"));
});

module.exports = router;
