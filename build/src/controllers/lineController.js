"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAll = function (req, res) {
    console.log("GETALL");
    return res.json(req).status(200);
};
exports.get = function (req, res) {
    console.log("GET");
    return res.json(req).status(200);
};
exports.put = function (req, res) {
    console.log("PUT");
    return res.json(req).status(200);
};
exports.post = function (req, res) {
    console.log("POST");
    return res.json(req).status(201);
};
exports.delete = function (req, res) {
    console.log("DELETE");
    return res.json(req).status(200);
};
//# sourceMappingURL=lineController.js.map