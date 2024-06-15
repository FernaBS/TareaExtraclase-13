import pr from 'prompt-sync';
import Proyecto from './Proyecto.js';

const prompt = pr({sigint: true});

export default class Interfaz {
    constructor(){
        this.proyectos = new Set();
    }
    
    menu(){
        let finish = false;
        while(finish === false){
            this.opcionsMenu();
            let opcion = prompt("Introduce una opcion: ");
            finish = this.opcionSelected(opcion); 
        }
    }

    opcionsMenu(){
        console.log("Gestión de Proyectos\n");
        console.log("1. Añadir proyectos");
        console.log("2. Actualizar descripción de proyecto");
        console.log("3. Mostrar proyectos");
        console.log("4. Salir");
    }

    opcionSelected(opcion){
        let finish = null;
        switch(opcion){
            case "1": 
            {   
                let nombre = this.setNombre();
                let descripcion = this.setDescripcion();
                this.proyectos.add(new Proyecto(nombre, descripcion));
                finish = false;
                break;
            }
            case "2":
            {

                break;
            }
            case "3":
            {
                let array = Array.from(this.proyectos);
                array.forEach(element => {console.log(element);})
                break;
            }
            case "4":
            {
                finish = true;
                break;
            }
            

        }
        return finish;
    }
    
    setNombre(){
        let nombre;
        do{
            nombre = prompt("Introduce nombre de proyecto: ");
        }while(!nombre)
        return nombre;
    }

    setDescripcion(){
        let descripcion;
        do{
            descripcion = prompt("Introduce descripcion de proyecto: ");
        }while(!descripcion)
        return descripcion;
    }

}