const express = require("express")
const getVenuesById= require("../controllers/venues/getVenuesById")
const getVenuesByName= require("../controllers/venues/getVenuesByName")

const venuesRouter = express.Router();

venuesRouter.get("/search/:name", getVenuesByName);
venuesRouter.get("/:id",getVenuesById)



module.exports = venuesRouter;