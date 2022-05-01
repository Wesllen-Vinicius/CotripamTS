import ItemControlersGet from "../controllers/item/itemControlersGet"
import ItemControlersPut from "../controllers/item/itemControlersPut"
import ItemControlersDelete from "../controllers/item/itemControlersDelete"
import ItemControlersPost from "../controllers/item/itemControlersPost"
const express = require("express")
const router = express.Router()

router.get("/", ItemControlersGet.getItem)
router.get("/:id", ItemControlersGet.getItemById)
router.put("/:id", ItemControlersPut.updateItem)
router.delete("/:id", ItemControlersDelete.deleteItens)
router.post("/cadastro", ItemControlersPost.postItem)

export = router
