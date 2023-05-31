import express from "express";

const router = express.Router();
import * as controllers from "../controllers";

router.get("/api/v1/user", controllers.getUsers); // getUsers
router.post("/api/v1/register", controllers.register); // register
router.post("/api/v1/login", controllers.login); // login

export default router;
