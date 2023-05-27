// /responses

const express = require('express');
const router = express.Router();
const responseController = require('../controllers/responseController');

router.route("/")
.get(responseController.getAllResponses)
.post(responseController.createResponse);


module.exports = router;

export {};