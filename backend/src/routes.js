"use strict";
exports.__esModule = true;
var express_1 = require("express");
var UserController_1 = require("./controllers/UserController");
var routes = express_1.Router();
routes.get('/Users', UserController_1["default"].index);
exports["default"] = routes;
