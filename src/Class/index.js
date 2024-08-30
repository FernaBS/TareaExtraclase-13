import Proyecto from "./Proyecto";
const submitBtn = document.querySelector("#submit");
const nameInput = document.querySelector("#text-input");
const startInput = document.querySelector("#start-input");
const endInput = document.querySelector("#end-input");
const descriptionInput = document.querySelector("#description-input");

//Recuperación de los datos desde el localStorage
const localData = localStorage.getItem("projects");
let projects = localData ? JSON.parse(localData) : [];

const createProyect = () => {
  let name = nameInput.value;
  let start = startInput.value;
  let end = endInput.value;
  let description = descriptionInput.value;
  if (name && start && end && description) {
    if (start < end) {
      projects.push(new Proyecto(name, description, start, end));
      saveLocalStorage(projects)
        .then((message) => console.log(message))
        .catch((error) => console.error(error));
    } else alert("La fecha inicial no puede ser mayor que la final");
  } else alert("Asegurese que todos los campos esten llenos");
};

//Función que se encarga de guardar la informacion en el localStorage
function saveLocalStorage(array) {
  return new Promise((resolve, reject) => {
    try {
      localStorage.setItem("projects", JSON.stringify(array));
      resolve("Datos almacenados correctamente");
    } catch (e) {
      reject("Error al guardar los datos");
    }
  });
}

const initTable = (projects) => {
  const table = document.querySelector(".project-table");

  projects.forEach((proyect) => {
    const row = document.createElement("tr");

    row.innerHTML = `<td>${proyect.name}</td>
        <td>${proyect.startDate}</td>
        <td>${proyect.endDate}</td>
        <td>${proyect.description}</td>`;

    table.querySelector("tbody").appendChild(row);
  });
};

initTable(projects);

var fechaElemento = document.querySelectorAll(".fecha h5");
var elemento = document.querySelectorAll(".concluido");
fechaElemento.forEach(function (element, index) {
  var fechaTexto = element.textContent.trim();

  // Convertir la fecha de texto a un objeto Date
  var fechaElementoDate = new Date(fechaTexto);
  // Obtener la fecha actual
  var fechaActual = new Date();

  // Comparar las fechas
  if (fechaElementoDate > fechaActual) {
  } else if (fechaElementoDate < fechaActual) {
    if (elemento) {
      // Cambiar el estilo 'display' a 'block'
      if (elemento[index] !== undefined) {
        elemento[index].style.display = "block";
      }
    }
  } else {
  }
});

let titleAutor = document.querySelectorAll(".title-autor p");
let listAutor = document.querySelectorAll(".list-Autor");

listAutor.forEach((element, index) => {
  if (element.innerHTML.trim() === "") titleAutor[index].style.display = "none";
});
