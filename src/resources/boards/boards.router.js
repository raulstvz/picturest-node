// TODO
const { Router } = require('express');
const boardsController = require('./boards.controller');
const router = Router();

router.route('/')
    .get(boardsController.getAll)
    .post(boardsController.create)

router.route('/:id')
    .get(boardsController.getOne)
    .put(boardsController.update)
    .delete(boardsController.remove)

//🎖️ self-developed: allows access pins of a specified board
router.route('/:boardId/pins').get(boardsController.getPinsOfBoard);

module.exports = router;