import { Router } from "express";
import {
    getUser,
    updateUser,
    deleteUser,
} from "../controllers/userController.js";
import { validateUser } from "../middlewares/schemaValidationMiddleware.js";

const userRouter = Router();
userRouter.get("/user", getUser);
authRouter.use(validateUser);
userRouter.put("/user", updateUser);
userRouter.delete("/user", deleteUser);
export default userRouter;
