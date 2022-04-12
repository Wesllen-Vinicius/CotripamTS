const express = require('express');
const router = express.Router();
import userControlers from '../controllers/user'

router.get('/');
router.get('/:id');
router.put('/:id');
router.delete('/:id');
router.post('/login', userControlers.authUsers);
router.post('/cadastro', userControlers.postUsers);

export = router;