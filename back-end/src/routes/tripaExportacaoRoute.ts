import tripaExportacaoControlersDelete from "../controllers/tripaExportacao/tripaExportacaoControlersDelete"
import tripaExportacaoControlersGet from "../controllers/tripaExportacao/tripaExportacaoControlersGet"
import tripaExportacaoControlersPost from "../controllers/tripaExportacao/tripaExportacaoControlersPost"
import tripaExportacaoControlersPut from "../controllers/tripaExportacao/tripaExportacaoControlersPut"

const express = require("express")
const router = express.Router()

router.get("/", tripaExportacaoControlersGet.getTripaExportacao)
router.get("/:id", tripaExportacaoControlersGet.getTripaExportacaoById)
router.put("/:id", tripaExportacaoControlersPut.updateExportacao)
router.delete("/:id", tripaExportacaoControlersDelete.deleteExportcacao)
router.post("/cadastro", tripaExportacaoControlersPost.postTripaExportacao)

export = router
