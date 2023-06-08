import express from "express";

const router = express.Router();
import * as controllers from "../controllers";
import verifyToken from "../middlewares/verifyToken";
import verifyRole from "../middlewares/verifyRole";

router.post("/api/v1/register", controllers.register); // register
router.post("/api/v1/login", controllers.login); // login
router.get("/api/v1/search", controllers.search); // login

// Cần phải có quyền Admin
router.post(
  "/api/v1/createproduct",
  [verifyToken, verifyRole],
  controllers.createProduct
); // login
router.get("/api/v1/user", [verifyToken, verifyRole], controllers.getCurrent); // getUsers

export default router;
