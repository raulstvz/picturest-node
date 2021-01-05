const boardModel = require('./boards.model');

const create = (req, res) => {
  const newBoard = req.body;
  const boardsUpdated = boardModel.create(newBoard);
  return res.status(201).json(boardsUpdated);
};

const getAll = async (req, res) => {
  const boards = await boardModel.all();
  return res.status(200).json(boards);
};

const getAllOfUser = async(req, res) => {
  const filteredBoards = await boardModel.getByUser(req.params.userId)
  return await res.status(200).json(filteredBoards)
}

const getOne = async (req, res) => {
  const board = await boardModel.get(req.params.id);
  if (board) {
    return res.status(200).json(board);
  }
  return res.status(404).end();
};

const update = (req, res) => {
  const updatedBoard = req.body;
  const boardsUpdated = boardModel.update(req.params.id, updatedBoard);
  return res.status(200).json(boardsUpdated);
};

const remove = (req, res) => {
  const boardsWithoutTheDeleted = boardModel.remove(req.params.id);
  return res.status(200).json(boardsWithoutTheDeleted);
};

module.exports = {
  create,
  update,
  getAll,
  getAllOfUser,
  getOne,
  remove,
};