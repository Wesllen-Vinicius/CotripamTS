import AbateControlersDelete from "../controllers/abate/abateControlersDelete"
import AbateControlersGet from "../controllers/abate/abateControlersGet"
import AbateControlersPost from "../controllers/abate/abateControlersPost"

const express = require("express")
const router = express.Router()

router.get("/", AbateControlersGet.getAbate)
router.get("/:id", AbateControlersGet.getAbateById)
router.put("/:id")
router.delete("/:id", AbateControlersDelete.deleteAbates)
router.post("/cadastro", AbateControlersPost.postAbates)

export = router
