
const express = require('express');
const sectionController = require('../controllers/sectionController');
const router = express.Router();

router.route("/")
.post(sectionController.createSection);

router.route("/:id")
.get(sectionController.getSectionById);

module.exports = router;