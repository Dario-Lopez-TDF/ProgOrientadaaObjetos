import { GestorLibros2 } from './Gestor_Libro';
import { Libro } from './Libros';

let biblioteca = new GestorLibros2("Biblioteca");


let libro_1 = new Libro("Harry Potter 1","J. K. Rowling","Fantasía",8600);
let libro_2 = new Libro("Harry Potter 2","J. K. Rowling","Fantasía",8400);
let libro_3 = new Libro("Harry Potter 3","J. K. Rowling","Fantasía",7300);
let libro_4 = new Libro("Sherlock Holmes","Arthur Conan Doyle","Misterio",7255);
let libro_5 = new Libro("El señor de los anillos","J. R. R. Tolkien","Fantasía",7560);
let libro_6 = new Libro("Cien años de soledad","Gabriel García Márquez","Novela",4050);

biblioteca.insertar(libro_1);
biblioteca.insertar(libro_2);
biblioteca.insertar(libro_3);
biblioteca.insertar(libro_4);
biblioteca.insertar(libro_5);


let arreglo:Array<Libro> = biblioteca.getLibros();
arreglo.push(libro_6);

let biblioteca2 = new GestorLibros2("Biblioteca 2 ",arreglo);

console.log(biblioteca.toString());
console.log(biblioteca2.toString());