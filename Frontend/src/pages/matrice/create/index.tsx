import { useEffect } from "react";
import { useSecondaryHeader } from "../../../hooks/useSecondaryHeader";

const CreateMatrice = () => {
    const {handleChangeTitle} = useSecondaryHeader()
    
    useEffect(()=>{
        handleChangeTitle('Criar Matrizes')
    },[])

    return (
        <h1>Oie</h1>
    );
}

export default CreateMatrice