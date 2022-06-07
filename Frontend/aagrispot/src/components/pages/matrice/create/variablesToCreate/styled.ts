import styled from "styled-components";

export const VariablesToCreateMatrixGeneral = styled.section`
display:flex;
align-items:center;
justify-content:center;
width:100%;
height:7%;
`

export const Variables = styled.div`
display:flex;
justify-content:space-between;
width:80%;
height:100%;
`

export const Order = styled.article`
display:flex;
align-items:center;
gap:1rem;
width:40%;
height:100%;
h3{
    font-size:2rem;
    font-weight:bold;
}
`
export const Calc = styled.article`
display:flex;
align-items:center;
justify-content:center;
gap:1rem;
width:100%;
height:100%;
h3{
    font-size:2rem;
    font-weight:bold;
}
`
export const DivColumnAndLine = styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
width:40%;
height:91%;

label{
    font-weight:700;
    color:var(--thirty)
}
`
export const InputOrder = styled.input`
border:0.1rem solid var(--thirty);
width:100%;
height:100%;
border-radius:0.2rem;
text-align:center;
font-weight:600;
font-size:1.2rem;
background-color:var(--detail);
color:var(--thirty);
`
export const InputCalc = styled.input`
border:0.1rem solid var(--thirty);
width:75%;
height:75%;
border-radius:0.2rem;
text-align:center;
font-weight:600;
font-size:1.3rem;
background-color:var(--detail);
color:var(--thirty);
`
export const ButtonCalc = styled.button`
display:flex;
align-items:center;
justify-content:center;
background-color:var(--detail);
color:var(--ten);
border:none;
border-radius:0.5rem;
padding:0.7rem;
font-weight:bold;
font-size:1rem;
width:10%;
cursor: pointer;
&:hover{
    background-color:var(--ten);
    color:var(--detail);
}
`