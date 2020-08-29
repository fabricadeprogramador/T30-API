const http = require("http"); //CommonJS
//import * as http from "http"; //ES 6

const hostName = "127.0.0.1";

const port = 3000;

const server = http.createServer((req, res) => {
  let { method, url } = req;

  if (method == "GET") {
    if (url == "/") {
      res.statusCode = 200;
      res.setHeader("Content-Type", "text/plain");
      res.end("Bem Vindo API sem Express");
    } else if (url == "/usuarios") {
      let arr = [{ userName: "Jao" }, { userName: "Maria" }];
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify(arr));
    }
  }
});

server.listen(port, hostName, () => {
  console.log(`API SEM EXPRESS rodando em ${hostName} na porta ${port}`);
});

//ROTAS HTTP

//RESQUEST

//POST - Enviar dados   - C
//GET - buscar          - R
//PUT - Modificar dados - U
//DELETE - Remover      - D

//RESPONSE
