import { useEffect } from "react";
import { useSecondaryHeader } from "../../hooks/useSecondaryHeader";
import { IComponentBase } from "../../models/interface/componentBase";
import ButtonReturnPage from "../ButtonReturnPage";
import Footer from "../Footer";
import Header from "../Header";
import SecondaryHeader from "../SecondaryHeader";
import Sidebar from "../Sidebar";
import { Content, LayoutBaseStyle } from "./styles";

const Layout = ({children}:IComponentBase) => {
    return (
        <LayoutBaseStyle>
           <Header />
           <Sidebar/>
           <Content>
           {children}
           <Footer/>
           </Content>
           
           
        </LayoutBaseStyle>
    );

}

export default Layout