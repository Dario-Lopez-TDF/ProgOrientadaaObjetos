import { Libro } from './Libros';

export class GestorLibros2 {
    private libros = new Array<Libro>;
    private nombreGestor:string;

    constructor(nombre:string,libros?:Array<Libro>){
        this.nombreGestor = nombre;
        if(libros != undefined)
            this.libros = libros;

    }

    esVacio():boolean{
        if(this.libros.length == 0)
            return true;
        return false;
    }

    cantidadLibros():number{
        return this.libros.length
    }

    insertar(libro:Libro){
        this.libros.push(libro);
    }

    getLibros():Array<Libro>{
        let nuevoArreglo = new Array<Libro>;
        for (let index:number = 0; index < this.cantidadLibros(); index++) {
            let nombre = this.libros[index].nombre_libro();
            let autor = this.libros[index].nombre_autor();
            let genero = this.libros[index].genero_libro();
            let nuevoLibro = new Libro(nombre,autor,genero);
            nuevoArreglo.push(nuevoLibro);       
          }
        
        return nuevoArreglo;
    }

    toString():string{
        let resultado:string = this.nombreGestor + "\n";
        for (let index:number = 0; index < this.cantidadLibros(); index++) {
          resultado += this.libros[index].toString() + '\n\n';
           
        }
        return resultado;
    }
    
    getIndex(titulo:string):number{
        let pos:number = -1;
        for (let index:number = 0; index < this.cantidadLibros(); index++) {
            if(this.libros[index].nombre_libro() == titulo)
                pos = index;
        }
        return pos;
    }
    
    consultar(titulo:string):boolean{
        if(this.getIndex(titulo) == -1)
            return false;
        return true
        
    }

    modificarGestor(nombre:string){
        this.nombreGestor = nombre;
    }

    modificarLibro(titulo:string){
        if(this.getIndex(titulo) == -1)
            this.libros[this.getIndex(titulo)].cambiar_nombre_libro(titulo)
    }

    eliminar(titulo:string){
        if(this.getIndex(titulo) == -1)
            this.libros.splice(this.getIndex(titulo),1);
    }


}