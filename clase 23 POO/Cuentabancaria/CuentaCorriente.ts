import { Cuenta } from './Cuenta';
import { Persona } from './Persona';

export class CuentaCorriente extends Cuenta {

    protected interes:number;

    constructor(paramCliente:Persona,paramCuenta:number){
        super(paramCliente,paramCuenta);
        this.interes = 1.5; //Braian cambió este valor por otro parametro
    }

    retirar(paramRetiro: number): void {
        if(this.saldo > paramRetiro){
            this.saldo = this.saldo - paramRetiro;
            console.log("ha retirado $ "+ paramRetiro);
        }else{
            console.log("su saldo es insuficiente")
        }
    }
    actualizarSaldo(): void {
        this.saldo = this.saldo * this.interes; //Braian cambió "this.interes" valor por 1.5 creo...
    }

}
