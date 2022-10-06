/*Armar una base de datos de libros:
Implementar la clase Libro
Implementar la clase GestorLibros → debe soportar insertar/consultar libros. 
(Esta clase puede estar "compuesta" por un arreglo de libros)*/

export class Libro {
    private nombre: string;
    private autor: string;
    private genero: string;
    private precio: number;

    constructor (nombreLibro:string,autorLibro:string,generoLibro:string,precio?:number){
        this.nombre = nombreLibro;
        this.autor = autorLibro;
        this.genero = generoLibro;
        if(precio != undefined){
            this.precio = precio; 
        }
    }

    nombre_libro():string{
        return this.nombre;
    }
    cambiar_nombre_libro(nombre:string){
        this.nombre = nombre;
    }
    nombre_autor():string{
        return this.autor;
    }
    cambiar_autor_libro(autorNuevo:string){
        this.autor = autorNuevo;
    }
    genero_libro():string{
        return this.genero;
    }
    cambiar_genero_libro(nuevoGenero:string){
        this.genero = nuevoGenero;
    }
    precio_libro(){
        if(precio != undefined)
       return this.precio;
       return "Sin precio asignado";
    }

    cambiar_precio_libro(nuevoPrecio:number){
        this.precio = nuevoPrecio;
    }
    toString():string {
        return '(' + this.nombre + ' , ' + this.genero + ' , ' + this.autor + ' , ' + this.precio + ')';
    }
} // Fin de la clase libro /////////////////
