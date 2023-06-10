import { Router } from "express";
import { signUp, signIn } from "../controllers/authController.js";
import { validateUser } from "../middlewares/schemaValidationMiddleware.js";
const authRouter = Router();

authRouter.use(validateUser);
authRouter.post("/sign-up", signUp);
authRouter.post("/sign-in", signIn);
export default authRouter;
