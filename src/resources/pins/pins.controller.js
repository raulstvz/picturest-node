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

//Pins belonging to a single user
const getAllOfUser = async (req, res) => {
  const filteredPins = await pinModel.getByUser(req.params.userId);
  return res.status(200).json(filteredPins)
}

//Pins belonging to a single board
const getAllOfBoard = async (req, res) => {
  const filteredPins = await pinModel.getByBoard(req.params.boardId);
  return res.status(200).json(filteredPins)
}

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
  getAllOfUser,
  getAllOfBoard,
  getOne,
  update,
  remove,
};
