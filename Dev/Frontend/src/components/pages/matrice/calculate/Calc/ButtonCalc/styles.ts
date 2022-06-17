import styled from "styled-components";

export const ButtonCalcGeneral = styled.article`
display:flex;
width:100%;
height:6%;
align-items:center;
justify-content:center;
`
export const ButtonCalcStyle = styled.button`
display:flex;
width:13%;
height:100%;
background-color:var(--ten);
border:none;
border-radius:0.5rem;
padding:1.7rem;
align-items:center;
justify-content:center;
font-size:1.3rem;
font-weight:bold;
color:var(--detail);
cursor: pointer;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25),
0px 4px 4px rgba(0, 0, 0, 0.25);

&:hover{
    box-shadow:none;
    filter:saturate(200%);
}
`