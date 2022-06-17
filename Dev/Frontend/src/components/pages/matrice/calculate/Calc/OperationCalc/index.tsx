import { useEffect, useState } from "react"
import { useMatrix } from "../../../../../../hooks/useMatrix"
import { ArrowLeft } from "../../../../../Images/@icons"
import { ChangeSinal, Operation, OperationCalcGeneral, Sinal } from "./style"

const OperationCalc = () => {
    const [sinal, setSinal] = useState('+')
    const {setSinalToCalculate} = useMatrix()

    /**
     * Alterar sinal do calculo entre matrizes
     * @param change Situação de mudança
     */
    const handleChangeSinal = (change: string) => {
        if (change === 'right') {
            switch (sinal) {
                case '+':
                    setSinal('*')
                    break;
                case '*':
                    setSinal('-')
                    break;
                case '-':
                    setSinal('+')
                    break;
                default:
                    break;
            }
        } else {
            switch (sinal) {
                case '+':
                    setSinal('-')
                    break;
                    break;
                case '-':
                    setSinal('*')
                    break;
                case '*':
                    setSinal('+')
                    break;
                default:
                    break;
            }
        }
    }

    useEffect(()=>{
        setSinalToCalculate(sinal)
    },[sinal])

    return (
        <OperationCalcGeneral>
            <Operation>
                <ChangeSinal onClick={()=>handleChangeSinal('left')}>
                    <ArrowLeft />
                </ChangeSinal>
                <Sinal>
                    <h1>{sinal}</h1>
                </Sinal>
                <ChangeSinal itsEnd onClick={()=>handleChangeSinal('right')}>
                    <ArrowLeft />
                </ChangeSinal>
            </Operation>
        </OperationCalcGeneral>
    )
}

export default OperationCalc