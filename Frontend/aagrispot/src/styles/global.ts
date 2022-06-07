import { createGlobalStyle } from 'styled-components'
import { ThemeType } from '../models/types/theme/dark'

export const GlobalStyles = createGlobalStyle<{theme:ThemeType}>`
body{
    background-color:var(--sixty);
    max-width:97vw;
}

h2,h3,h4,h5,h6,p{
    font-family: 'Montserrat', sans-serif;
    color:var(--thirty)
}
h1{
    font-family: 'Montserrat', sans-serif;
}

:root{
    --sixty:${props=>props.theme.sixty};
    --ten:${props=>props.theme.ten};
    --thirty:${props=>props.theme.thirty};
    --danger:${props=>props.theme.danger};
    --warning:${props=>props.theme.warning}; 
    --success:${props=>props.theme.success};
    --background:${props=>props.theme.background}; 
    --detail:${props=>props.theme.detail};
    --accent:${props=>props.theme.accent};
}
`