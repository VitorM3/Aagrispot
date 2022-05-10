import styled from "styled-components";

export const CardBase = styled.section`
display:flex;
flex-direction:column;
width:30%;
height:100%;
background-color:var(--detail);
border-radius:1rem;
transition: .4s;
cursor: pointer;

&:hover{
    background-color:var(--thirty);
    
    h1{
        color:var(--ten);
    }

    svg{
    path{
        fill:var(--ten)
    }
}
}


`
export const Icon = styled.div`
display:flex;
align-items:center;
justify-content:center;
width:100%;
height:100%;
svg{
    path{
        fill:var(--thirty)
    }
}



`
export const Text = styled.h1`
display:flex;
justify-content:center;
align-items:flex-end;
width:100%;
height:5%;
color:var(--thirty);
font-size:2.5rem;
margin:0;
padding: 0 0 2rem 0;
border:none;
`