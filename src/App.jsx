import './App.css'
import Form from './components/Form'
import Table from './components/Table'

function App() {

  return (
    <div className='container'>
      <div className='left-container'>
        <Form/>
      </div>
      <div className='right-container'>
        <Table/>
      </div>
    </div>
  )
}

export default App
