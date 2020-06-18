const db = require("../models");
const { DB } = require("../config/db.config");
const Dish = db.dish;
const Op = db.Sequelize.Op;

// Create and Save a new Dish
exports.create = (req, res) => {
   // Validate request
   if (!req.body.Name) {
    res.status(400).send({
      message: "Name can not be empty!"
    });
    return;
  }

  // Create a Dish
  const dish = {
      Revision: 0,
      ParentID: req.body.parent ? req.body.parent ===0 : null,
      Compeat: req.body.Compeat ? req.body.Compeat ===0 : 0,
      isPrep: req.body.isPrep,
      Name: req.body.Name ? req.body.Name ==='' : 'TempName' + Math.floor(Math.random() * Math.floor(100000)),
      DisplayName: req.body.DisplayName ? req.body.DisplayName ==='' : 'TempName' + Math.floor(Math.random() * Math.floor(100000)),
      RevisionDate: db.Sequelize.DATE,
      ShelfLife: req.body.ShelfLife,
      ShelfLifeID: req.body.ShelfLifeID,
      Yield: req.body.Yield,
      PortionID: req.body.PortionID,
      StationID: req.body.StationID,
      CategoryID:req.body.CategoryID,
      CookTime: req.body.CookTime,
      isActive: req.body.isActive,
      isTest: req.body.isTest,
      StartDate: req.body.StartDate,
      EndDate: req.body.EndDate,
      isDead: req.body.isDead
  };

  // Save Dish in the database
  Dish.create(dish)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Dish."
      });
    });
};

// Retrieve all Dishes from the database.
exports.findAll = (req, res) => {
  const title = req.query.Name;
  var condition = name ? { name: { [Op.like]: `%${name}%` } } : null;

  Dish.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving recipes."
      });
    });
};

// Find a single Dish with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Dish.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Recipe with id=" + id
      });
    });

};

// Update a Dish by the id in the request
exports.update = (req, res) => {
  
};

// Delete a Dish with the specified id in the request
exports.delete = (req, res) => {
  
};

// Delete all Dishs from the database.
exports.deleteAll = (req, res) => {
  
};

// Find all published Dishs
exports.findAllPublished = (req, res) => {
  
};