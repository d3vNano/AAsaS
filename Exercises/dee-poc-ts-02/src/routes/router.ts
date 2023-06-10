import { Router } from "express";

import testRouter from "./test.routes.js";

const router = Router();

router.get("/health", (req, res) => res.send("WEEE!"));
router.use(testRouter);

export default router;
