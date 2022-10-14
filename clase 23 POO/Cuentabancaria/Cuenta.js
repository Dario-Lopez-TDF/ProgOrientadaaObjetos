"use strict";
exports.__esModule = true;
exports.Cuenta = void 0;
var Cuenta = /** @class */ (function () {
    function Cuenta(paramNroCuenta, paramCliente) {
        this.numeroCuenta = paramNroCuenta;
        this.cliente = paramCliente;
        this.saldo = 0;
    }
    Cuenta.prototype.setCliente = function (paramCliente) {
        this.cliente = paramCliente;
    };
    Cuenta.prototype.setNroCuenta = function (paramNroCuenta) {
        this.numeroCuenta = paramNroCuenta;
    };
    Cuenta.prototype.setSaldo = function (paramSaldo) {
        this.saldo = paramSaldo;
    };
    Cuenta.prototype.getCliente = function () {
        return this.cliente;
    };
    Cuenta.prototype.getNroCuenta = function () {
        return this.numeroCuenta;
    };
    Cuenta.prototype.getSaldo = function () {
        return this.saldo;
    };
    Cuenta.prototype.ingresar = function (paramIngreso) {
        console.log(paramIngreso);
        this.saldo = this.saldo + paramIngreso;
    };
    Cuenta.prototype.toString = function () {
        return '(' + this.cliente + ' , ' + this.numeroCuenta + ' , ' + this.saldo + ')';
    };
    return Cuenta;
}());
exports.Cuenta = Cuenta;
