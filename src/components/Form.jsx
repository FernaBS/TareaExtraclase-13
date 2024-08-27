
const Form = () => {
  return (
    <>
        <form action="" className="form-project">
            <label htmlFor="name">Nombre del Proyecto</label>
            <input type="text" name="name" id="text-input"/>
            <label htmlFor="startDate">Fecha de Inicio</label>
            <input type="date" name="startDate" id="start-input"/>
            <label htmlFor="endDate">Fecha Final</label>
            <input type="date" name="endDate" id="end-input"/>
            <label htmlFor="description">Descripcion del Proyecto</label>
            <textarea name="description" id="description-input" className="text-form"></textarea>
            <button type="submit" className="submit-button" id="submit">Crear Proyecto</button>
        </form>
   </>
  )
}

export default Form