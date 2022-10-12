import { Cuenta } from './Cuenta';
import { Persona } from './Persona';

export class CuentaAhorro extends Cuenta {

    protected interes: number;
    protected saldoMinimo: number;

    constructor (paramCliente:Persona,paramCuenta:number){
        super(paramCliente,paramCuenta);
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
    public getInteres



}