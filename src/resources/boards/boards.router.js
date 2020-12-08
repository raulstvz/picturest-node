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

module.exports = router;

//TODO: hacer lo mismo para boards y para users