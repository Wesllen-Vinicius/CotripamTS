import ItemControlersGet from "../controllers/item/itemControlersGet"
import ItemControlersPut from "../controllers/item/itemControlersPut"
import ItemControlersDelete from "../controllers/item/itemControlersDelete"
import ItemControlersPost from "../controllers/item/itemControlersPost"
import { isAuthenticated } from "../middleware/isAuthenticated"
const express = require("express")
const router = express.Router()

router.get("/", isAuthenticated, ItemControlersGet.getItem)
router.get("/:id", isAuthenticated, ItemControlersGet.getItemById)
router.put("/:id", isAuthenticated, ItemControlersPut.updateItem)
router.delete("/:id", isAuthenticated, ItemControlersDelete.deleteItens)
router.post("/cadastro", isAuthenticated, ItemControlersPost.postItem)

export = router
