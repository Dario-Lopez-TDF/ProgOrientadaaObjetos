import { InterfazPersona } from '../InterfazePersona/InterfazPersonas';

export class Persona implements InterfazPersona {
    protected nombre:string;
    protected apellido: string;
    protected dni: number;

    constructor (paramNombre:string,paramApellido:string,paramDNI:number) {
        this.nombre = paramNombre;
        this.apellido = paramApellido;
        this.dni = paramDNI;
    }

    public setNombre(paramNombre:string):void {
        this.nombre = paramNombre;
    }
    public setApellido(paramApellido: string): void {
        this.apellido = paramApellido;
    }
    public setDni(paramDNI:number):void {
        this.dni = paramDNI;
    }

    public getNombre(): string {
        return this.nombre;
    }
    public getApellido(): string {
        return this.apellido;
    }
    public getDni():number {
        return this.dni
    }

    public nombreCompleto():string {
        let fullname:string = "Nombre: " + this.nombre +' '+ "Apellido: " +this.apellido;
        return fullname;
    }


}