"use strict";

exports.check = function (values) {
    var errors = [];
    if (values.autoClose < 0) {
        errors.push({ property: "autoClose", message: "Auto close must be 0 or a positive number." });
    }
    return errors;
};

exports.getProperties = function (_values, defaultProperties) {
    return defaultProperties;
};
