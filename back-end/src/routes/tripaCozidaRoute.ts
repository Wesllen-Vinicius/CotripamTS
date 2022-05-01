import TripaCozidaControlersDelete from "../controllers/tripaCozida/tripaCozidaControlersDelete"
import tripaCozidaControlersGet from "../controllers/tripaCozida/tripaCozidaControlersGet"
import TripaCozidaControlersPost from "../controllers/tripaCozida/tripaCozidaControlersPost"
import TripaCozidaControlersPut from "../controllers/tripaCozida/tripaCozidaControlersPut"

const express = require("express")
const router = express.Router()

router.get("/", tripaCozidaControlersGet.getTripaCozida)
router.get("/:id", tripaCozidaControlersGet.getTripaCozidaById)
router.put("/:id", TripaCozidaControlersPut.updateTripaCozida)
router.delete("/:id", TripaCozidaControlersDelete.deleteSerosa)
router.post("/cadastro", TripaCozidaControlersPost.postTripaCozida)

export = router
