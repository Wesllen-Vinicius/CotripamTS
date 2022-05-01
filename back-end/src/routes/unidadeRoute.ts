import unidadeControlersPost from "../controllers/unidade/unidadeControlersPost"
import unidadeControlersDelete from "../controllers/unidade/unidadeControlersDelete"
import unidadeControlersGet from "../controllers/unidade/unidadeControlersGet"
import UnidadeControlersPut from "../controllers/unidade/unidadeControlersPut"

const express = require("express")
const router = express.Router()

router.get("/", unidadeControlersGet.getUnidades)
router.get("/:id", unidadeControlersGet.getUnidadesById)
router.put("/:id", UnidadeControlersPut.updateUnidades)
router.delete("/:id", unidadeControlersDelete.deleteUnidades)
router.post("/cadastro", unidadeControlersPost.postUnidades)

export = router
