import axios, { AxiosInstance } from "axios"

class ApiAbstract {
    private host:string
    private port?:number
    protected api:AxiosInstance
    /**
     * Função abstraída para realizar conexão com a respectiva
     * @param host 
     * @param port 
     */
    constructor(host:string,port?:number){
        this.host = host
        this.port = port
        // Verificar se a porta foi inserida
        let atualPort = ''
        if(this.port != undefined) atualPort = `:${this.port}`
        this.api = axios.create({baseURL:`${this.host}${atualPort}`})
    }
}

export default ApiAbstract