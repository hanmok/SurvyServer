var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const SectionBridge = require('../models/SectionBridge');
exports.getAllSectionBridges = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
    try {
        const [sectionBridges, _] = yield SectionBridge.findAll();
        res.status(200).json({ count: sectionBridges.length, sectionBridges });
    }
    catch (error) {
        console.log(error);
        next(error);
    }
});
exports.createSectionBridge = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
    try {
        let { current_id, next_id, question_id, selectableOption_id } = req.body;
        let sectionBridge = new SectionBridge(current_id, next_id, question_id, selectableOption_id);
        sectionBridge = yield sectionBridge.save();
        res.status(201).json({ message: "sectionBridge created" });
    }
    catch (error) {
        console.log(error);
        next(error);
    }
});
