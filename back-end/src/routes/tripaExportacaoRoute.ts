import tripaExportacaoControlersDelete from "../controllers/tripaExportacao/tripaExportacaoControlersDelete"
import tripaExportacaoControlersGet from "../controllers/tripaExportacao/tripaExportacaoControlersGet"
import tripaExportacaoControlersPost from "../controllers/tripaExportacao/tripaExportacaoControlersPost"
import tripaExportacaoControlersPut from "../controllers/tripaExportacao/tripaExportacaoControlersPut"
import { isAuthenticated } from "../middleware/isAuthenticated"

const express = require("express")
const router = express.Router()

router.get(
  "/",
  isAuthenticated,
  tripaExportacaoControlersGet.getTripaExportacao
)
router.get(
  "/:id",
  isAuthenticated,
  tripaExportacaoControlersGet.getTripaExportacaoById
)
router.put(
  "/:id",
  isAuthenticated,
  tripaExportacaoControlersPut.updateExportacao
)
router.delete(
  "/:id",
  isAuthenticated,
  tripaExportacaoControlersDelete.deleteExportcacao
)
router.post(
  "/cadastro",
  isAuthenticated,
  tripaExportacaoControlersPost.postTripaExportacao
)

export = router
