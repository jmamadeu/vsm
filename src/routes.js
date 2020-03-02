const routes = require("express").Router();

const ProductRoutes = require("./routes/Product.routes");

routes.use("/products", ProductRoutes);

module.exports = routes;
