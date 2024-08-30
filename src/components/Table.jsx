import { useEffect, useState } from "react"; 

const Table = ({ projects }) => {

    return (
        <>
            <table className="project-table">
                <thead>
                    <tr>
                        <th>Nombre de Proyecto</th>
                        <th>Fecha Inicial</th>
                        <th>Fecha Final</th>
                        <th>Descripcion del Proyecto</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        projects.map((project, index) => (
                            <tr key={index}>
                                <td>{ project.name }</td>
                                <td>{ project.startDate }</td>
                                <td>{ project.endDate }</td>
                                <td>{ project.description }</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </>
    )
}

export default Table;