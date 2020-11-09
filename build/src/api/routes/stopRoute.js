"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
//import middlewares from '../middlewares';
var stop_controller = require('../../controllers/stopController');
const router = express_1.Router();
exports.default = (app) => {
    app.use('/stops', router);
    //get all
    router.get;
    //get single
    router.get;
    //update
    router.put;
    //post
    router.post();
    //delete
    router.delete();
};
//# sourceMappingURL=stopRoute.js.map