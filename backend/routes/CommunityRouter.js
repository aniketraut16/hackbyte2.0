const express = require("express")
const{signup,signin} = require("../controllers/ComController")
const communityRouter = express.Router()

communityRouter.post("/signup", signup)

communityRouter.post("/signin",signin)

module.exports = communityRouter