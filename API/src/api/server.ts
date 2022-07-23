import express from "express";
import { router } from "./router";

const app = express();

const swaggerUi = require("swagger-ui-express");
const swaggerFile = require("./swagger_output.json");

app.use(express.json());
app.use(router);
app.use("/doc", swaggerUi.serve, swaggerUi.setup(swaggerFile));
app.listen(3000, () => console.log("Server running http://localhost:3000"));
