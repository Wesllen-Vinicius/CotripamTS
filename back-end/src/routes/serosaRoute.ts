import SerosaControlersDelete from "../controllers/serosa/serosaControlersDelete"
import serosaControlersGet from "../controllers/serosa/serosaControlersGet"
import serosaControlersPost from "../controllers/serosa/serosaControlersPost"
import serosaControlersPut from "../controllers/serosa/serosaControlersPut"

const express = require("express")
const router = express.Router()

router.get("/", serosaControlersGet.getSerosa)
router.get("/:id", serosaControlersGet.getSerosaById)
router.put("/:id", serosaControlersPut.updateSerosa)
router.delete("/:id", SerosaControlersDelete.deleteSerosa)
router.post("/cadastro", serosaControlersPost.postSerosa)

export = router
