const express = require('express');
const router = express.Router();
import userControlers from '../controllers/user/post'
import userControlersGet from '../controllers/user/get'
import userControlersDelete from '../controllers/user/delete'
import userControlersAuth from '../controllers/user/auth'

router.get('/', userControlersGet.getUsers);
router.get('/:id', userControlersGet.getUsersById);
router.put('/:id');
router.delete('/:id', userControlersDelete.deleteUser);
router.post('/login', userControlersAuth.authUsers);
router.post('/cadastro', userControlers.postUsers);

export = router;