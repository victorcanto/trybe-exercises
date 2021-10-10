const { Router } = require('express');

const router = Router();

const userController = require('../controllers/userController');

router.get('/', userController.getAllUsers);

router.get('/:id', userController.getUserById);

router.get('/search/:id', userController.searchUserByIdAndEmail);

router.post('/', userController.saveUser);

router.put('/:id', userController.editUser);

router.delete('/:id', userController.deleteUser);

module.exports = router;
