import {} from "dotenv/config";
import express from "express";
import cors from "cors";
import configViewEngine from "./config/viewEngine";
import webRoutes from "./routes/web";
import apiRoutes from "./routes/api";
import "./config/connectDB";

const app = express(); // app express

// checkDb();

//Config cors access
app.use(
  cors({
    origin: process.env.CLIENT_URL,
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

//CRUD
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//PORT
const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME;

configViewEngine(app);
//Route
app.use("/", webRoutes);
app.use("/", apiRoutes);

app.listen(port, hostname, () => {
  console.log(`Server is running on the port ${port}`);
});
