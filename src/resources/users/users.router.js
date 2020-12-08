// TODO
const { Router } = require('express');
const usersController = require('./users.controller');
const router = Router();

router.route('/')
    .get(usersController.getAll)
    .post(usersController.create)

router.route('/:id')
    .get(usersController.getOne)
    .put(usersController.update)
    .delete(usersController.remove)

module.exports = router;

//TODO: hacer lo mismo para boards y para users