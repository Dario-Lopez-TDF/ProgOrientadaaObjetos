"use strict";
/*Armar una base de datos de libros:
Implementar la clase Libro
Implementar la clase GestorLibros → debe soportar insertar/consultar libros.
(Esta clase puede estar "compuesta" por un arreglo de libros)*/
exports.__esModule = true;
exports.Libro = void 0;
var Libro = /** @class */ (function () {
    function Libro(nombreLibro, autorLibro, generoLibro, precio) {
        this.nombre = nombreLibro;
        this.autor = autorLibro;
        this.genero = generoLibro;
        if (precio != undefined) {
            this.precio = precio;
        }
    }
    Libro.prototype.nombre_libro = function () {
        return this.nombre;
    };
    Libro.prototype.cambiar_nombre_libro = function (nombre) {
        this.nombre = nombre;
    };
    Libro.prototype.nombre_autor = function () {
        return this.autor;
    };
    Libro.prototype.cambiar_autor_libro = function (autorNuevo) {
        this.autor = autorNuevo;
    };
    Libro.prototype.genero_libro = function () {
        return this.genero;
    };
    Libro.prototype.cambiar_genero_libro = function (nuevoGenero) {
        this.genero = nuevoGenero;
    };
    Libro.prototype.precio_libro = function () {
        if (this.precio != undefined)
            return this.precio;
        return "Sin precio asignado";
    };
    Libro.prototype.cambiar_precio_libro = function (nuevoPrecio) {
        this.precio = nuevoPrecio;
    };
    Libro.prototype.toString = function () {
        return '(' + this.nombre + ' , ' + this.genero + ' , ' + this.autor + ' , ' + this.precio + ')';
    };
    return Libro;
}()); // Fin de la clase libro /////////////////
exports.Libro = Libro;
