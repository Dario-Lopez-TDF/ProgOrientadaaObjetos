import { Animal } from "./Animal";
import { ListaDeAnimales } from "./ListaDeAnimales";
import { Gato } from "./Gato";
import { Pez } from "./Pez";
import { Araña } from "./Araña";

let animal1: Gato = new Gato("Kitty", 4);
let animal2: Pez = new Pez("Fish", 0);
let animal3: Araña = new Araña(8);
let animal4: Gato = new Gato("K", 4);

let arrayAnimales: Animal[] = [animal1, animal2, animal3];
let listadoA: ListaDeAnimales = new ListaDeAnimales(arrayAnimales);

listadoA.buscar(animal4);
console.log(listadoA.buscar(animal4));
listadoA.agregarAnimal(animal4);
console.log(listadoA);
listadoA.removerAnimal(animal1);
console.log(listadoA);