const express = require("express")
const router = express.Router()
import TripaCozidaControlersDelete from "../controllers/tripaCozida/tripaCozidaControlersDelete"
import tripaCozidaControlersGet from "../controllers/tripaCozida/tripaCozidaControlersGet"
import TripaCozidaControlersPost from "../controllers/tripaCozida/tripaCozidaControlersPost"


router.get("/", tripaCozidaControlersGet.getTripaCozida)
router.get("/:id", tripaCozidaControlersGet.getTripaCozidaById)
router.put("/:id")
router.delete("/:id", TripaCozidaControlersDelete.deleteSerosa)
router.post("/cadastro", TripaCozidaControlersPost.postTripaCozida)

export = router
