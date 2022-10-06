"use strict";
exports.__esModule = true;
exports.GestorLibros2 = void 0;
var Libros_1 = require("./Libros");
var GestorLibros2 = /** @class */ (function () {
    function GestorLibros2(nombre, libros) {
        this.libros = new Array;
        this.nombreGestor = nombre;
        if (libros != undefined)
            this.libros = libros;
    }
    GestorLibros2.prototype.esVacio = function () {
        if (this.libros.length == 0)
            return true;
        return false;
    };
    GestorLibros2.prototype.cantidadLibros = function () {
        return this.libros.length;
    };
    GestorLibros2.prototype.insertar = function (libro) {
        this.libros.push(libro);
    };
    GestorLibros2.prototype.getLibros = function () {
        var nuevoArreglo = new Array;
        for (var index = 0; index < this.cantidadLibros(); index++) {
            var nombre = this.libros[index].nombre_libro();
            var autor = this.libros[index].nombre_autor();
            var genero = this.libros[index].genero_libro();
            var nuevoLibro = new Libros_1.Libro(nombre, autor, genero);
            nuevoArreglo.push(nuevoLibro);
        }
        return nuevoArreglo;
    };
    GestorLibros2.prototype.toString = function () {
        var resultado = this.nombreGestor + "\n";
        for (var index = 0; index < this.cantidadLibros(); index++) {
            resultado += this.libros[index].toString() + '\n\n';
        }
        return resultado;
    };
    GestorLibros2.prototype.getIndex = function (titulo) {
        var pos = -1;
        for (var index = 0; index < this.cantidadLibros(); index++) {
            if (this.libros[index].nombre_libro() == titulo)
                pos = index;
        }
        return pos;
    };
    GestorLibros2.prototype.consultar = function (titulo) {
        if (this.getIndex(titulo) == -1)
            return false;
        return true;
    };
    GestorLibros2.prototype.modificarGestor = function (nombre) {
        this.nombreGestor = nombre;
    };
    GestorLibros2.prototype.modificarLibro = function (titulo) {
        if (this.getIndex(titulo) == -1)
            this.libros[this.getIndex(titulo)].cambiar_nombre_libro(titulo);
    };
    GestorLibros2.prototype.eliminar = function (titulo) {
        if (this.getIndex(titulo) == -1)
            this.libros.splice(this.getIndex(titulo), 1);
    };
    return GestorLibros2;
}());
exports.GestorLibros2 = GestorLibros2;
