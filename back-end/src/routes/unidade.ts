const express = require('express');
const router = express.Router();
import unidadeControlersPost from '../controllers/unidade/post'
import unidadeControlersDelete from '../controllers/unidade/delete'
import unidadeControlersGet from '../controllers/unidade/get';

router.get('/', unidadeControlersGet.getUnidades);
router.get('/:id', unidadeControlersGet.getUnidadesById);
router.put('/:id');
router.delete('/:id', unidadeControlersDelete.deleteUnidades);
router.post('/cadastro', unidadeControlersPost.postUnidades);

export = router;