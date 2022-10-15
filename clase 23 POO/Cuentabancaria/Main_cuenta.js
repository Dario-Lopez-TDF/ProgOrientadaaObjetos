"use strict";
exports.__esModule = true;
var CuentaAhorro_1 = require("./CuentaAhorro");
var CuentaCorriente_1 = require("./CuentaCorriente");
var Persona_1 = require("./Persona");
var persona1 = new Persona_1.Persona("Lionel", "Messi", 34191613);
var persona2 = new Persona_1.Persona("Mariano", "Martinez", 32145689);
var persona3 = new Persona_1.Persona("Lautaro", "Martinez", 40689527);
var arrayPersonas = [persona1, persona2, persona3];
var cuenta1 = new CuentaAhorro_1.CuentaAhorro(100034191613, persona1);
var cuenta2 = new CuentaAhorro_1.CuentaAhorro(100032145689, persona2);
var cuenta3 = new CuentaAhorro_1.CuentaAhorro(100040689527, persona3);
var gestorCtaAhorros = [cuenta1, cuenta2, cuenta3];
var ctaCorriente1 = new CuentaCorriente_1.CuentaCorriente(persona1, 100034191613);
var ctaCorriente2 = new CuentaCorriente_1.CuentaCorriente(persona2, 100032145689);
var ctaCorriente3 = new CuentaCorriente_1.CuentaCorriente(persona3, 100040689527);
var gestorCtaCorrientes = [ctaCorriente1, ctaCorriente2, ctaCorriente3];
// probamos las funciones
console.log();
console.log("..........................................");
console.log("..........................................");
console.log();
// mostramos las cuentas de los clientes con saldo en "0"
console.log(".....mostramos las cuentas de los clientes inicializados con saldo -0-.......");
console.log();
console.log(cuenta1.toString());
console.log(cuenta2.toString());
console.log(cuenta3.toString());
console.log();
console.log("..........................................");
console.log();
// ingresamos saldo en la cuentas ahorros
console.log(".......IBGRESAMOS DINERO A LAS CUENTAS..........");
console.log(persona1.nombreCompleto());
cuenta1.ingresar(335250);
console.log(persona2.nombreCompleto());
cuenta2.ingresar(160000);
console.log(persona3.nombreCompleto());
cuenta3.ingresar(190500);
console.log("..........................................");
console.log();
// mostramos las cuentas de los clientes con saldo en "positivo"
console.log(".....mostramos las cuentas de los clientes con saldo en positivo.......");
console.log();
console.log(cuenta1.toString());
console.log(cuenta2.toString());
console.log(cuenta3.toString());
console.log();
console.log("..........................................");
console.log();
//  actualizamos los saldos de las cuentas segun su interes
console.log(".......Actulizamos los intereses............");
cuenta1.setInteres(1.02);
cuenta2.setInteres(1.1);
cuenta3.setInteres(1.03);
console.log("..........................................");
// actualizamos las cuentas
console.log();
console.log(".....Actualizamos saldo de las cuentas con sus intereses......");
cuenta1.actualizarSaldo();
cuenta2.actualizarSaldo();
cuenta3.actualizarSaldo();
console.log("..........................................");
console.log();
// mostramos el saldo de las cuentas
console.log(".....mostramos el saldo de las cuentas de los clientes .....");
console.log();
console.log(cuenta1.getCliente(), "  nuevo saldo: ", cuenta1.getSaldo());
console.log(cuenta2.getCliente(), "  nuevo saldo: ", cuenta2.getSaldo());
console.log(cuenta3.getCliente(), "  nuevo saldo: ", cuenta3.getSaldo());
console.log();
console.log("..........................................");
console.log();
// retiramos dinero de las cuentas
console.log(".......RETIRAMOS DINERO DE LAS CUENTAS..........");
console.log(persona1.nombreCompleto());
cuenta1.retirar(135000);
console.log(persona2.nombreCompleto());
cuenta2.retirar(90000);
console.log(persona3.nombreCompleto());
cuenta3.retirar(50000);
console.log();
console.log("..........................................");
console.log();
// mostramos las cuentas de los clientes "retirando" saldo
console.log(".....mostramos las cuentas de los clientes saldo despues del retiro......");
console.log(cuenta1.toString());
console.log(cuenta2.toString());
console.log(cuenta3.toString());
console.log();
console.log("..........................................");
console.log();
