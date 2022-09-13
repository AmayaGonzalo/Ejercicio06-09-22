let readlineSync = require('readline-sync');
class Televisor {
    private estaPrendido: boolean;
    private volumenActual: number;
    private canalActual: number;


    constructor(volumenInicial: number, canalInicial: number) {
        this.volumenActual = volumenInicial;
        this.canalActual = canalInicial;
    }

    prenderApagar(): void {
    if (this.estaPrendido)
        this.estaPrendido = false
    else
        this.estaPrendido = true
    }

    subirVolumen(): void {
        this.volumenActual = this.volumenActual + 1
    }
    bajarVolumen(): void {
        this.volumenActual = this.volumenActual - 1
    }

    subirCanal(): void {
        this.canalActual = this.canalActual + 1
    }

    bajarCanal(): void {
        this.canalActual = this.canalActual - 1
    }

    elegirCanal(canal: number): void {
        this.canalActual = canal;
    }
}
let primerTelevisor = new Televisor(0,3);
console.log(primerTelevisor);

class Usuario{
    private nombre: string;
    private edad: number;
    private genero : string;
    

    constructor (nombreIngresado:string,edadIngresado: number, generoIngresado : string){
        nombreIngresado = readlineSync.question("Ingrese su nombre: ");
        this.nombre = nombreIngresado;
        edadIngresado = parseInt( readlineSync.question("Ingrese su edad: "));
        this.edad = edadIngresado;
        generoIngresado = readlineSync.question("Ingrese su genero: ");
        this.genero = generoIngresado;
        
    }

     modificarNombre():void {
        let respuesta :string =  readlineSync.question("¿Quiere modificar su nombre? ");
         if (respuesta=="si")
            this.nombre = readlineSync.question("Ingrese su nuevo nombre: ");
         else {}
     }
        
}


let nuevoUsuario = new Usuario("Gonzalo",35,"hombre");
console.log(nuevoUsuario);
nuevoUsuario.modificarNombre();

console.log(nuevoUsuario);



