import { CardsProps } from "../../models/types/CardsProps";
import { CardBase,Icon,Text } from "./style";

const Cards = ({text,children,click}:CardsProps) => {
    return (
        <CardBase onClick={()=>click()}>
            <Icon>{children}</Icon>
            <Text>{text}</Text>

        </CardBase>
    );
}

export default Cards