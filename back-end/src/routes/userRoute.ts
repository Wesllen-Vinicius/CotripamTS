import userControlers from "../controllers/user/userControlersPost"
import userControlersGet from "../controllers/user/userControlersGet"
import userControlersDelete from "../controllers/user/userControlersDelete"
import userControlersAuth from "../controllers/user/userControlersAuth"
import UserControlersPut from "../controllers/user/userControlersPut"
import { isAuthenticated } from "../middleware/isAuthenticated"
const express = require("express")
const router = express.Router()

router.get("/", isAuthenticated, userControlersGet.getUsers)
router.get("/:id", isAuthenticated, userControlersGet.getUsersById)
router.put("/:id", isAuthenticated, UserControlersPut.updateUsers)
router.delete("/:id", isAuthenticated, userControlersDelete.deleteUser)
router.post("/login", userControlersAuth.authUsers)
router.post("/cadastro",  userControlers.postUsers)

export = router
