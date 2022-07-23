const swaggerAutogen = require("swagger-autogen")();

const outputFile = "./swagger_output.json";
const endpointsFiles = [".srcserver.ts"];

swaggerAutogen(outputFile, endpointsFiles);
