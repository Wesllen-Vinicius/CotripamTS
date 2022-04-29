const express = require("express")
const router = express.Router()
import unidadeControlersPost from "../controllers/unidade/unidadeControlersPost"
import unidadeControlersDelete from "../controllers/unidade/unidadeControlersDelete"
import unidadeControlersGet from "../controllers/unidade/unidadeControlersGet"

router.get("/", unidadeControlersGet.getUnidades)
router.get("/:id", unidadeControlersGet.getUnidadesById)
router.put("/:id")
router.delete("/:id", unidadeControlersDelete.deleteUnidades)
router.post("/cadastro", unidadeControlersPost.postUnidades)

export = router
