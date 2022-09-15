let readlineSync = require('readline-sync');
let respuesta =  readlineSync.question("¿Quieres modificar su nombre? ");


class Usuario{
    private nombre: string;
    private edad: number;
    private genero : string;
    

    constructor (nombreIngresado:string, edadIngresado: number, generoIngresado : string){
        this.nombre = nombreIngresado;
        this.edad = edadIngresado;
        this.genero = generoIngresado;
        
    }
     CargarEdad(nuevaEdad:number):void{
        this.edad=nuevaEdad;
        } 

     modificarNombre(respuesta:string):string {
         if (respuesta =="si")
            this.nombre = readlineSync.question("Ingrese su nuevo nombre: ");
         else {}
         return this.nombre;
     }
        
}

class Automovil{
    private marca : string;
    private modelo : number;
    private gama: string;
    private cantidadActual: number;
    private encendido: boolean;

    constructor (pMarca: string, pModelo:number, pGama:string, pCantidadActual: number){
        this.marca = pMarca;
        this.modelo = pModelo;
        this.gama = pGama;
        this.cantidadActual = pCantidadActual;
        
    }
    
    cargarCantidad():void{
       this.cantidadActual = readlineSync.question("Ingrese cantidad de automoviles: ");
           
    }

    venderAutomovil(cantidad:number):void{
        this.cantidadActual = this.cantidadActual - cantidad;
        
    }
    encenderApagar():void{
        if (this.encendido)
        this.encendido = false;
    else
        this.encendido = true;
    }
}


let nuevoUsuario = new Usuario("Pedro",35,"hombre");
console.log(nuevoUsuario);
nuevoUsuario.modificarNombre(respuesta);
nuevoUsuario.CargarEdad(36);
console.log(nuevoUsuario);

let autoFord = new Automovil ("Ford",2022,"alta",33);
autoFord.cargarCantidad();
console.log(autoFord);

autoFord.venderAutomovil(1);
console.log(autoFord);

