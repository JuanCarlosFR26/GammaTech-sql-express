const express = require('express');
const { getShirts, createNewShirt, getShirtById, updateShirtById, deleteShirtById } = require('../controllers/dbControllers');
const { checkCreateData, checkUpdateData } = require('../middlewares/middlewareBody');
const { createNewUser, getUsers } = require('../controllers/dbUsersControllers');
const router = express.Router();

router.get('/', getShirts);

router.get('/users', getUsers)

router.get('/:id', getShirtById);

router.patch('/update/:id', checkUpdateData, updateShirtById)

router.delete('/delete/:id', deleteShirtById)

router.post('/', checkCreateData, createNewShirt);

router.post('/newUser', createNewUser)

module.exports = router;