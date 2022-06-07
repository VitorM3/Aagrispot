
import AllCards from "../../../components/pages/matrice/home/CardAll";
import NavPage from "../../../components/pages/matrice/home/NavPage";
import SecondaryHeader from "../../../components/SecondaryHeader";

const HomeMatrice = () => {
    return (
        <>
        <SecondaryHeader title="Seja bem vindo ao projeto Aagrispot" lineSize="40%"/>
        <NavPage/>
        <AllCards/>
        </>
        
    );
}

export default HomeMatrice