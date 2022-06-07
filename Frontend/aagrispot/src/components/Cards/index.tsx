import { CardsProps } from "../../models/types/CardsProps";
import { CardBase } from "./style";

const Cards = ({children}:CardsProps) => {
    return (
        <CardBase>
            {children}
        </CardBase>
    );
}

export default Cards