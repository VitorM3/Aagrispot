import { useEffect } from "react";
import AllCards from "../../../components/pages/matrice/home/AllCards";
import { useSecondaryHeader } from "../../../hooks/useSecondaryHeader";

const HomeMatrice = () => {
    const {handleChangeTitle} = useSecondaryHeader()
    useEffect(()=>{
        handleChangeTitle('Seja Bem Vindo, O que faremos hoje')
    },[])
    
    return (
        <>
        <AllCards/>
        </>
        
    );
}

export default HomeMatrice