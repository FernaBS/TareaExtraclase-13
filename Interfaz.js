import pr from 'prompt-sync';
import Proyecto from './Proyecto.js';

const prompt = pr({sigint: true});

export default class Interfaz {
    constructor(){
        this.proyects = new Set();
    }
    
    menu(){
        let finish = false;
        while(finish !== true){
            this.opcionsMenu();
            let opcion = prompt("Introduce una opcion: ");
            finish = this.opcionSelected(opcion); 
        }
    }

    opcionsMenu(){
        console.log("\nGestión de Proyectos\n");
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
                let name = this.setName();
                let description = this.setDescription();
                let messageDate = 'Fecha de inicio';
                let startDate = this.validateDate(messageDate);
                startDate = this.setDate(startDate);
                messageDate = 'Fecha de fin';
                let endDate = this.validateDate(messageDate);
                endDate = this.setDate(endDate);
                this.proyects.add(new Proyecto(name, description, startDate, endDate));
                finish = false;
                break;
            }
            case "2":
            {
                this.updateDescription();
                finish = false;
                break;
            }
            case "3":
            {
                let arrayProyects = Array.from(this.proyects);
                arrayProyects.forEach((proyect, index) => {
                    console.log(`\nProyecto #${index+1}`);
                    console.log(`Nombre: ${proyect.name}`);
                    console.log(`Descripcion: ${proyect.description}`);
                    console.log(`Fecha de inicio: ${proyect.startDate}`);
                    console.log(`Fecha de fin: ${proyect.endDate}`);
                })
                finish = false;
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
    
    setName(){
        let name;
        let regex = /^[a-zA-Z\s]+$/;
        do{
            name = prompt("Introduce nombre de proyecto: ");
            if(!regex.test(name))
                console.log('Nombre de proyecto incorrecto');
        }while(!regex.test(name))
        return name;
    }

    setDescription(){
        let description;
        do{
            description = prompt("Introduce descripcion de proyecto: ");
        }while(!description)
        return description;
    }

    validateDate(message){
        let regexDate = /^([0-2][0-9]|3[0-1])(\/|-)(0[1-9]|1[0-2])\2(\d{4})$/;
        let date;
        do{
            date = prompt(`${message} de proyecto, formato DD/MM/YYYY: `);
            if(!regexDate.test(date))
                console.log(`${message} incorrecta`);
        }while(!regexDate.test(date))
        return date;
    }

    setDate(date){
        let arrayDate = date.split('/');
        let day = arrayDate[0];
        let month = arrayDate[1];
        let year = arrayDate[2];
        month = parseInt(month) - 1;
        let oficialDate = new Date(year, month, day);
        return oficialDate;
    }

    updateDescription(){
        console.log('\nNombre de proyectos: ');
        let arrayProyects = Array.from(this.proyects);
        arrayProyects.forEach((proyect, index) => {console.log(`${index + 1}- ${proyect.name}`);})
        let indexProyect;
        do{
            indexProyect = prompt('Selecciona proyecto a actualizar descripcion: ');
            if(indexProyect > arrayProyects.length || indexProyect < 1)
                console.log('Número de proyecto erróneo')
            else
                arrayProyects[indexProyect-1].description = this.setDescription(); 
        }while(indexProyect > arrayProyects.length || indexProyect < 1)
    }

}