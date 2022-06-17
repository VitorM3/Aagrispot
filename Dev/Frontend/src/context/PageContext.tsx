import { createContext, useEffect, useState } from "react";
import { PageEnum } from "../models/enum/pageEnum";
import { IPageContext } from "../models/interface/context/pageContext";
import { ThemeProps } from "../models/types/ThemeProps";

export const PageContext = createContext<IPageContext | null>(null)

const PageContextProvider = ({children}:ThemeProps) => {
    const [page,setPage] = useState<PageEnum>()



    /**
     * Alterar pagina
     */
    const handleChangePage = (to?:string) => {
        switch(to){
            case 'http://localhost:3000/':
                setPage(PageEnum.Home)
                break;
            case 'http://localhost:3000/matrix/create':
                setPage(PageEnum.Create)
                break;
            case 'http://localhost:3000/matrix/calculate':
                setPage(PageEnum.Calculate)
                break;
        }
    }



    return(
            <PageContext.Provider value={{
                page,
                handleChangePage,
            }}>
                {children}
            </PageContext.Provider>

    );
}
export default PageContextProvider