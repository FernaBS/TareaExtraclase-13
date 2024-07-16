import Proyecto from "./Proyecto";
const submitBtn = document.querySelector('#submit');
const nameInput = document.querySelector('#text-input');
const startInput = document.querySelector('#start-input');
const endInput = document.querySelector('#end-input');
const descriptionInput = document.querySelector('#description-input');
let projects = [];

submitBtn.addEventListener('click', (e) => {
    let name = nameInput.value;
    let start = startInput.value;
    let end = endInput.value;
    let description = descriptionInput.value;
    projects.push(new Proyecto(name, description, start, end));
})

console.log(projects);

