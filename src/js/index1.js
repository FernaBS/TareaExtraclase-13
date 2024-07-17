import Proyecto from './Proyecto.js'

const projects = [
    {
        name: 'Por el futuro',
        startDate: '07/05/2024',
        endDate: '08/05/2024',
        description: 'No se nada'
    },
    {
        name: 'Alguacil',
        startDate: '10/05/2024',
        endDate: '10/05/2024',
        description: 'Ahora se menos'
    }
];

const initTable = (projects) => {
    const table = document.querySelector('.project-table');

    projects.forEach(proyect => {
        const row = document.createElement('tr');
       
        row.innerHTML = `<td>${proyect.name}</td>
        <td>${proyect.startDate}</td>
        <td>${proyect.endDate}</td>
        <td>${proyect.description}</td>`;

        table.querySelector('tbody').appendChild(row);
    });
}

initTable(projects);