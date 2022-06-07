import { AxiosInstance } from "axios"
import { IMatrix } from "../../../../../../models/interface/routesApi/apiMatrix/matrix"
import { IBodyRouteCreate } from "../../../../../../models/interface/routesApi/apiMatrix/matrix/post/create"
import ApiMethods from "../../../../apiMethods"

class PostMatrixRoutes extends ApiMethods{
    private baseUrl:string
    /**
     * Rotas Post do grupo de rotas Matrix
     * @param apiMatrix Api das Matrizes
     */
    constructor(apiMatrix:AxiosInstance,baseUrl:string){
        super(apiMatrix)
        this.baseUrl = baseUrl
    }
    /**
     * Rota para a criação de novas matrizes
     * @param body Dados para a criação das matrizes
     * @returns Nova Matriz
     */
    async create(body:IBodyRouteCreate):Promise<IMatrix[] | undefined>{
        try {
            const responseCreate = await this.api.post(`${this.baseUrl}/create`,body)
            return responseCreate.data
        } catch (error) {
            this.errorResponse(error)
        }
    }
}

export default PostMatrixRoutes