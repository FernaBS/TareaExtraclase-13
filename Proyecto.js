import Entidad from "./Entidad.js";

export default class ReservaBase extends Entidad{
    constructor(nombre, descripcion, fechaInicio, fechaFin){
        super(nombre, descripcion);
        this.fechaInicio = new Date();
        this.fechaFin = new Date();
    }

}