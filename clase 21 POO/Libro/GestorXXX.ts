class GestorLibros {

    private listadoDeLibros: Libro[];

    constructor(parametroArregloLibros:Libro[]){
        this.listadoDeLibros = parametroArregloLibros;
    }
// usamos la clase libro como tipo
    consultarLibro(libroParametro:Libro):boolean{
        let existe: boolean = false;
        let posicion: number = -1;

        for(let i:number = 0; i < this.listadoDeLibros.length; i++){
            if(libroParametro.nombre_libro() == this.listadoDeLibros[i].nombre_libro()){
                posicion = i;
                existe = true;
            }
        }
        return existe;
    }
    consultarPosicion(libroParametro:Libro): number {
        let posicion: number = -1;

        for(let i:number = 0; i < this.listadoDeLibros.length; i++){
            if(libroParametro.nombre_libro() == this.listadoDeLibros[i].nombre_libro()){
                posicion = i;
            }
        }
        return posicion;
    }
    registrarNuevoLibro(libroParametro:Libro):void {
        this.listadoDeLibros.push(libroParametro);
    }
    editarLibro(posicion:number,nombreParam:string,autorParam:string,generoParam:string,precioParam:number){
        this.listadoDeLibros[posicion].cambiar_nombre_libro(nombreParam);
        this.listadoDeLibros[posicion].cambiar_autor_libro(autorParam);
        this.listadoDeLibros[posicion].cambiar_genero_libro(generoParam);
        this.listadoDeLibros[posicion].cambiar_precio_libro(precioParam);
    }

    eliminarLibro(libroParametro:Libro):void{
        for(let i:number = 0; i < this.listadoDeLibros.length; i++){
            if(libroParametro.nombre_libro() == this.listadoDeLibros[i].nombre_libro()){
                this.listadoDeLibros.splice(i,1);
            }
        }
    }
    

} // Fin de la clase gestor libros ///////////////////