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
exports.CuentaCorriente = void 0;
var Cuenta_1 = require("./Cuenta");
var CuentaCorriente = /** @class */ (function (_super) {
    __extends(CuentaCorriente, _super);
    function CuentaCorriente(paramCliente, paramNroCuenta) {
        return _super.call(this, paramNroCuenta, paramCliente) || this;
        //this.interes = 1.015; se cambia este valor por otro dentro de la funcion actualizarSaldo()
    }
    CuentaCorriente.prototype.retirar = function (paramRetiro) {
        if (this.saldo > paramRetiro) {
            this.saldo = this.saldo - paramRetiro;
            console.log("Usted ha retirado $ " + paramRetiro);
        }
        else {
            console.log("***Su saldo es insuficiente***. ### No puede retirar esa cantidad ###");
        }
    };
    CuentaCorriente.prototype.actualizarSaldo = function () {
        this.saldo = this.saldo * 1.015; // valor fijo de 1,5% anual = a 1.015 valor numerco centesimal
    };
    CuentaCorriente.prototype.toString = function () {
        return '(' + this.cliente.nombreCompleto() + ' , ' + "Nº de Cuenta: " + this.numeroCuenta + ' , ' + "Saldo: $ " + this.saldo + ')';
    };
    return CuentaCorriente;
}(Cuenta_1.Cuenta));
exports.CuentaCorriente = CuentaCorriente;
