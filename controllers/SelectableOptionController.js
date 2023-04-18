var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const SelectableOption = require('../models/SelectableOption');
exports.createSelectableOption = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
    try {
        let { question_id, position, value } = req.body;
        let selectableOption = new SelectableOption(question_id, position, value);
        selectableOption = yield selectableOption.save();
        res.status(201).json({ message: "selectableOption created" });
    }
    catch (error) {
        console.log(error);
        next(error);
    }
});
exports.getAllSelectableOptions = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
    try {
        const [selectableOptions, _] = yield SelectableOption.findAll();
        res.status(200).json({ count: selectableOptions.length, selectableOptions });
    }
    catch (error) {
        console.log(error);
        next(error);
    }
});
// exports.getQuestionOptionById = async (req, res, next) => { 
// 	try { 
// 		let question_option_id = req.params.id;
// 		let [question_option, _] = await questionOption.findById(question_option_id);
// 		res.status(200).json({question_option: question_option[0]});
// 	} catch (error) { 
// 		console.log(error);
// 		next(error);
// 	}
// }
