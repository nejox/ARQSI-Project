"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
//import middlewares from '../middlewares';
var line_controller = require('../../controllers/lineController');
const router = express_1.Router();
exports.default = (app) => {
    app.use("/lines", router);
};
//# sourceMappingURL=lineRoute.js.map