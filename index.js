var readlineSync = require('readline-sync');
var Televisor = /** @class */ (function () {
    function Televisor(volumenInicial, canalInicial) {
        this.volumenActual = volumenInicial;
        this.canalActual = canalInicial;
    }
    Televisor.prototype.prenderApagar = function () {
        if (this.estaPrendido)
            this.estaPrendido = false;
        else
            this.estaPrendido = true;
    };
    Televisor.prototype.subirVolumen = function () {
        this.volumenActual = this.volumenActual + 1;
    };
    Televisor.prototype.bajarVolumen = function () {
        this.volumenActual = this.volumenActual - 1;
    };
    Televisor.prototype.subirCanal = function () {
        this.canalActual = this.canalActual + 1;
    };
    Televisor.prototype.bajarCanal = function () {
        this.canalActual = this.canalActual - 1;
    };
    Televisor.prototype.elegirCanal = function (canal) {
        this.canalActual = canal;
    };
    return Televisor;
}());
var primerTelevisor = new Televisor(0, 3);
console.log(primerTelevisor);
var Usuario = /** @class */ (function () {
    function Usuario(nombreIngresado, edadIngresado, generoIngresado) {
        nombreIngresado = readlineSync.question("Ingrese su nombre: ");
        this.nombre = nombreIngresado;
        edadIngresado = parseInt(readlineSync.question("Ingrese su edad: "));
        this.edad = edadIngresado;
        generoIngresado = readlineSync.question("Ingrese su genero: ");
        this.genero = generoIngresado;
    }
    Usuario.prototype.modificarNombre = function () {
        var respuesta = readlineSync.question("¿Quiere modificar su nombre? ");
        if (respuesta == "si")
            this.nombre = readlineSync.question("Ingrese su nuevo nombre: ");
        else { }
    };
    return Usuario;
}());
var nuevoUsuario = new Usuario("Gonzalo", 35, "hombre");
console.log(nuevoUsuario);
nuevoUsuario.modificarNombre();
console.log(nuevoUsuario);
