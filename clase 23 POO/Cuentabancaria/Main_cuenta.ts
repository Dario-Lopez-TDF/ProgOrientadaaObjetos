import { CuentaAhorro } from './CuentaAhorro';
import { CuentaCorriente } from './CuentaCorriente';
import { Persona } from './Persona';

let persona1:Persona = new Persona("Lionel","Messi",34191613);
let persona2:Persona = new Persona("Mariano","Martinez",32145689);
let persona3:Persona = new Persona("Lautaro","Martinez",40689527);

let arrayPersonas:Persona[] = [persona1,persona2,persona3];

let cuenta1:CuentaAhorro = new CuentaAhorro(100034191613,persona1);
let cuenta2:CuentaAhorro = new CuentaAhorro(100032145689,persona2);
let cuenta3:CuentaAhorro = new CuentaAhorro(100040689527,persona3);

let gestorCtaAhorros:CuentaAhorro[] = [cuenta1,cuenta2,cuenta3];

let ctaCorriente1:CuentaCorriente = new CuentaCorriente(persona1,100034191613);
let ctaCorriente2:CuentaCorriente = new CuentaCorriente(persona2,100032145689);
let ctaCorriente3:CuentaCorriente = new CuentaCorriente(persona3,100040689527);

let gestorCtaCorrientes:CuentaCorriente[] = [ctaCorriente1,ctaCorriente2,ctaCorriente3];

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
cuenta2.ingresar(155000);
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
console.log(cuenta1.getCliente(),"  nuevo saldo: ",cuenta1.getSaldo());
console.log(cuenta2.getCliente(),"  nuevo saldo: ",cuenta2.getSaldo());
console.log(cuenta3.getCliente(),"  nuevo saldo: ",cuenta3.getSaldo());
console.log();
console.log("..........................................");
console.log();

// retiramos dinero de las cuentas
console.log(".......RETIRAMOS DINERO DE LAS CUENTAS..........");
console.log(persona1.nombreCompleto());
cuenta1.retirar(135000);
console.log(persona2.nombreCompleto()); 
cuenta2.retirar(155000);
console.log(persona3.nombreCompleto()); 
cuenta3.retirar(197000); 
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

