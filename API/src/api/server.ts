import express from "express";
import { router } from "./router";

const app = express();

app.use(express.json());
app.use(router);
app.listen(3000, () => console.log("Server running http://localhost:3000"));
