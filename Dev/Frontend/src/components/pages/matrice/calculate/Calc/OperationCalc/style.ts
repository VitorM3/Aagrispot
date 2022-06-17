import styled from "styled-components";

interface Operation {
    itsEnd?: boolean
}

export const OperationCalcGeneral = styled.article`
display:flex;
width:100%;
align-items:center;
justify-content:center;
`

export const Operation = styled.section`
display:flex;
justify-content:space-between;
align-items:center;
padding:0.6rem;
height:9rem;
width:10%;
background-color:var(--detail);
border:0.1rem solid var(--ten);
border-radius:0.2rem;
transition: left 0.4s cubic-bezier(0.680, -0.550, 0.265, 1.550);
`

export const Sinal = styled.div`
display:flex;
align-items:center;
justify-content:center;

width:100%;
h1{
    display:flex;
    align-items:center;
    justify-content:center;
    width: 100%;
    font-size:4rem;
    font-weight:bold;
    text-align:center;
    color:var(--thirty);
    margin:0;


}
`

export const ChangeSinal = styled.div<Operation>`
display:flex;
flex-direction:row;
align-items:center;
height:100%;

cursor: pointer;
svg{
    transform:${props => props.itsEnd ? 'rotate(182deg)' : ''};
    path{
        font-size:1rem;
    font-weight:bold;
    fill:var(--ten);
    margin:0;
    &:hover{
        filter:saturate(200%);
    }
    }
    
}
`