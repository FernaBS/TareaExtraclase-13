import Proyecto from "./Proyecto.js";
const submitBtn = document.querySelector('#submit');
const nameInput = document.querySelector('#text-input');
const startInput = document.querySelector('#start-input');
const endInput = document.querySelector('#end-input');
const descriptionInput = document.querySelector('#description-input');

//Recuperación de los datos desde el localStorage
const localData = localStorage.getItem('projects');
let projects = localData ? JSON.parse(localData) : [];

submitBtn.addEventListener('click', (e) => {
    let name = nameInput.value;
    let start = startInput.value;
    let end = endInput.value;
    let description = descriptionInput.value;
    if(name && start && end && description){
        if(start < end){
            projects.push(new Proyecto(name, description, start, end));
            saveLocalStorage(projects);
        }
        else alert('La fecha inicial no puede ser mayor que la final');
    }
    else alert('Asegurese que todos los campos esten llenos');
});

//Función que se encarga de guardar la informacion en el localStorage
function saveLocalStorage(array){
    localStorage.setItem('projects', JSON.stringify(projects));
}

console.log(projects);
