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
background-color:var(--ten);
color:var(--detail);
font-weight:600;
border-radius:0.3rem;
transition:0.2s;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
font-weight:600;
cursor: pointer;
svg{
    path{
        fill:var(--detail)
}
    }
    

&:hover{
    border:0.1rem solid var(--detail);
    box-shadow:none;
    filter:saturate(200%);
}
`