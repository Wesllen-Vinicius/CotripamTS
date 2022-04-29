const express = require('express');
const router = express.Router();
import userControlers from '../controllers/user/userControlersPost'
import userControlersGet from '../controllers/user/userControlersGet'
import userControlersDelete from '../controllers/user/userControlersDelete'
import userControlersAuth from '../controllers/user/userControlersAuth'

router.get('/', userControlersGet.getUsers);
router.get('/:id', userControlersGet.getUsersById);
router.put('/:id');
router.delete('/:id', userControlersDelete.deleteUser);
router.post('/login', userControlersAuth.authUsers);
router.post('/cadastro', userControlers.postUsers);

export = router;