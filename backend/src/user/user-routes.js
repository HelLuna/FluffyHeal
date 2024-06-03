const Router = require('express');
const userController = require('./user-controller');

const router = new Router();

router.post('/signup', userController.createUser);
router.post('/signin', userController.authUser);

module.exports = router;