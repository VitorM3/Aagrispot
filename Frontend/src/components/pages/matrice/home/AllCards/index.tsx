import Cards from "../../../../Cards";
import { AddCircle, Calculate } from "../../../../Images/@icons";
import { AllCardsBase } from "./style";


const AllCards = () => {
    return (
        <AllCardsBase>
            <Cards text="Criar Matrizes"><AddCircle/></Cards>
            <Cards text="Calcular Matrizes"><Calculate/></Cards>
        </AllCardsBase>
    );
}

export default AllCards