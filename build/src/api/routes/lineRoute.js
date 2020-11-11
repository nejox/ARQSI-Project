"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
//import middlewares from '../middlewares';
var line_controller = require('../../controllers/lineController');
const router = express_1.Router();
exports.default = (app) => {
    app.use("/lines", router);
    //get all
    router.get("", line_controller.getAll);
    //get single
    router.get("/:lineId", line_controller.get);
    //update
    router.put("/:lineId", line_controller.put);
    //post
    router.post("", line_controller.post);
    //delete
    router.delete("/:lineId", line_controller.delete);
};
//# sourceMappingURL=lineRoute.js.map