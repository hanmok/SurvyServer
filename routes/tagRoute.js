"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const tagController = require('../controllers/tagController');
const userTagController = require('../controllers/user_tagController');
const router = express.Router();
router.route("/")
    .get(tagController.getAllTags)
    .post(tagController.createTag);
router.route('/:id')
    .get(tagController.getTagById);
router.route('/:tag_id/users')
    .get(userTagController.getUsersByTagId);
module.exports = router;
