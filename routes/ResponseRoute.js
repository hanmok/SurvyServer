"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const router = express.Router();
const responseController = require('../controllers/responseController');
router.route("/")
    .get(responseController.getAllResponses)
    .post(responseController.createResponse);
module.exports = router;
