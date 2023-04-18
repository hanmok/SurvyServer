const express = require('express');
const router = express.Router();
const user_tagController = require('../controllers/user_tagController');

router.route("/")
.get(user_tagController.getAllUser_tags)
.post(user_tagController.createUser_tag);

module.exports = router;

export {};