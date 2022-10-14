import { Cuenta } from './Cuenta';
import { Persona } from './Persona';

export class CuentaAhorro extends Cuenta {

    protected interes: number;
    protected saldoMinimo: number;

    constructor (paramNroCuenta:number,paramCliente:Persona){
        super(paramNroCuenta,paramCliente);
    }

    public setSaldoMinimo(paramSaldoMin:number){
        this.saldoMinimo = paramSaldoMin;
    }
    public getSaldoMinimo():number{
        return this.saldoMinimo;
    }
    public setInteres(paramInteres:number){
        this.interes = paramInteres;
    } 
    public getInteres():number{
        return this.interes;
    }
    retirar(paramRetiro: number): void {
       //let aux = this.saldo - this.saldoMinimo;
        if(this.saldo > paramRetiro){
            this.saldo = this.saldo - paramRetiro;
            console.log("Usted ha retirado $ " + paramRetiro);
        }else{
            console.log("***Su saldo es insuficiente***. ### No puede retirar esa cantidad ###");
        }
    }

    actualizarSaldo(): void {
        this.saldo = this.saldo * this.interes;
    }


    toString():string {
        return '(' + this.cliente.nombreCompleto() + ' , '+ "Nº de Cuenta: " + this.numeroCuenta + ' , '+"Saldo: $ " + this.saldo +')';
    }


} 