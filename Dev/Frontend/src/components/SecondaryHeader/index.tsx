import { SecondaryHeaderProps } from "../../models/types/SecondaryHeaderProps";
import { Line, SecondaryHeaderHomeGeneral, Title } from "./style";


const SecondaryHeader = ({title,lineSize}:SecondaryHeaderProps) => {
return(
    <SecondaryHeaderHomeGeneral>
        <Line lineSize={lineSize}/>
        <Title>{title}</Title>
        
    </SecondaryHeaderHomeGeneral>
);
}
export default SecondaryHeader