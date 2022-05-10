import { CardsProps } from "../../models/types/CardsProps";
import { CardBase,Icon,Text } from "./style";

const Cards = ({text,children}:CardsProps) => {
    return (
        <CardBase>
            <Icon>{children}</Icon>
            <Text>{text}</Text>

        </CardBase>
    );
}

export default Cards