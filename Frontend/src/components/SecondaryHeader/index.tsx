import { SecondaryHeaderProps } from "../../models/types/SecondaryHeaderProps";
import { Line, SecondaryHeaderHomeGeneral, Title } from "./style";


const SecondaryHeader = ({title}:SecondaryHeaderProps) => {
return(
    <SecondaryHeaderHomeGeneral>
        <Line/>
        <Title>{title}</Title>
        
    </SecondaryHeaderHomeGeneral>
);
}
export default SecondaryHeader