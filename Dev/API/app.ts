// Importações
import  Express  from "express";
import { environmentVariables } from "./class/env";
import morgan from 'morgan'
import { matrix } from "./routes/@routes";
import cors from 'cors'

// Configurações
/**
 * Variável central do Express
 */
export const app = Express()
// Configuração base para receber dados do frontEnd
Express.urlencoded({extended:false})
app.use(Express.json())

// Configuração para melhor visualização do console -> Dev
if(environmentVariables.definition == "dev"){
    app.use(morgan("dev"))
}else{app.use(morgan("common"))}

// Configuração do cors
app.use(cors())

// Rotas
app.use('/matrix',matrix)

// Iniciar servidor
app.listen(environmentVariables.port,()=>{
    if(environmentVariables.definition == 'notFound'){
        console.log('Tipo de variáveis de sistema não definido')
    }
    console.log(`Servidor iniciado na porta => ${environmentVariables.port}`)
})