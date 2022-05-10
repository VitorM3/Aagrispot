import { IComponentBase } from "../../models/interface/componentBase";
import Footer from "../Footer";
import Header from "../Header";
import { Content, LayoutBaseStyle } from "./styles";

const Layout = ({children}:IComponentBase) => {
    return (
        <LayoutBaseStyle>
           <Header />
           <Content>
           {children}
           </Content>
           
           <Footer/>
        </LayoutBaseStyle>
    );

}

export default Layout