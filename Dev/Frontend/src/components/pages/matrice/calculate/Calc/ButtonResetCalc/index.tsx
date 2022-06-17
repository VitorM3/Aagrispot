
import { toast } from "react-toastify"
import { useMatrix } from "../../../../../../hooks/useMatrix"
import api from "../../../../../../services/apis/api"
import { ButtonCalcGeneral, ButtonCalcStyle } from "./styles"

const ButtonRestart = () => {
    const {matrixToCalculate,sinalToCalculate,setMatrixCalculate} = useMatrix()

    const handleClickAndRestart = async () => {
        setMatrixCalculate([])
    }
    return (
        <ButtonCalcGeneral>
            <ButtonCalcStyle onClick={()=>{handleClickAndRestart()}}>Reiniciar</ButtonCalcStyle>
        </ButtonCalcGeneral>
    )
}

export default ButtonRestart