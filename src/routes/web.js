import express from "express";

const router = express.Router();

router.get("/", (req, res) => res.send("SERVER ON!!"));
// router.get("/detail/:id", getDetailPage);
// router.post("/submit_user", submitUser);
// router.post("/deleteUser/:id", deleteUser);
// router.get("/editUser/:id", editUser);
// router.post("/updateUser/:id", updateUser);

export default router;
