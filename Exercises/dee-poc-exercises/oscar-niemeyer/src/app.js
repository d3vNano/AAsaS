import express from "express";
import { MongoClient } from "mongodb";
import dotenv from "dotenv";

import { signUp, signIn } from "./controllers/authController.js";
import { getUser, putUser, deleteUser } from "./controllers/userController.js";

dotenv.config();

const mongoClient = new MongoClient(process.env.MONGO_URI);
export let db;
mongoClient.connect(() => {
    db = mongoClient.db("oscar-niemeyer");
});

const app = express();
app.use(express.json());

app.post("/sign-up", signUp);

app.post("/sign-in", signIn);

app.get("/user", getUser);

app.put("/user", putUser);

app.delete("/user", deleteUser);

app.listen(5000, () => {
    console.log("Server is listening on port 5000.");
});
