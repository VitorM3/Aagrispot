import { useEffect } from "react";
import { useSecondaryHeader } from "../../../hooks/useSecondaryHeader";
import { useNavigate } from "react-router-dom";
import ButtonReturnPage from "../../../components/ButtonReturnPage";
import SecondaryHeader from "../../../components/SecondaryHeader";
import VariablesToCreateMatrix from "../../../components/pages/matrice/create/variablesToCreate";
import MatrixCreate from "../../../components/pages/matrice/create/matrixCreate";
import { useMatrix } from "../../../hooks/useMatrix";

const CreateMatrix = () => {
    const {handleChangeTitle} = useSecondaryHeader()
    const  navigate = useNavigate()
    const {setMatrixCreated} = useMatrix()
    
    useEffect(()=>{
        handleChangeTitle('Criar Matrizes')
        setMatrixCreated([])
    },[])

    return (
        <>
        <ButtonReturnPage/>
        <SecondaryHeader title="Criar Matrizes" lineSize="20%"/>
        <VariablesToCreateMatrix/>
        <MatrixCreate/>
        </>
        
    );
}

export default CreateMatrix