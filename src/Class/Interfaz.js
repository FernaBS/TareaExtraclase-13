import pr from 'prompt-sync';
import Proyecto from './Proyecto.js';

const prompt = pr({sigint: true});

export default class Interfaz {
    constructor(){
        this.proyects = [];
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
                this.addProyect();
                finish = false;
                break;
            case "2":
                this.updateDescription();
                finish = false;
                break;
            case "3":
                this.showProyects();
                finish = false;
                break;
            case "4":
                finish = true;
                break;
            default:
                console.log("Opción incorrecta");
                finish = false;
        }
        return finish;
    }
    
    addProyect(){
        let name = this.setName();
        let description = this.setDescription();
        let messageDate = 'Fecha de inicio';
        let startDate = this.setStartDate(messageDate);
        messageDate = 'Fecha de fin';
        let endDate = this.setEndDate(messageDate, startDate);
        this.proyects.push(new Proyecto(name, description, startDate, endDate));
    }

    showProyects(){
        this.proyects.forEach((proyect, index) => {
            console.log(`\nProyecto #${index+1}`);
            console.log(`Nombre: ${proyect.name}`);
            console.log(`Descripcion: ${proyect.description}`);
            console.log(`Fecha de inicio: ${proyect.startDate}`);
            console.log(`Fecha de fin: ${proyect.endDate}`);
        })
    }
    
    setName(){
        let name;
        let regex = /^[a-zA-Z\s]+$/;
        let end = false;
        do{
            name = prompt("Introduce nombre de proyecto: ");
            if(!regex.test(name))
                console.log('Nombre de proyecto incorrecto');
            else if(this.proyects.find(project => project.name.toLowerCase() === name.toLowerCase()))
                    console.log('Ya existe un proyecto con ese nombre.');
            else
                end = true;
        }while(!end)
        return name;
    }

    setDescription(){
        let description;
        do{
            description = prompt("Introduce descripcion de proyecto: ");
        }while(!description)
        return description;
    }

    setEndDate(message, startDate){
        let regexDate = /^([0-2][0-9]|3[0-1])(\/|-)(0[1-9]|1[0-2])\2(\d{4})$/;
        let date;
        let end = false;
        do{
            date = prompt(`${message} de proyecto, formato DD/MM/YYYY: `);
            if(!regexDate.test(date))
                console.log(`${message} incorrecta`);
            else {
                let arrayDate = date.split('/');
                let day = arrayDate[0];
                let month = arrayDate[1];
                let year = arrayDate[2];
                month = parseInt(month) - 1;
                date = new Date(year, month, day);
                if(date >= startDate)
                    end = true;
                else
                    console.log(`La ${message} de proyecto debe ser posterior a la fecha de inicio`);
            }
        }while(!end)
        return date;
    }

    setStartDate(message){
        let regexDate = /^([0-2][0-9]|3[0-1])(\/|-)(0[1-9]|1[0-2])\2(\d{4})$/;
        let date;
        let end = false;
        do{
            date = prompt(`${message} de proyecto, formato DD/MM/YYYY: `);
            if(!regexDate.test(date))
                console.log(`${message} incorrecta`);
            else {
                let arrayDate = date.split('/');
                let day = arrayDate[0];
                let month = arrayDate[1];
                let year = arrayDate[2];
                month = parseInt(month) - 1;
                date = new Date(year, month, day);
                end = true;
            }
        }while(!end)
        return date;
    }

    updateDescription(){
        console.log('\nNombre de proyectos: ');
        this.proyects.forEach((proyect, index) => {console.log(`${index + 1}- ${proyect.name}`);})
        let indexProyect;
        do{
            indexProyect = prompt('Selecciona proyecto a actualizar descripcion: ');
            if(indexProyect > this.proyects.length || indexProyect < 1)
                console.log('Número de proyecto erróneo')
            else
                this.proyects[indexProyect-1].description = this.setDescription(); 
        }while(indexProyect > this.proyects.length || indexProyect < 1)
    }

}