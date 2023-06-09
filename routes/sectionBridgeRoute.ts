// /section-bridges


const express = require('express');
const sectionBridgeController = require('../controllers/sectionBridgeController');
const router = express.Router();

router.route("/")
.get(sectionBridgeController.getAllSectionBridges)
.post(sectionBridgeController.createSectionBridge);

module.exports = router;

export {};