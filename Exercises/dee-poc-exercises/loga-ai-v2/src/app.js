import express from "express";
import { MongoClient } from "mongodb";
import dotenv from "dotenv";
import bcrypt from "bcrypt";
import { v4 as uuid } from "uuid";
dotenv.config();

const mongoClient = new MongoClient(process.env.MONGO_URI);
let db;
mongoClient.connect(() => {
    db = mongoClient.db("hub");
});

const app = express();
app.use(express.json());

app.post("/sign-up", async (req, res) => {
    //name, email, password
    const { name, email, password } = req.body;

    const passwordHash = bcrypt.hashSync(password, 10);

    await db.collection("users").insertOne({
        name,
        email,
        password: passwordHash,
    });

    res.sendStatus(201);
});

app.post("/sign-in", async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await db.collection("users").findOne({ email });

        if (user && bcrypt.compareSync(password, user.password)) {
            // Crie uma sessão na coleção de sessões para o usuário e retorne um token para o front-end
            const token = uuid();
            db.collection("sessions").insertOne({
                token,
                userId: user._id,
            });

            res.send(token);
        } else {
            res.sendStatus(401);
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
});

app.get("/meus-dados", async (req, res) => {
    // Receba um token pelo header Authorization
    const { authorization } = req.headers;
    const token = authorization?.replace("Bearer ", "");
    // Retorne o usuário logado (objeto contendo id, nome e email)
    try {
        const session = await db.collection("sessions").findOne({
            token,
        });

        const user = await db.collection("users").findOne({
            _id: session.userId,
        });

        delete user.password;
        res.send(user);

        if (!session) {
            res.sendStatus(401);
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
    // Caso não seja enviado o token ou não encontrado, retorne status 401
});

app.listen(5000, () => {
    console.log("Server is listening on port 5000.");
});
