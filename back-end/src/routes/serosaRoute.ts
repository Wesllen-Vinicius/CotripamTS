import SerosaControlersDelete from "../controllers/serosa/serosaControlersDelete"
import serosaControlersGet from "../controllers/serosa/serosaControlersGet"
import serosaControlersPost from "../controllers/serosa/serosaControlersPost"
import serosaControlersPut from "../controllers/serosa/serosaControlersPut"
import { isAuthenticated } from "../middleware/isAuthenticated"

const express = require("express")
const router = express.Router()

router.get("/", isAuthenticated, serosaControlersGet.getSerosa)
router.get("/:id", isAuthenticated, serosaControlersGet.getSerosaById)
router.put("/:id", isAuthenticated, serosaControlersPut.updateSerosa)
router.delete("/:id", isAuthenticated, SerosaControlersDelete.deleteSerosa)
router.post("/cadastro", isAuthenticated, serosaControlersPost.postSerosa)

export = router
