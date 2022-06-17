import { TypeDefinition } from "../models/enum/typeDefinition"
import dotEnv from 'dotenv'
dotEnv.config()

class EnvironmentVariables {
    /**
     * Tipo de variáveis de ambiente e configurações especiais
     */
    public definition: TypeDefinition
    /**
     * Porta que a aplicação sera executada
     */
    public port:number
    /**
     * Classe central para definir variáveis de ambiente
     */
    constructor() {
        // Definir um tipo de variáveis de ambiente
        if (process.env.definition == "dev") {
            this.definition = TypeDefinition.Dev
        } else {
            this.definition = TypeDefinition.Prod
        } 

        // Definir porta que a aplicação ira rodar
        if(process.env.port == '' || process.env.port == undefined){
            this.port = 5000
        }else{
            this.port = parseInt(process.env.port!)
        }
    }
}
/**
 * Variáveis de ambiente do sistema
 */
export const environmentVariables = new EnvironmentVariables()