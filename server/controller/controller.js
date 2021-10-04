var Userdb = require("../model/model");

// create and save a new user
exports.create = (req, res) => {
  // validate request
  if (!req.body) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  // new user
  const user = new Userdb({
    name: req.body.name,
    email: req.body.email,
    gender: req.body.gender,
    status: req.body.status,
  });
};

// retrieve and return all users / retrieve and return a single user
exports.find = (req, res) => {};

// update a new identified user by user id
exports.update = (req, res) => {};

// delete a user with specified user id
exports.delete = (req, res) => {};
