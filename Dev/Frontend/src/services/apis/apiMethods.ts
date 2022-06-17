import { AxiosInstance } from "axios"
import { toast } from "react-toastify"
class ApiMethods{
    protected api:AxiosInstance
    /**
     * Rotas Post do grupo de rotas Matrix
     * @param apiMatrix Api das Matrizes
     */
    constructor(apiMatrix:AxiosInstance){
        this.api = apiMatrix
    }

    protected async errorResponse(error:any){
        // Verificar status do erro
        if(error.response.status === 500){
            toast.error('Ocorreu um erro com nossos servidores')
        }
    }

}

export default ApiMethods