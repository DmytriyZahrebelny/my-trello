"use strict";
exports.__esModule = true;
exports.loggerMiddleware = void 0;
var logger_1 = require("../lib/logger");
var logger = (0, logger_1.getLogger)({ name: 'common' });
var loggerMiddleware = function (request, response, next) {
    logger.info("".concat(request.method, " ").concat(request.path));
    next();
};
exports.loggerMiddleware = loggerMiddleware;
