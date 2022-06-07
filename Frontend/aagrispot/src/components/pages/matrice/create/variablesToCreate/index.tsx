import { useState } from "react";
import { toast } from "react-toastify";
import { useMatrix } from "../../../../../hooks/useMatrix";
import { IBodyRouteCreate } from "../../../../../models/interface/routesApi/apiMatrix/matrix/post/create";
import api from "../../../../../services/apis/api";
import { ButtonCalc, Calc, DivColumnAndLine, InputCalc, InputOrder, Order, Variables, VariablesToCreateMatrixGeneral } from "./styled";

const VariablesToCreateMatrix = () => {
    const [numLines,setNumLines] = useState<number>(-42)
    const [numColumn,setNumColumn] = useState<number>(-42)
    const [calc,setCalc] = useState<string>('')
    const {setMatrixCreated} = useMatrix()
    /**
     * Verificar se todos os campos foram preenchidos
     * @returns 
     */
    const verifyIfAllCamps = () => {
    // Verificar se todos os campos foram preenchidos
        if(numLines < 0) {toast.error('Valor passado no número de linhas é invalido'); return}
        if(numColumn <0) {toast.error('Valor passado no número de colunas é invalido'); return}
        if(calc == '') {toast.error('Calculo invalido'); return}
        return true
    }
    /**
     * Limpar campos dos inputs
     */
    const resetAllVariables = () => {
        setNumLines(-42)
        setNumColumn(-42)
        setCalc('')
    }
    /**
     * Lidar com a ação de clique do botão para criar uma nova matriz
     * @param variables Variáveis para criar uma nova matriz
     */
    const handleClickInCalculate = async (variables:IBodyRouteCreate) => {
        // Verificar se todos os campos foram preenchidos
        if(!verifyIfAllCamps()){toast.error('Ocorreu um erro ao criar uma matriz'); return}
        // Criar nova matriz
       let newMatrix = await api.apiMatrix.matrix.post.create(variables)
        // Limpar Inputs
       resetAllVariables()
       // Verificar se os dados se houve algum tipo de erro na API
       if(newMatrix === undefined){toast.warning('Ocorreu um erro ao criar um nova matriz'); return}
       // Salvar Dados no contexto
       setMatrixCreated(newMatrix)
       toast.success('Matriz criada com sucesso')
    }
    return (
        <VariablesToCreateMatrixGeneral>
            <Variables>
                <Order>
                    <h3>a</h3>
                    <DivColumnAndLine>

                    <label htmlFor="i">i</label>
                    <InputOrder type={`number`} placeholder='Linha' id="i" 
                    onChange={(e)=>{setNumLines(parseInt(e.target.value))}}
                    value={numLines === -42 ? '' : numLines}/>

                    </DivColumnAndLine>
                    <DivColumnAndLine>

                    <label htmlFor="j">j</label>
                    <InputOrder type={`number`} placeholder='Coluna' id="j"
                    onChange={(e)=>{setNumColumn(parseInt(e.target.value))}}
                    value={numColumn === -42 ? '' : numColumn}/>

                    </DivColumnAndLine>
                </Order>
                <Calc>
                <h3>aij</h3>
                <InputCalc placeholder="Expressão para capturar valores"
                onChange={(e)=>{setCalc(e.target.value)}} 
                value={calc}/>
                </Calc>
                <ButtonCalc onClick={()=>{handleClickInCalculate({calc,numColumn,numLines})}}>Calcular</ButtonCalc>
            </Variables>
        </VariablesToCreateMatrixGeneral>
    );
}


export default VariablesToCreateMatrix