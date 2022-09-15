var readlineSync = require('readline-sync');
var respuesta = readlineSync.question("¿Quieres modificar su nombre? ");
var Usuario = /** @class */ (function () {
    function Usuario(nombreIngresado, edadIngresado, generoIngresado) {
        this.nombre = nombreIngresado;
        this.edad = edadIngresado;
        this.genero = generoIngresado;
    }
    Usuario.prototype.CargarEdad = function (nuevaEdad) {
        this.edad = nuevaEdad;
    };
    Usuario.prototype.modificarNombre = function (respuesta) {
        if (respuesta == "si")
            this.nombre = readlineSync.question("Ingrese su nuevo nombre: ");
        else { }
        return this.nombre;
    };
    return Usuario;
}());
var Automovil = /** @class */ (function () {
    function Automovil(pMarca, pModelo, pGama, pCantidadActual) {
        this.marca = pMarca;
        this.modelo = pModelo;
        this.gama = pGama;
        this.cantidadActual = pCantidadActual;
    }
    Automovil.prototype.cargarCantidad = function () {
        this.cantidadActual = readlineSync.question("Ingrese cantidad de automoviles: ");
    };
    Automovil.prototype.venderAutomovil = function (cantidad) {
        this.cantidadActual = this.cantidadActual - cantidad;
    };
    Automovil.prototype.encenderApagar = function () {
        if (this.encendido)
            this.encendido = false;
        else
            this.encendido = true;
    };
    return Automovil;
}());
var nuevoUsuario = new Usuario("Pedro", 35, "hombre");
console.log(nuevoUsuario);
nuevoUsuario.modificarNombre(respuesta);
nuevoUsuario.CargarEdad(36);
console.log(nuevoUsuario);
var autoFord = new Automovil("Ford", 2022, "alta", 33);
autoFord.cargarCantidad();
console.log(autoFord);
autoFord.venderAutomovil(1);
console.log(autoFord);
