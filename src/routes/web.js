import express from "express";
import * as controllers from "../controllers";
const router = express.Router();

router.get("/login", controllers.webLogin);
router.get("/register", controllers.webRegister);
router.get("/", controllers.renderHome);

export default router;
