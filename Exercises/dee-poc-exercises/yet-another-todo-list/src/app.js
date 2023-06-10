import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const tasks = [];

app.post("/tasks", (req, res) => {
    const { description, isChecked } = req.body;

    tasks.push({ description, isChecked });

    res.sendStatus(200);
});

app.get("/tasks", (req, res) => {
    res.send(tasks);
});

app.listen(5000, () => {
    console.log("wee");
});
