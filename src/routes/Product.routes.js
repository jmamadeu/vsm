const routes = require("express").Router();

const ProductController = require("../controllers/ProductController");

routes.post("/", ProductController.store);

routes.get("/", ProductController.index);
routes.get("/:id", ProductController.show);

routes.put("/:id", ProductController.update);

routes.delete("/:id", ProductController.destroy);

module.exports = routes;
