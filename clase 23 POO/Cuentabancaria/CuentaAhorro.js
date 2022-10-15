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
exports.CuentaAhorro = void 0;
var Cuenta_1 = require("./Cuenta");
var CuentaAhorro = /** @class */ (function (_super) {
    __extends(CuentaAhorro, _super);
    function CuentaAhorro(paramNroCuenta, paramCliente) {
        var _this = _super.call(this, paramNroCuenta, paramCliente) || this;
        _this.saldoMinimo = 100000;
        return _this;
    }
    CuentaAhorro.prototype.setSaldoMinimo = function (paramSaldoMin) {
        this.saldoMinimo = paramSaldoMin;
    };
    CuentaAhorro.prototype.getSaldoMinimo = function () {
        return this.saldoMinimo;
    };
    CuentaAhorro.prototype.setInteres = function (paramInteres) {
        this.interes = paramInteres;
    };
    CuentaAhorro.prototype.getInteres = function () {
        return this.interes;
    };
    CuentaAhorro.prototype.retirar = function (paramRetiro) {
        var aux = this.saldo - this.saldoMinimo;
        if (aux > paramRetiro) {
            this.saldo = this.saldo - paramRetiro;
            console.log("Usted ha retirado $ " + paramRetiro);
        }
        else {
            console.log("**Su saldo es insuficiente o No puede retirar esa cantidad ya que irterfiere con el saldo minimo**");
        }
    };
    CuentaAhorro.prototype.actualizarSaldo = function () {
        this.saldo = this.saldo * this.interes;
    };
    CuentaAhorro.prototype.toString = function () {
        return '(' + this.cliente.nombreCompleto() + ' , ' + "Nº de Cuenta: " + this.numeroCuenta + ' , ' + "Saldo: $ " + this.saldo + ')';
    };
    return CuentaAhorro;
}(Cuenta_1.Cuenta));
exports.CuentaAhorro = CuentaAhorro;
