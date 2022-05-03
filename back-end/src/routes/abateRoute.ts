import abateControlersDelete from "../controllers/abate/abateControlersDelete"
import abateControlersGet from "../controllers/abate/abateControlersGet"
import abateControlersPost from "../controllers/abate/abateControlersPost"
import abateControlersPut from "../controllers/abate/abateControlersPut"
import { isAuthenticated } from "../middleware/isAuthenticated"

const express = require("express")
const router = express.Router()

router.get("/", isAuthenticated, abateControlersGet.getAbate)
router.get("/:id", isAuthenticated, abateControlersGet.getAbateById)
router.put("/:id", isAuthenticated, abateControlersPut.updateAbates)
router.delete("/:id", isAuthenticated, abateControlersDelete.deleteAbates)
router.post("/cadastro",  abateControlersPost.postAbates)

export = router
