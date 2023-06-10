import express, { json } from "express";
import cors from "cors";
import dotenv from "dotenv";

import router from "./routes/router.js";

dotenv.config();
const app = express();

app.use(cors()).use(json()).use(router);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`[Listening ON] Port: ${PORT}`);
});
