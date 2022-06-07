import styled from "styled-components";

export const CardInfoGeneral = styled.section`
display:flex;
flex-direction:column;
width:100%;
height:100%;

`

export const Title = styled.header`
width:85%;
height:10%;
display:flex;
flex-direction:column;
align-items:flex-end;


h1{
font-size:1.7rem;
font-weight:bold;
margin:0;
color:var(--thirty)
}

hr{
display:flex;
align-self:flex-end;
border-top:0.3rem solid var(--ten);
border-bottom:none;
width:35%;
margin:0;
}

`
export const DivInfo = styled.div`
display:flex;
justify-content:center;
height:100%;
width:100%;
`
export const DivImage = styled.div`
display:flex;
height:53%;
width:100%;
img{
    border-radius:0.5rem;
    height:100%;
    width:92%;
}
`
export const Content = styled.div`
display:flex;
flex-direction:column;
width:100%;
padding-top:2rem;
p{
    font-size:1rem;
    font-weight:500;
    margin:0;
}
.special_content{
    color:var(--ten);
}
`