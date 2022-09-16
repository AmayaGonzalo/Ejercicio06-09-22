let readlineSync = require('readline-sync');

class Usuario {
    private nombre: string;
    private edad: number;
    private genero: string;

    constructor(nombreIngresado: string, edadIngresado: number, generoIngresado: string) {
        this.nombre = nombreIngresado;
        this.edad = edadIngresado;
        this.genero = generoIngresado;

    }

    public getEdad(): number {
        return this.edad;
    }

    public cargarEdad(nuevaEdad: number): void {
        this.edad = nuevaEdad;
    }

    public getNombre(): string {
        return this.nombre;
    }

    public modificarNombre(nuevoNombre: string): void {
        this.nombre = nuevoNombre;
    }
}

class Automovil {
    private marca: string;
    private modelo: number;
    private gama: string;
    private encendido: boolean;
    private vendido: boolean;

    constructor(pMarca: string, pModelo: number, pGama: string, pEncendido: boolean, pVendido: boolean) {
        this.marca = pMarca;
        this.modelo = pModelo;
        this.gama = pGama;
        this.encendido = pEncendido,
        this.vendido = pVendido;
    }

    public getVendido(): boolean {
        return this.vendido;
    }

    public getEncendido(): boolean {
        return this.encendido;
    }

    public encenderApagar(): void {
        if (this.encendido) {
            this.encendido = false;
        } else {
            this.encendido = true;
        }
    }

    public vender(): void {
        this.vendido = true;
    }
}


let nuevoUsuario = new Usuario("Pedro", 35, "hombre");
console.log("Nombre usuario: ", nuevoUsuario.getNombre());
console.log("Edad usuario: ", nuevoUsuario.getEdad());
let nuevoNombre = readlineSync.question("¿Cual es el nuevo nombre?");
nuevoUsuario.modificarNombre(nuevoNombre);
nuevoUsuario.cargarEdad(36);
console.log("Nombre usuario: ", nuevoUsuario.getNombre());
console.log("Edad usuario: ", nuevoUsuario.getEdad());

let autoFord = new Automovil("Ford", 2022, "alta", true, false);
console.log("Auto esta encendido: ", autoFord.getEncendido());
console.log("Auto esta vendido: ", autoFord.getVendido());
autoFord.encenderApagar();
autoFord.vender();
console.log("Auto esta encendido: ", autoFord.getEncendido());
console.log("Auto esta vendido: ", autoFord.getVendido());
