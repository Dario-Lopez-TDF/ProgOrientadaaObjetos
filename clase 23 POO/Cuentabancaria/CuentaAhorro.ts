import { Cuenta } from './Cuenta';
import { Persona } from './Persona';

export class CuentaAhorro extends Cuenta {

    protected interes: number;
    protected saldoMinimo: number;

    constructor (paramNroCuenta:number,paramCliente:Persona){
        super(paramNroCuenta,paramCliente);
            this.saldoMinimo = 100000;
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
    public retirar(paramRetiro: number): void {
       let aux = this.saldo - this.saldoMinimo;
        if( aux > paramRetiro){
            this.saldo = this.saldo - paramRetiro;
            console.log("Usted ha retirado $ " + paramRetiro);
        }else{
            console.log("**Su saldo es insuficiente o No puede retirar esa cantidad ya que irterfiere con el saldo minimo**");
        }
    }

    public actualizarSaldo(): void {
        this.saldo = this.saldo * this.interes;
    }

    public toString(): string {
        return '(' + this.cliente.nombreCompleto() + ' , '+ "Nº de Cuenta: " + this.numeroCuenta + ' , '+"Saldo: $ " + this.saldo +')';
    }


} 