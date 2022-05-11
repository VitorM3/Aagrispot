import { useEffect } from "react";
import { useSecondaryHeader } from "../../hooks/useSecondaryHeader";
import { IComponentBase } from "../../models/interface/componentBase";
import ButtonReturnPage from "../ButtonReturnPage";
import Footer from "../Footer";
import Header from "../Header";
import SecondaryHeader from "../SecondaryHeader";
import { Content, LayoutBaseStyle } from "./styles";

const Layout = ({children}:IComponentBase) => {
    const {title} = useSecondaryHeader()
    return (
        <LayoutBaseStyle>
           <Header />
           {window.location.pathname != '/' ? <ButtonReturnPage/> : ''}
           <Content>
               <SecondaryHeader title={title}/>
           {children}
           </Content>
           
           <Footer/>
        </LayoutBaseStyle>
    );

}

export default Layout