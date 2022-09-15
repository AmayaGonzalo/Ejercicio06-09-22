let readlineSync = require('readline-sync');
let respuesta: string;


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

     modificarNombre():string {
        respuesta=  readlineSync.question("¿Quieres modificar su nombre? ");
         if (respuesta=="si")
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

    constructor (ingresoMarca: string, ingresoModelo:number,ingresoGama:string){
        this.marca = ingresoMarca;
        this.modelo = ingresoModelo;
        this.gama = ingresoGama;
        
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


let nuevoUsuario = new Usuario("Gonzalo",35,"hombre");
console.log(nuevoUsuario);
nuevoUsuario.modificarNombre();
nuevoUsuario.CargarEdad(36);
console.log(nuevoUsuario);

let autoFord = new Automovil ("Ford",2022,"alta");
autoFord.cargarCantidad();
console.log(autoFord);

autoFord.venderAutomovil(1);
console.log(autoFord);

