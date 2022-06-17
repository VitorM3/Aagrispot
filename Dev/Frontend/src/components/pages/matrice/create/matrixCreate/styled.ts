import styled from "styled-components";

export const MatrixCreateGeneral = styled.section`
display:flex;
width:100%;
height:100%;
flex-direction:column;

`
export const Title = styled.header`
display:flex;
height:10%;
width:100%;
align-items:center;
justify-content:center;
h1{
    color:var(--thirty);
    font-size:1.6rem;
}
`

export const Matrix = styled.article`
display:flex;
align-self:center;
justify-content:center;
background-color:var(--detail);
width:85%;
height:100%;
max-width:110rem;
max-height:70rem;
overflow-y:scroll;
border-radius:1rem;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 
0px 4px 4px rgba(0, 0, 0, 0.25), 
0px 4px 4px rgba(0, 0, 0, 0.25), 
0px 4px 4px rgba(0, 0, 0, 0.25);
`
export const ColumnMatrix = styled.section`
width:100%;
height:100%;
`

export const LineMatrix = styled.aside`
display:flex;
flex-direction:column;
border:0.1rem solid var(--thirty);
border-bottom:none;
`
export const Elements = styled.div`
display:flex;
flex-direction:row;
gap:0.3rem;
padding:1rem;
    border-bottom:0.1rem solid var(--thirty);
    margin:0;
    text-align:center;
`