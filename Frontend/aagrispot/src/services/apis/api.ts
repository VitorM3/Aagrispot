import ApiMatrix from "./apiMatrix/apiMatrix"

class Api {
    public apiMatrix: ApiMatrix
    /**
     * Classe para realizar a chamada das rotas das APIS
     */
    constructor(){
        this.apiMatrix = new ApiMatrix('http://localhost',5000)
    }
}
/**
 * Instancia para as chamadas de todas as APIS
 */
const api = new Api()
export default api