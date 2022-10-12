import { InterfazTelefono } from './InterfazTelefono';

export class SmartPhone implements InterfazTelefono {
    protected estaPrendido: boolean;
    private prender:boolean;
    private apagar: boolean;
    private llamar: number;
    private foto: boolean;

    constructor(paramPrendido:boolean,paramApagado:boolean,paramLlamada:number){
        this.prender =paramPrendido;
        this.apagar =paramApagado;
        this.llamar =paramLlamada;
        
    }

}