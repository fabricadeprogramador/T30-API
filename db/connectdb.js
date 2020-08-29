const mongoose = require("mongoose");

class ConnectDB {
  static conectarMongo() {
    const DB_KEY =
      "mongodb+srv://admin:htwPB5SWMe9kJWvj@cluster0.qvys7.mongodb.net/biblioteca?retryWrites=true&w=majority";

    mongoose.connect(DB_KEY, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    //Eventos do Mongo
    const db = mongoose.connection;
    db.on("error", console.error.bind(console, "connection error:"));
    db.once("open", function () {
      console.log("Conectado no MongoDB");
    });
  }
}

module.exports = ConnectDB;
