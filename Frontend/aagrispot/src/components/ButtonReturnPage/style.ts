import styled from "styled-components";

export const ButtonReturnPageGeneral = styled.div`
padding:1rem 0 0 1rem;
width:100%;
height:6%;
`
export const Button = styled.button`
display:flex;
justify-content:space-between;
align-items:center;
height:100%;
padding:1.5rem;
border:none;
background-color:var(--detail);
color:var(--ten);
font-weight:600;
border-radius:0.3rem;
transition:0.5s;

svg{
    path{
        fill:var(--ten)
}
    }
    

&:hover{
    background-color:var(--ten);
    color:var(--detail);

    svg{
        path{
            fill:var(--detail);
        }
    }
}
`