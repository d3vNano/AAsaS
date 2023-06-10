import express from "express";
import { MongoClient } from "mongodb";
import dotenv from "dotenv";
import bcrypt from "bcrypt";
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

    if (!name || !email || !password) {
        res.sendStatus(400);
        return;
    }

    const hashPass = bcrypt.hashSync(password, 10);

    // Insira o usuário no banco, criptografando a senha com bcrypt
    try {
        await db.collection("users").insertOne({
            name,
            email,
            password: hashPass,
        });

        res.sendStatus(201);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

app.post("/sign-in", async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        res.sendStatus(400);
        return;
    }

    // Busque o usuário no banco e valide a senha usando bcrypt
    try {
        const user = await db.collection("users").findOne({ email });

        if (!user) {
            res.sendStatus(401);
            return;
        }

        const isValid = bcrypt.compareSync(password, user.password);

        if (!isValid) {
            res.sendStatus(401);
            return;
        }

        res.sendStatus(200);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

app.listen(5000, () => {
    console.log("Server is listening on port 5000.");
});
