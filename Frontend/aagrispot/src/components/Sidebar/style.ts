import styled from "styled-components";


export const SidebarStyle = styled.div`
display:flex;
flex-direction:column;
height:100%;
width:3%;
position:fixed;
align-items:flex-start;
background-color:var(--detail);
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 
0px 4px 4px rgba(0, 0, 0, 0.25), 
0px 4px 4px rgba(0, 0, 0, 0.25), 
0px 4px 4px rgba(0, 0, 0, 0.25);
left:1px;
top:1px;
svg{
    path{
        fill:var(--ten);
    }
}

@media (max-width: 1024px) {
    width:4.6%;
}
`

export const ItemsSideBar = styled.div`
display:flex;
align-items:center;
justify-content:center;
width:100%;
height:100%;
`

export const Navigation = styled.div`
display:flex;
align-items:center;
justify-content:space-between;
flex-direction:column;
height:30%;

svg{
    width:60%;
    path{
        fill:var(--thirty);
        cursor: pointer;

        &:hover{
            fill:var(--ten); 
        }
    }
}

.selected{
        path{
            fill:var(--ten)

        } 
}
`