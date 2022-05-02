import unidadeControlersPost from "../controllers/unidade/unidadeControlersPost"
import unidadeControlersDelete from "../controllers/unidade/unidadeControlersDelete"
import unidadeControlersGet from "../controllers/unidade/unidadeControlersGet"
import UnidadeControlersPut from "../controllers/unidade/unidadeControlersPut"
import { isAuthenticated } from "../middleware/isAuthenticated"

const express = require("express")
const router = express.Router()

router.get("/", isAuthenticated, unidadeControlersGet.getUnidades)
router.get("/:id", isAuthenticated, unidadeControlersGet.getUnidadesById)
router.put("/:id", isAuthenticated, UnidadeControlersPut.updateUnidades)
router.delete("/:id", isAuthenticated, unidadeControlersDelete.deleteUnidades)
router.post("/cadastro", isAuthenticated, unidadeControlersPost.postUnidades)

export = router
