import { useEffect, useState } from 'react'
import './App.css'
import Form from './components/Form'
import Table from './components/Table'

function App() {
  const [projects, setProjects] = useState([]);
  
  useEffect(() => {
    const localData = localStorage.getItem('projects');
    if(localData){
      setProjects(JSON.parse(localData));
    }
  }, [])

  const addProject = (array) => {
    return new Promise((resolve, reject) => {
      try {
        localStorage.setItem("projects", JSON.stringify(array));
        setProjects(array);
        resolve("Datos almacenados correctamente");
      } catch (e) {
        reject("Error al guardar los datos");
      }
    });
  }

  return (
    <div className='container'>
      <div className='left-container'>
        <Form projects={projects} addProject={addProject} />
      </div>
      <div className='right-container'>
        <Table projects={projects} />
      </div>
    </div>
  )
}

export default App
