import SondaService from "../services/sondas.service.js";
class SondasController {
    
    static createSondas = async (req, res) => {
        try{
            const sonda = req.body;
            if(!sonda || !sonda.id || !sonda.temperatura) throw new Error("No se encontró ninguna sonda debe tener datos");
            sonda.id = parseInt(sonda.id);
            sonda.temperatura = parseFloat(sonda.temperatura);
            const newSonda = await SondaService.createSondaService(sonda);
            res.status(200).send(newSonda);
        }catch(error){
            res.status(500).send(error.message);
        }
    };
    static getAllSondas = async (req, res) => {
        try{
            const sondas = await SondaService.getAllSondas();
            res.status(200).send(sondas);
        }catch(error){
            res.status(500).send(error.message);
        }
    };
    static getSondasById = async (req, res) => {
        try{
            if(!req.params.id) throw new Error("No se encontró ninguna sonda debe tener datos");
            const id = parseInt(req.params.id);
            const sondas = await SondaService.getSondasById(id);
            res.status(200).send(sondas);
        }catch(error){
            res.status(500).send(error.message);
        }
    };
}

export default SondasController;