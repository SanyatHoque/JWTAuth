import express from "express";
import {authUser,registerUser,getUsers,getPrograms} from "../controllers/userController.js";
import { authMiddlewareRoute } from "../middleware/authMiddlewareRoute.js";



const router = express.Router();
router.route("/register").post(registerUser);
router.route("/login").post(authUser,authMiddlewareRoute);
router.route("/getUsers").get(getUsers);
router.route("/getPrograms").get(getPrograms);

export default router;
