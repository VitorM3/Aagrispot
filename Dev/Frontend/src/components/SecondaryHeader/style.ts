import styled from "styled-components";

interface line {
    lineSize:string
}

export const SecondaryHeaderHomeGeneral = styled.header`
display:flex;
flex-direction:column-reverse;
align-items:center;
width:100%;
height:10%;
`
export const Title = styled.h1`
display:flex;
flex-direction:row;
align-items:flex-end;
font-size:2rem;
font-weight:600;
margin:0;
color:var(--thirty);

`
export const Line = styled.hr<line>`
display:flex;
border-top:0.3rem solid var(--ten);
border-bottom:none;
width:${props=>props.lineSize};
margin-bottom:2rem;
`