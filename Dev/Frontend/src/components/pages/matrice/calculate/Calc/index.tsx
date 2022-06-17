import { useEffect, useLayoutEffect } from "react"
import { useMatrix } from "../../../../../hooks/useMatrix"
import Matrix from "../../../../Matrix"
import ButtonRestart from "./ButtonResetCalc"
import ButtonCalc from "./ButtonCalc"
import OperationCalc from "./OperationCalc"
import { CalcGeneral } from "./styled"


const Calc = () => {
    const { setMatrixCalculate, matrixCalculate } = useMatrix()

    useEffect(() => {
        setMatrixCalculate([])
    }, [])

    return (
        <CalcGeneral>
            {matrixCalculate.length === 0 ?
                <>
                    <Matrix reference="M1" />
                    <OperationCalc />
                    <Matrix reference="M2" />
                    <ButtonCalc />
                </>
                : <>
                    <Matrix reference="MCC1" itsResult matrixResult={matrixCalculate} />
                    <ButtonRestart/>
                </>

            }

        </CalcGeneral>
    )
}

export default Calc