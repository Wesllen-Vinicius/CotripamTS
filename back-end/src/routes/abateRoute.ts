import abateControlersDelete from "../controllers/abate/abateControlersDelete"
import abateControlersGet from "../controllers/abate/abateControlersGet"
import abateControlersPost from "../controllers/abate/abateControlersPost"

const express = require("express")
const router = express.Router()

router.get("/", abateControlersGet.getAbate)
router.get("/:id", abateControlersGet.getAbateById)
router.put("/:id")
router.delete("/:id", abateControlersDelete.deleteAbates)
router.post("/cadastro", abateControlersPost.postAbates)

export = router
