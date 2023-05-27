"use strict";
// /sections
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const sectionController = require('../controllers/sectionController');
const router = express.Router();
router.route("/")
    .get(sectionController.getAllSections)
    .post(sectionController.createSection);
router.route("/:id")
    .get(sectionController.getSectionById);
module.exports = router;
