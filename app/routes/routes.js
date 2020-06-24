module.exports = app => {
    const recipes = require("../controllers/controllers.js");
  
    var router = require("express").Router();
  
    // Create a new Recipe
    router.post("/", recipes.create);
  
    // Retrieve all Recipes
    router.get("/", recipes.findAll);
  
    // Retrieve all published Recipes
    router.get("/published", recipes.findAllPublished);
  
    // Retrieve Recipe by name
    router.get("/name/", recipes.findByName);

    // Retrieve a single Recipe with id
    router.get("/:id", recipes.findOne);
  
    // Update a Recipe with id
    router.put("/:id", recipes.update);
  
    // Delete a Recipe with id
    router.delete("/:id", recipes.delete);
  
    // Create a new Recipe
    router.delete("/", recipes.deleteAll);
  
    app.use('/api/rv', router);
  };