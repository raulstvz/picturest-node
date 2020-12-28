// TODO
const { Router } = require('express');
const boardsController = require('./boards.controller');
const pinsController = require('../pins/pins.controller');
const router = Router();

router.route('/')
    .get(boardsController.getAll)
    .post(boardsController.create)

router.route('/:id')
    .get(boardsController.getOne)
    .put(boardsController.update)
    .delete(boardsController.remove)


//self-developed: access pins of a specified board
router.route('/:boardId/pins')
    .get(pinsController.getAllOfBoard); 


module.exports = router;