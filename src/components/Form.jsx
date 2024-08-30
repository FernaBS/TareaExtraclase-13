import Proyecto from "../Class/Proyecto"
import { useState, useEffect } from "react";

const Form = ({ projects, addProject }) => {
  const [name, setName] = useState('');
  const [start, setStart] = useState('');
  const [end, setEnd] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (name && start && end && description) {
      if (new Date(start) <= new Date(end)) {
        const newProject = new Proyecto(name, description, start, end);
        addProject([...projects, newProject])
          .then((message) => console.log(message))
          .catch((error) => console.error(error));
      } else alert("La fecha inicial no puede ser mayor que la final");
    } else alert("Asegurese que todos los campos esten llenos");
  };

  return (
    <form onSubmit={handleSubmit} className="form-project">
      <label htmlFor="name">Nombre del Proyecto</label>
      <input 
        type="text" 
        value={name} 
        onChange={(e) => setName(e.target.value)}
        name="name" 
        id="text-input"
      />
      <label htmlFor="startDate">Fecha de Inicio</label>
      <input 
        type="date" 
        value={start} 
        onChange={(e) => setStart(e.target.value)}
        name="startDate" 
        id="start-input"
      />
      <label htmlFor="endDate">Fecha Final</label>
      <input 
        type="date" 
        value={end} 
        onChange={(e) => setEnd(e.target.value)}
        name="endDate" 
        id="end-input"
      />
      <label htmlFor="description">Descripcion del Proyecto</label>
      <textarea 
        value={description} 
        onChange={(e) => setDescription(e.target.value)}
        name="description" 
        id="description-input" 
        className="text-form"
      ></textarea>
      <button type="submit" className="submit-button" id="submit">Crear Proyecto</button>
    </form>
  );
};

export default Form;