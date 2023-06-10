import { Router } from "express";

import { testGet } from "../controllers/test.controller.js";

const testRouter = Router();

testRouter.get("/test", testGet);

export default testRouter;
