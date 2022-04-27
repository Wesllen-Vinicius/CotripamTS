const express = require('express');
const router = express.Router();
import unidadeControlers from '../controllers/unidade'

router.get('/', unidadeControlers.getUnidades);
router.get('/:id', unidadeControlers.getUnidadesById);
router.put('/:id');
router.delete('/:id', unidadeControlers.deleteUnidades);
router.post('/cadastro', unidadeControlers.postUnidades);

export = router;