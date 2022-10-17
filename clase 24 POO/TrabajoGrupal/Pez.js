"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Pez = void 0;
var Animal_1 = require("./Animal");
var Pez = /** @class */ (function (_super) {
    __extends(Pez, _super);
    function Pez(paramNombre, paramPatas) {
        var _this = _super.call(this, paramPatas) || this;
        _this.nombre = paramNombre;
        return _this;
    }
    Pez.prototype.getNombre = function () {
        return this.nombre;
    };
    Pez.prototype.setNombre = function (nombre) {
        this.nombre = nombre;
    };
    Pez.prototype.jugar = function (nombre) {
        console.log(nombre + " está jugando");
    };
    Pez.prototype.comer = function () {
        console.log("Está comiendo");
    };
    Pez.prototype.caminar = function (patas) {
        this.nadar();
    };
    Pez.prototype.nadar = function () {
        console.log("Está nadando");
    };
    return Pez;
}(Animal_1.Animal));
exports.Pez = Pez;
