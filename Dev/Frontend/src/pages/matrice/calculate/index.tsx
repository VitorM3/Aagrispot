
import ButtonReturnPage from "../../../components/ButtonReturnPage"
import Calc from "../../../components/pages/matrice/calculate/Calc"
import SecondaryHeader from "../../../components/SecondaryHeader"

const CalculateMatrix = () => {
    return (
        <>
            <ButtonReturnPage />
            <SecondaryHeader title="Calcular matrizes" lineSize="20%" />
            <Calc />
        </>
    )
}
export default CalculateMatrix