import { AddCircle, Calculate, Home, Logo } from "../Images/@icons";
import { ItemsSideBar, Navigation, SidebarStyle } from "./style";
import { useNavigate } from "react-router-dom";
import { usePage } from "../../hooks/usePage";
import { useEffect, useState } from "react";
const Sidebar = () =>{
    // Verificar qual pagina o usuário está
    const {page,handleChangePage} = usePage()
    const navigate = useNavigate()
    const [pageView,setPageView] = useState('')
    const [url,setUrl] = useState('')

    // Verificar a mudança na URL
        useEffect(()=>{
            setUrl(window.location.href)
        },[window.location.href])
    
    // Verificiar Mudança no State da URL
        useEffect(()=>{
            // Retirar URL e deixar apenas o caminho
            let to = url.replace('http//localhost:3000','')
            handleChangePage(to)
        },[url])



        
    
    /**
     * Redirecionar os usuários de acordo com seu clique na sideBar
     * @param to Local para onde o usuário clicou
     */
    const redirect = (to:string) => {
        handleChangePage(`http//localhost:3000${to}`)
        switch (to) {
            case '/':
                setPageView('home')
                break;
            case '/matrix/create':
                setPageView('create')
                break;
            case '/matrix/calculate':
                setPageView('calculate')
                break;
        
            default:
                break;
        }
        navigate(to)
    }
    return(
        <SidebarStyle>
            <Logo />
            <ItemsSideBar>
                <Navigation>
                    <AddCircle className={page === 'create'? 'selected':''}
                    onClick={()=>{redirect('/matrix/create')}}
                    />
                    <Home className={page === 'home'? 'selected':''}
                    onClick={()=>{redirect('/')}}
                    />
                    <Calculate className={page === 'calculate'? 'selected':''}
                    onClick={()=>{redirect('/matrix/calculate')}}
                    />
                </Navigation>
            </ItemsSideBar>
        </SidebarStyle>
    )
} 



export default Sidebar