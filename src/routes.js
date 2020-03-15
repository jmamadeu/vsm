const routes = require("express").Router();

const ProductRoutes = require("./routes/Product.routes");
const UserRoutes = require("./routes/User.routes");

routes.use("/products", ProductRoutes);
routes.use("/users", UserRoutes);

module.exports = routes;
