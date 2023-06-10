import express, { json } from "express";
import cors from "cors";
import dotenv from "dotenv";
import router from "./routes/index.js";
dotenv.config();
var app = express();
app.use(cors())
    .use(json())
    .get("/health", function (req, res) { return res.send("WEEE!"); })
    .use(router);
var PORT = process.env.PORT || 4000;
app.listen(PORT, function () {
    console.log("[Listening ON] Port: ".concat(PORT));
});
