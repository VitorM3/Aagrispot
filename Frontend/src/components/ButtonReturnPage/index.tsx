import { ArrowLeft } from "../Images/@icons";
import { Button, ButtonReturnPageGeneral } from "./style";

const ButtonReturnPage = () => {
    return (
        <ButtonReturnPageGeneral>
            <Button onClick={()=>{window.history.back()}}><ArrowLeft/> Voltar</Button>
        </ButtonReturnPageGeneral>
        
    );
}

export default ButtonReturnPage