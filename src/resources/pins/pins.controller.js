const pinModel = require('./pins.model')

const getAll = async (req, res) => {
  const pins = await pinModel.all();
  return res.status(200).json(pins);
};

const getOne = async (req, res) => {
  const pin = await pinModel.get(req.params.id);
  if (pin) {
    return res.status(200).json(pin);
  }
  return res.status(404).end();
};

/*
// 💯 Pins of a single user: we need to add a new controller method
// and bind it to a user route -> UserRouter.js --> pins controller method
// this method is called under /users/{userId}/pins
const getAllOfUser = (req, res) => {
  const pins = pinModel.all();
  // 💯 Pins of a single user: the param userId is passed as a String and we need an integer:
  const userId = parseInt(req.params.userId);
  const filteredPins = pins.filter((pin) => pin.author === userId);
  return res.status(200).json(filteredPins);
};
*/

const create = (req, res) => {
  const newPin = req.body;
  const pinsUpdated = pinModel.create(newPin);
  return res.status(201).json(pinsUpdated);
};

const update = (req, res) => {
  const updatedPin = req.body;
  const pinsUpdated = pinModel.update(req.params.id, updatedPin);
  return res.status(200).json(pinsUpdated);
};

const remove = (req, res) => {
  const pinsWithoutTheDeleted = pinModel.delete(req.params.id);
  return res.status(200).json(pinsWithoutTheDeleted);
};

module.exports = {
  create,
  getAll,
  //getAllOfUser,
  getOne,
  update,
  remove,
};
