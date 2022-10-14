import { Cuenta } from './Cuenta';
import { Persona } from './Persona';

export class CuentaCorriente extends Cuenta {

    protected interes:number;

    constructor(paramCliente:Persona,paramNroCuenta:number){
        super(paramNroCuenta,paramCliente,);
        //this.interes = 1.015; se cambia este valor por otro dentro de la funcion actualizarSaldo()
    }

    retirar(paramRetiro: number): void {
        if(this.saldo > paramRetiro){
            this.saldo = this.saldo - paramRetiro;
            console.log("Usted ha retirado $ "+ paramRetiro);
        }else{
            console.log("***Su saldo es insuficiente***. ### No puede retirar esa cantidad ###")
        }
    }
    actualizarSaldo(): void {
        this.saldo = this.saldo * 1.015; // valor fijo de 1,5% anual = a 1.015 valor numerco centesimal
    }

    toString():string {
        return '(' + this.cliente.nombreCompleto() + ' , '+ "Nº de Cuenta: " + this.numeroCuenta + ' , '+"Saldo: $ " + this.saldo +')';
    }

   }
