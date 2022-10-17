export abstract class Animal {
    protected patas: number;

    constructor(paramPatas: number) {
        this.patas = paramPatas;
    }
    setPatas(patas: number): void {
        this.patas = patas;
    }
    getPatas(): number {
        return this.patas;
    }
    abstract comer(): void;
    abstract caminar(patas: number): void;
}