import { ArrowLeft } from "../Images/@icons";
import { Button, ButtonReturnPageGeneral } from "./style";
import { useNavigate } from "react-router-dom";

const ButtonReturnPage = () => {
    const navigate = useNavigate()
    return (
        <ButtonReturnPageGeneral>
            <Button onClick={()=>{navigate(-1)}}><ArrowLeft/> Voltar</Button>
        </ButtonReturnPageGeneral>
        
    );
}

export default ButtonReturnPage