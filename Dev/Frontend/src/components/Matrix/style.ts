import styled from "styled-components";

export const MatrixGeneral = styled.article`
display:flex;
justify-content:center;
width:100%;
height:auto;
`
export const MatrixData = styled.section`
display:flex;
justify-content:center;
align-items:center;
width:100%;
height:100%;
`
export const LineInMatrix = styled.aside`
display:flex;
justify-content:center;
width:100%;
flex-direction:row;
`

export const ColumnInMatrix = styled.aside`
display:flex;
justify-content:center;
height:100%;
flex-direction:column;
`

export const AddElementsInMatrix = styled.button`
display:flex;
width:8rem;
height: 4rem;
background-color:var(--ten);
border:0.1rem solid var(--detail);
align-items:center;
justify-content:center;
border:none;
font-size:2rem;
font-weight:600;
color:var(--detail);
box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius:0.2rem;
cursor: pointer;
&:hover{
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
`

export const ElementInMatrix = styled.div`
display:flex;
width:8rem;
height: 4rem;
background-color:var(--detail);
border:0.1rem solid var(--ten);
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius:0.2rem;
`
export const ValueInElement = styled.input`
width:100%;
height:50%;
color:var(--ten);
text-align:center;
display:flex;
align-self:center;
justify-content:center;
background-color:var(--detail);
border:none;
font-weight:600;
font-size:1rem;

&::placeholder{
    color:var(--ten);
}

&:focus{
    box-shadow: 0 0 0 0;
    outline: 0;
}
`