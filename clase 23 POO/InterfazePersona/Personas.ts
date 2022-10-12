import { InterfazPersona } from './InterfazPersonas';

export class Persona implements InterfazPersona {
    protected nombre:string;
    protected apellido: string;

    constructor (paramNombre:string,paramApellido:string) {
        this.nombre = paramNombre;
        this.apellido = paramApellido;
    }

    public setNombre(paramNombre:string):void {
        this.nombre = paramNombre;
    }
    public setApellido(paramApellido: string): void {
        this.apellido = paramApellido;
    }
    public getNombre(): string {
        return this.nombre;
    }
    public getApellido(): string {
        return this.apellido;
    }



}

