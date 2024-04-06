const express = require("express");
const router = express.Router();
const {
    createOrganisation
} = require("../controllers/OrganisationController");

router.post("/backend/organisation/createorganisation", createOrganisation);

module.exports = router;