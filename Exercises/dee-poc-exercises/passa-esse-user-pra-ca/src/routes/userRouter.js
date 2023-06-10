import { Router } from "express";
import {
    getUser,
    updateUser,
    deleteUser,
} from "../controllers/userController.js";
import userSchemaValidationMiddleware from "../middlewares/userSchemaValidationMiddleware.js";
import tokenValidation from "../middlewares/tokenValidationMiddleware.js";

const userRouter = Router();

userRouter.use(tokenValidation);

userRouter.get("/user", getUser);
userRouter.put("/user", userSchemaValidationMiddleware, updateUser);
userRouter.delete("/user", deleteUser);
export default userRouter;
