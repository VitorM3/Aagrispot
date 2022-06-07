import styled from "styled-components";

export const NavPageGeneral = styled.div`
display:flex;
justify-content:center;
align-items:center;
width:100%;
height:5%;
`
export const NavBar = styled.nav`
display:flex;
height:100%;
justify-content:space-between;
width:45%;
padding:0.3rem;
border-radius:10px;
background-color:var(--ten);

`
export const Item = styled.div`
display:flex;
justify-content:center;
align-items:center;
text-align:center;
width:100%;
height:100%;
border-radius:10px;
cursor: pointer;
p{
    color:var(--detail);
    font-weight:500;
    margin:0;
}
transition:0.2s;
&:hover{
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 
0px 4px 4px rgba(0, 0, 0, 0.25), 
0px 4px 4px rgba(0, 0, 0, 0.25), 
0px 4px 4px rgba(0, 0, 0, 0.25);

background-color:var(--detail);
p{
    color:var(--ten);
}

}


`