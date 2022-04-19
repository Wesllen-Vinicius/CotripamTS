const express = require('express');
const router = express.Router();
import unidadeControlers from '../controllers/unidade'

router.get('/');
router.get('/:id');
router.put('/:id');
router.delete('/:id');
router.post('/cadastro', unidadeControlers.postUnidades);

export = router;