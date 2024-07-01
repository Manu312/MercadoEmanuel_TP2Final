class Sondas{
    static sondas = [];
    constructor(){
        if (!Sondas.sondas) {
            Sondas.sondas = [];
        }
    };
    static async createSondas(sonda){
        this.sondas.push(sonda);
        return "create onda ok";
    };
    static async getAllSondas (){
        return this.sondas;
    }
    static async getSondasById(id){
        const result = this.sondas.filter(onda => onda.id === id);
        if (result.length > 0) {
            return result;
        } else {
            return `No se encontró ninguna sonda con el id: ${id}`;
        }
    }
    static async deleteAllSondas() {
        this.sondas=[];
        return "delete onda all ok";
    }
}
export default Sondas;