import { useNavigate } from "react-router-dom";
import Cards from "../../../../Cards";
import { AddCircle, Calculate } from "../../../../Images/@icons";
import { AllCardsBase } from "./style";


const AllCards = () => {
    const navigate = useNavigate()

    /**
     * Função para redirecionar o usuário para a tela de criação de matrizes
     */
    const handleRedirectToCreateMatrice = () => {
        navigate('/matrice/create')
    }
    return (
        <AllCardsBase>
            <Cards text="Criar Matrizes" click={()=>handleRedirectToCreateMatrice()}><AddCircle/></Cards>
            {/* <Cards text="Calcular Matrizes"><Calculate/></Cards> */}
        </AllCardsBase>
    );
}

export default AllCards