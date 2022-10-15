import { Persona } from './Persona'; // mio  //////////

export abstract class Cuenta{
    protected numeroCuenta: number;
    protected saldo: number;
    protected cliente: Persona;

    constructor (paramNroCuenta:number,paramCliente:Persona) {
        this.numeroCuenta = paramNroCuenta;
        this.cliente = paramCliente;
        this.saldo = 0;
        
    }

    public setCliente(paramCliente:Persona):void {
        this.cliente = paramCliente;
    }
    public setNroCuenta(paramNroCuenta: number): void {
        this.numeroCuenta = paramNroCuenta;
    }
    public setSaldo(paramSaldo:number):void {
        this.saldo = paramSaldo;
    }

    public getCliente(): Persona {
        return this.cliente;
    }
    public getNroCuenta(): number {
        return this.numeroCuenta;
    }
    public getSaldo():number {
        return this.saldo
    }

    public ingresar(paramIngreso:number): void{
       console.log(paramIngreso);
       this.saldo = this.saldo + paramIngreso;
    }

    abstract retirar(paramRetiro:number):void;
    abstract actualizarSaldo():void;

    public toString():string {
        return '(' + this.cliente.nombreCompleto() + ' , '+ "Nº de Cuenta: " + this.numeroCuenta + ' , '+"Saldo: $ " + this.saldo +')';
    }


}

