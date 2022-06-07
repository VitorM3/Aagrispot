import { AxiosInstance } from "axios";
import PostMatrixRoutes from "./methods/post";

class MatrixRoutes {
    private api: AxiosInstance
    private baseUrl:string
    public post: PostMatrixRoutes
    
    /**
     * Grupo de rotas das matrizes
     * @param apiMatrix Api das matrizes
     */
    constructor(apiMatrix:AxiosInstance){
        this.api = apiMatrix
        this.baseUrl = '/matrix'
        this.post = new PostMatrixRoutes(this.api,this.baseUrl)
    }
}

export default MatrixRoutes