import TripaCozidaControlersDelete from "../controllers/tripaCozida/tripaCozidaControlersDelete"
import tripaCozidaControlersGet from "../controllers/tripaCozida/tripaCozidaControlersGet"
import TripaCozidaControlersPost from "../controllers/tripaCozida/tripaCozidaControlersPost"
import TripaCozidaControlersPut from "../controllers/tripaCozida/tripaCozidaControlersPut"
import { isAuthenticated } from "../middleware/isAuthenticated"

const express = require("express")
const router = express.Router()

router.get("/", isAuthenticated, tripaCozidaControlersGet.getTripaCozida)
router.get("/:id", isAuthenticated, tripaCozidaControlersGet.getTripaCozidaById)
router.put("/:id", isAuthenticated, TripaCozidaControlersPut.updateTripaCozida)
router.delete("/:id", isAuthenticated, TripaCozidaControlersDelete.deleteSerosa)
router.post("/cadastro", isAuthenticated, TripaCozidaControlersPost.postTripaCozida)

export = router
