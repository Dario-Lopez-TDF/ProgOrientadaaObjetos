import { Animal } from "./Animal";

export class Araña extends Animal {

    constructor(paramPatas: number) {
        super(paramPatas);
    }
    public comer(): void {
        console.log("Está comiendo");
    }
    public caminar(patas: number): void {
        console.log("Está caminando con " + patas + " patas");
    }

}