"use strict";
exports.__esModule = true;
exports.Persona = void 0;
var Persona = /** @class */ (function () {
    function Persona(paramNombre, paramApellido, paramDNI) {
        this.nombre = paramNombre;
        this.apellido = paramApellido;
        this.dni = paramDNI;
    }
    Persona.prototype.setNombre = function (paramNombre) {
        this.nombre = paramNombre;
    };
    Persona.prototype.setApellido = function (paramApellido) {
        this.apellido = paramApellido;
    };
    Persona.prototype.setDni = function (paramDNI) {
        this.dni = paramDNI;
    };
    Persona.prototype.getNombre = function () {
        return this.nombre;
    };
    Persona.prototype.getApellido = function () {
        return this.apellido;
    };
    Persona.prototype.getDni = function () {
        return this.dni;
    };
    Persona.prototype.nombreCompleto = function () {
        var fullname = "Nombre: " + this.nombre + ' ' + "Apellido: " + this.apellido;
        return fullname;
    };
    return Persona;
}());
exports.Persona = Persona;
