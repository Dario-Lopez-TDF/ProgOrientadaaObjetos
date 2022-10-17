"use strict";
exports.__esModule = true;
exports.ListaDeAnimales = void 0;
var ListaDeAnimales = /** @class */ (function () {
    function ListaDeAnimales(paramArrayAnimales) {
        this.listaDeAnimales = new Array;
        this.listaDeAnimales = paramArrayAnimales;
    }
    ListaDeAnimales.prototype.buscar = function (animal) {
        var posicion = false;
        for (var i = 0; i < this.listaDeAnimales.length; i++) {
            if (this.listaDeAnimales[i] === animal)
                posicion = true;
        }
        return posicion;
    };
    ListaDeAnimales.prototype.agregarAnimal = function (animal) {
        this.listaDeAnimales.push(animal);
    };
    ListaDeAnimales.prototype.removerAnimal = function (animal) {
        for (var i = 0; i < this.listaDeAnimales.length; i++) {
            if (this.listaDeAnimales[i] === animal) {
                this.listaDeAnimales.splice(i, 1);
            }
        }
    };
    return ListaDeAnimales;
}());
exports.ListaDeAnimales = ListaDeAnimales;
