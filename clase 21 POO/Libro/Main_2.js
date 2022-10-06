"use strict";
exports.__esModule = true;
var Gestor_Libro_1 = require("./Gestor_Libro");
var Libros_1 = require("./Libros");
var biblioteca = new Gestor_Libro_1.GestorLibros2("Biblioteca");
var libro_1 = new Libros_1.Libro("Harry Potter 1", "J. K. Rowling", "Fantasía", 8600);
var libro_2 = new Libros_1.Libro("Harry Potter 2", "J. K. Rowling", "Fantasía", 8400);
var libro_3 = new Libros_1.Libro("Harry Potter 3", "J. K. Rowling", "Fantasía", 7300);
var libro_4 = new Libros_1.Libro("Sherlock Holmes", "Arthur Conan Doyle", "Misterio", 7255);
var libro_5 = new Libros_1.Libro("El señor de los anillos", "J. R. R. Tolkien", "Fantasía", 7560);
var libro_6 = new Libros_1.Libro("Cien años de soledad", "Gabriel García Márquez", "Novela", 4050);
biblioteca.insertar(libro_1);
biblioteca.insertar(libro_2);
biblioteca.insertar(libro_3);
biblioteca.insertar(libro_4);
biblioteca.insertar(libro_5);
var arreglo = biblioteca.getLibros();
arreglo.push(libro_6);
var biblioteca2 = new Gestor_Libro_1.GestorLibros2("Biblioteca 2 ", arreglo);
console.log(biblioteca.toString());
console.log(biblioteca2.toString());
