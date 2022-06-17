import ApiAbstract from "../apiAbstract";
import MatrixRoutes from "./routes/matrix/matrix";

class ApiMatrix extends ApiAbstract {
    public matrix: MatrixRoutes
    /**
     * Classe para as chamadas da Api de Matrizes
     * @param host Host da API
     * @param port Porta da API
     */
    constructor(host:string,port:number){
        super(host,port)
        
        // Rotas da API
        this.matrix = new MatrixRoutes(this.api)
    }

}

export default ApiMatrix