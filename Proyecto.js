import Entidad from "./Entidad.js";

export default class Proyecto extends Entidad{
    constructor(name, description, startDate, endDate){
        super(name, description);
        this.startDate = startDate;
        this.endDate = endDate;
    }

}