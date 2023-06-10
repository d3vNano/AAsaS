import express from "express";
import cors from "cors";

const serv = express();
serv.use(cors());

serv.get("/hello", (req, res) => {
    res.send("Meu primeiro servidor, yay!");
});

serv.listen(5000, () => {
    console.log("SERVER ON!");
});
