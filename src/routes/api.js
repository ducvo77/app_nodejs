import express from "express";

const router = express.Router();
import * as controllers from "../controllers";
import verifyToken from "../middlewares/verifyToken";
import verifyRole from "../middlewares/verifyRole";

router.post("/api/v1/register", controllers.register);
router.post("/api/v1/login", controllers.login);
router.get("/api/v1/search", controllers.search);
router.get("/api/v1/getproduct/:id", controllers.getProduct);

// Cần phải có quyền Admin
router.post("/api/v1/add", [verifyToken, verifyRole], controllers.addProduct);
router.put(
  "/api/v1/update/:id",
  [verifyToken, verifyRole],
  controllers.updateProduct
);
router.delete(
  "/api/v1/delete/:id",
  [verifyToken, verifyRole],
  controllers.deleteProduct
);
router.get("/api/v1/user", [verifyToken, verifyRole], controllers.getCurrent);

export default router;
