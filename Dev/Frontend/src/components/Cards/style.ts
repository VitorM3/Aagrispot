import styled from "styled-components";

export const CardBase = styled.section`
display:flex;
flex-direction:column;
width:55%;
height:20rem;
background-color:var(--detail);
border-radius:1rem;
transition: .4s;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 
0px 4px 4px rgba(0, 0, 0, 0.25), 
0px 4px 4px rgba(0, 0, 0, 0.25), 
0px 4px 4px rgba(0, 0, 0, 0.25);
padding:1.5rem;

@media (max-width: 1024px) {
    width:70%;
}


`
