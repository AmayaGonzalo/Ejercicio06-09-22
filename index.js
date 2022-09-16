var readlineSync = require('readline-sync');
var Usuario = /** @class */ (function () {
    function Usuario(nombreIngresado, edadIngresado, generoIngresado) {
        this.nombre = nombreIngresado;
        this.edad = edadIngresado;
        this.genero = generoIngresado;
    }
    Usuario.prototype.getEdad = function () {
        return this.edad;
    };
    Usuario.prototype.cargarEdad = function (nuevaEdad) {
        this.edad = nuevaEdad;
    };
    Usuario.prototype.getNombre = function () {
        return this.nombre;
    };
    Usuario.prototype.modificarNombre = function (nuevoNombre) {
        this.nombre = nuevoNombre;
    };
    return Usuario;
}());
var Automovil = /** @class */ (function () {
    function Automovil(pMarca, pModelo, pGama, pEncendido, pVendido) {
        this.marca = pMarca;
        this.modelo = pModelo;
        this.gama = pGama;
        this.encendido = pEncendido,
            this.vendido = pVendido;
    }
    Automovil.prototype.getVendido = function () {
        return this.vendido;
    };
    Automovil.prototype.getEncendido = function () {
        return this.encendido;
    };
    Automovil.prototype.encenderApagar = function () {
        if (this.encendido) {
            this.encendido = false;
        }
        else {
            this.encendido = true;
        }
    };
    Automovil.prototype.vender = function () {
        this.vendido = true;
    };
    return Automovil;
}());
var nuevoUsuario = new Usuario("Pedro", 35, "hombre");
console.log("Nombre usuario: ", nuevoUsuario.getNombre());
console.log("Edad usuario: ", nuevoUsuario.getEdad());
var nuevoNombre = readlineSync.question("¿Cual es el nuevo nombre?");
nuevoUsuario.modificarNombre(nuevoNombre);
nuevoUsuario.cargarEdad(36);
console.log("Nombre usuario: ", nuevoUsuario.getNombre());
console.log("Edad usuario: ", nuevoUsuario.getEdad());
var autoFord = new Automovil("Ford", 2022, "alta", true, false);
console.log("Auto esta encendido: ", autoFord.getEncendido());
console.log("Auto esta vendido: ", autoFord.getVendido());
autoFord.encenderApagar();
autoFord.vender();
console.log("Auto esta encendido: ", autoFord.getEncendido());
console.log("Auto esta vendido: ", autoFord.getVendido());
