import { toast } from "react-toastify"
import { useMatrix } from "../../../../../../hooks/useMatrix"
import api from "../../../../../../services/apis/api"
import { ButtonCalcGeneral, ButtonCalcStyle } from "./styles"

const ButtonCalc = () => {
    const {matrixToCalculate,sinalToCalculate,setMatrixCalculate} = useMatrix()

    const handleClickAndCalculate = async () => {
        // Separar matrizes
        let matrixOne = matrixToCalculate.filter((matrix)=>matrix.key === 'M1')[0].matrix
        let matrixTwo = matrixToCalculate.filter((matrix)=>matrix.key === 'M2')[0].matrix

        // Realizar calculo entre as matrizes
        let newMatrix = await api.apiMatrix.matrix.post.calculate({matrixOne,matrixTwo,sinalOperation:sinalToCalculate})
        if(newMatrix === undefined){
            toast.warning('Algo ocorreu errado ao realizar o calculo')
            return
        }
        // Salvar dados no contexto
        setMatrixCalculate(newMatrix)
        toast.success('Matriz Calculada com sucesso')
    }
    return (
        <ButtonCalcGeneral>
            <ButtonCalcStyle onClick={()=>{handleClickAndCalculate()}}>Calcular</ButtonCalcStyle>
        </ButtonCalcGeneral>
    )
}

export default ButtonCalc
