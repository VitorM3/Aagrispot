import styled from "styled-components";

export const DivChangeTheme = styled.div`
display:flex;
justify-content:space-between;
align-items:center;
width:6%;
padding:3rem;
gap:0.5rem;

svg{
    width:1rem;
    path {
        fill:var(--ten);
        
    }
}
@media (max-width:1024px) {
    padding:2rem;
svg{
    width:3rem;
}
}

`



interface Toggle {
    checked: boolean
    widthToggle: string
}

export const ToggleGeneral = styled.label`
position: relative;
display: inline-block;
width: 68px;
height: 30px;
@media (max-width:1024px) {
    width:200px;
    height:26px;
}
`

export const ToggleAside = styled.input.attrs({ type: "checkbox" })`
opacity: 0;
width: 0;
height: 0;
`
export const ToggleButton = styled.span<Toggle>`
position: absolute;
cursor: pointer;
top: 0;
left: 0;
right: 0;
bottom: 0;
background-color: var(--detail);
-webkit-transition: .4s;
transition: .4s;
border-radius: 18px;
box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
border-color:var(--detail);

&::before {
    
    position: absolute;
  content: "";
  height: 20px;
  width: 20px;
  left: 4px;
  bottom: 5px;
  background-color: ${props => props.checked ? 'var(--ten)' : 'var(--thirty)'};
  border-radius: 50%;
  -webkit-transition: .4s;
  transition: .4s;
  svg{
    transform: ${props => props.checked ? 'translateX(35px)' : 'none'};
  }
  transform: ${props => props.checked ? 'translateX(35px)' : 'none'};

@media (max-width:1024px) {
    transform: ${props => props.checked ? 'translateX(15px)' : 'none'};
    height: 18px;
    width:18px;
}
    
    }


`