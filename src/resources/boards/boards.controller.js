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


// 💯 Boards of a single user: we need to add a new controller method
// and bind it to a user route -> UserRouter.js --> board controller method
// this method is called under /users/{userId}/boards
const getAllOfUser = async (req, res) => {
  const boards = boardModel.all();
  // 💯 Boards of a single user: the param userId is passed as a String and we need an integer:
  const userId = parseInt(req.params.userId);
  const filteredBoards = boards.filter((board) => board.author === userId);
  return res.status(200).json(filteredBoards);
};

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