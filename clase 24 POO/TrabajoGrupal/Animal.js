"use strict";
exports.__esModule = true;
exports.Animal = void 0;
var Animal = /** @class */ (function () {
    function Animal(paramPatas) {
        this.patas = paramPatas;
    }
    Animal.prototype.setPatas = function (patas) {
        this.patas = patas;
    };
    Animal.prototype.getPatas = function () {
        return this.patas;
    };
    return Animal;
}());
exports.Animal = Animal;
