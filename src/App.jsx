import './App.css'
import Form from './components/Form'

function App() {

  return (
    <div className='container'>
      <div className='left-container'>
        <Form/>
      </div>
      <div className='right-container'>
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
        </tbody>
    </table>
      </div>
    </div>
  )
}

export default App
