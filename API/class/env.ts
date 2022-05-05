import { TypeDefinition } from "../models/enum/typeDefinition"
import dotEnv from 'dotenv'
dotEnv.config()

class EnvironmentVariables {
    /**
     * Tipo de variaveis de ambiente e configurações especiais
     */
    public definition: TypeDefinition
    /**
     * Porta que a aplicação sera executada
     */
    public port:number
    /**
     * Classe central para definir variaveis de ambiente
     */
    constructor() {
        // Definir um tipo de variaveis de ambiente
        if (process.env.definition == "dev") {
            this.definition = TypeDefinition.Dev
        } else if (process.env.definition == "prod") {
            this.definition = TypeDefinition.Prod
        } else {
            this.definition = TypeDefinition.NotFound
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
 * Variaveis de ambiente do sistema
 */
export const environmentVariables = new EnvironmentVariables()