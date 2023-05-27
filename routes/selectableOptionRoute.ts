// 	/selectable-options

const express = require('express');
const selectableOptionController = require('../controllers/SelectableOptionController');
const router = express.Router();

router.route("/")
.post(selectableOptionController.createSelectableOption)
.get(selectableOptionController.getAllSelectableOptions);

// router.route("/:id")
// .get(questionOptionController.getQuestionOptionById);

module.exports = router;
