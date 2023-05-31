import express from "express";

const router = express.Router();
import * as controllers from "../controllers";

router.get("/api/v1/user", controllers.getUsers); // getUsers
router.post("/api/v1/register", controllers.register); // register

export default router;
