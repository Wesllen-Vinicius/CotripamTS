import abateControlersDelete from "../controllers/abate/abateControlersDelete"
import abateControlersGet from "../controllers/abate/abateControlersGet"
import abateControlersPost from "../controllers/abate/abateControlersPost"
import abateControlersPut from "../controllers/abate/abateControlersPut"

const express = require("express")
const router = express.Router()

router.get("/", abateControlersGet.getAbate)
router.get("/:id", abateControlersGet.getAbateById)
router.put("/:id", abateControlersPut.updateAbates)
router.delete("/:id", abateControlersDelete.deleteAbates)
router.post("/cadastro", abateControlersPost.postAbates)

export = router
