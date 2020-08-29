const express = require("express"); //Common JS
const userRouter = require("./routes/user.routes");
const ConnectDB = require("./db/connectdb");

//BANCO
ConnectDB.conectarMongo();

// EXPRESS
const app = express();
app.use(express.json()); //Adicionando um middleware para leitura Json do body do request

//Carregar as rotas de usuario
app.use("/usuarios", userRouter);

const hostName = "127.0.0.1";

const port = 3001;

app.get("/", (req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Bem Vindo API com Express " + Date.now());
});

app.listen(port, hostName, () => {
  console.log(`API COM EXPRESS rodando em ${hostName} na porta ${port}`);
});
