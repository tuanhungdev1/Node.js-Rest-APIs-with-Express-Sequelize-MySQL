module.exports = (app) => {
  const tutorials = require("../controllers/tutorial.controller");

  const router = require("express").Router();

  //Create a new Tutorial
  router.post("/", tutorials.createTutorial);

  //FindAll Tutorial

  router.get("/", tutorials.findAll);

  //FindAll Tutorial Published

  router.get("/published", tutorials.findAllPublished);

  //FindOne a Tutorial

  router.get("/:id", tutorials.findOne);

  //update a tutorial
  router.put("/:id", tutorials.update);

  //Delete a Tutorial with ID
  router.delete("/:id", tutorials.delete);

  //delete add tutorials
  router.delete("/", tutorials.deleteAll);

  app.use("/api/tutorials", router);
};
