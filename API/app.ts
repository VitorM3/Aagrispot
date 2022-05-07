// Importações
import  Express  from "express";
import { environmentVariables } from "./class/env";
import morgan from 'morgan'
import { matrice } from "./routes/@routes";

// Configurações
/**
 * Variavel central do Express
 */
export const app = Express()
// Configuração base para receber dados do frontEnd
Express.urlencoded({extended:false})
app.use(Express.json())

// Configuração para melhor visualização do console -> Dev
if(environmentVariables.definition == "dev"){
    app.use(morgan("dev"))
}else{app.use(morgan("common"))}

// Rotas
app.use('/matrice',matrice)

// Iniciar servidor

app.listen(environmentVariables.port,()=>{
    if(environmentVariables.definition == 'notFound'){
        console.log('Tipo de variaveis de sistema não definido')
    }
    console.log(`Servidor iniciado na porta => ${environmentVariables.port}`)
})