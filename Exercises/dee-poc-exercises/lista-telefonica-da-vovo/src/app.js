import express, { json } from "express";
import cors from "cors";
import dotenv from "dotenv";
import { MongoClient } from "mongodb";

const server = express();

dotenv.config();
server.use(cors());
server.use(json());

const mongoClient = new MongoClient(process.env.MONGO_URI);
let db;

mongoClient.connect().then(() => {
    db = mongoClient.db("hub");
});

server.get("/contatos", (req, res) => {
    db.collection("contatos")
        .find()
        .toArray()
        .then((ctts) => {
            res.send(ctts);
        });

    // escreva seu código aqui
});

server.post("/contatos", (req, res) => {
    if (!req.body.nome || !req.body.telefone) {
        res.status(422).send("Todos os campos são obrigatórios!");
        return;
    }

    // escreva seu código aqui
    db.collection("contatos")
        .insertOne(req.body)
        .then(() => {
            res.send(201);
        });

    res.sendStatus(201);
});

server.listen(5000, () => {
    console.log("Rodando em http://localhost:5000");
});
