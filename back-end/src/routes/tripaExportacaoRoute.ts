const express = require("express")
const router = express.Router()
import tripaExportacaoControlersDelete from "../controllers/tripaExportacao/tripaExportacaoControlersDelete"
import tripaExportacaoControlersGet from "../controllers/tripaExportacao/tripaExportacaoControlersGet"
import tripaExportacaoControlersPost from "../controllers/tripaExportacao/tripaExportacaoControlersPost"


router.get("/", tripaExportacaoControlersGet.getTripaExportacao)
router.get("/:id", tripaExportacaoControlersGet.getTripaExportacaoById)
router.put("/:id")
router.delete("/:id", tripaExportacaoControlersDelete.deleteExportcacao)
router.post("/cadastro", tripaExportacaoControlersPost.postTripaExportacao)

export = router
