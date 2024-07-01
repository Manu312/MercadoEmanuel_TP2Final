import Sonda from '../models/sondas.model.js';

class SondasService{
    static createSondaService = async (sonda) => {
        try{
            if(sonda.temperatura>100 || sonda.temperatura<-20) throw new Error("datos no válidos, Temperatura no válida Rango valido -20 a 100");
            if(sonda.id>5 || sonda.id<1) throw new Error("datos no válidos, id permitidos de 1 a 5");
            return await Sonda.createSondas(sonda);
        }catch(error){
            throw new Error("Error al crear una sonda: "+error.message);
        }
    };
    static getAllSondas = async () => {
        try{
            return await Sonda.getAllSondas();
        }catch(error){
            throw new Error("Error al obtener las sondas: "+error.message);
        }
    };
    static getSondasById = async (id) => {
        try{
            if(id>5 || id<1) throw new Error("datos no válidos, id permitidos de 1 a 5");
            return await Sonda.getSondasById(id);
        }catch(error){
            throw new Error("Error al obtener las sondas: "+error.message);
        }
    };
    static deleteAllSondas = async () => {
        try{
            return await Sonda.deleteAllSondas();
        }catch(error){
            throw new Error("Error al eliminar las sondas: "+error.message);
        }
    };
    static mostrarSonda = async (sonda) =>{
        try{
            return "Sonda: "+sonda.id+" Temperatura: "+sonda.temperatura+"° \n";
        }catch(error){
            throw new Error("Error al mostrar la sonda: "+error.message);
        }
    }
}

export default SondasService;