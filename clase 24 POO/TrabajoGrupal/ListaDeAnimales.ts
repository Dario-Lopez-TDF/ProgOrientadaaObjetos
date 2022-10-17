import { Animal } from "./Animal";

export class ListaDeAnimales {
    private listaDeAnimales = new Array<Animal>;

    constructor(paramArrayAnimales: Animal[]) {
        this.listaDeAnimales = paramArrayAnimales;
    }

    public buscar(animal: Animal): boolean {
        let posicion: boolean = false
        for (let i: number = 0; i < this.listaDeAnimales.length; i++) {
            if (this.listaDeAnimales[i] === animal)
                posicion = true;
        }
        return posicion;
    }
    public agregarAnimal(animal: Animal): void {
        this.listaDeAnimales.push(animal);
    }
    public removerAnimal(animal: Animal): void {
        for (let i: number = 0; i < this.listaDeAnimales.length; i++) {
            if (this.listaDeAnimales[i] === animal) {
                this.listaDeAnimales.splice(i, 1);
            }
        }

    }
}