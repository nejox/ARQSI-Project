"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
//import middlewares from '../middlewares';
var vehicle_controller = require('../../controllers/vehicleController');
const router = express_1.Router();
exports.default = (app) => {
    app.use('/vehicles', router);
};
//# sourceMappingURL=vehicleRoute.js.map