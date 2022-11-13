"use strict";
exports.__esModule = true;
exports.getLogger = void 0;
var pino_1 = require("pino");
var Env = {
    DEVELOPMENT: "development",
    PRODUCTION: "production"
};
console.log(process.env.NODE_ENV);
var isDevMode = process.env.NODE_ENV === Env.DEVELOPMENT;
var defaultLogLevel = isDevMode ? "info" : "info";
var logger = (0, pino_1.pino)({
    name: "base-logger",
    level: process.env.LOG_LEVEL || defaultLogLevel,
    // prettyPrint: isDevMode,
    transport: {
        target: 'pino-pretty',
        options: {
            colorize: true
        }
    }
});
var getLogger = function (options) {
    if (options === void 0) { options = {}; }
    return logger.child(options);
};
exports.getLogger = getLogger;
