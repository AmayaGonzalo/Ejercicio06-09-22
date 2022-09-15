var readlineSync = require('readline-sync');
var respuesta;
var Usuario = /** @class */ (function () {
    function Usuario(nombreIngresado, edadIngresado, generoIngresado) {
        this.nombre = nombreIngresado;
        this.edad = edadIngresado;
        this.genero = generoIngresado;
    }
    Usuario.prototype.CargarEdad = function (nuevaEdad) {
        this.edad = nuevaEdad;
    };
    Usuario.prototype.modificarNombre = function () {
        respuesta = readlineSync.question("¿Quieres modificar su nombre? ");
        if (respuesta == "si")
            this.nombre = readlineSync.question("Ingrese su nuevo nombre: ");
        else { }
        return this.nombre;
    };
    return Usuario;
}());
var Automovil = /** @class */ (function () {
    function Automovil(ingresoMarca, ingresoModelo, ingresoGama) {
        this.marca = ingresoMarca;
        this.modelo = ingresoModelo;
        this.gama = ingresoGama;
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
var nuevoUsuario = new Usuario("Gonzalo", 35, "hombre");
console.log(nuevoUsuario);
nuevoUsuario.modificarNombre();
nuevoUsuario.CargarEdad(36);
console.log(nuevoUsuario);
var autoFord = new Automovil("Ford", 2022, "alta");
autoFord.cargarCantidad();
console.log(autoFord);
autoFord.venderAutomovil(1);
console.log(autoFord);
