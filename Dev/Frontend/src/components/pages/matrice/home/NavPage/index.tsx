import { Item, NavBar, NavPageGeneral } from "./style";
import * as Scroll from 'react-scroll';
import { Link, animateScroll } from 'react-scroll'

import { useRef } from "react";

const NavPage = () => {
    const ref = useRef(null)
    return(
        <NavPageGeneral>
            <NavBar>
                <Link activeClass="active" to="" spy={true} smooth={true}  duration={600}>
                    <Item><p>Aagrispot? O que é isso?</p> </Item>
                </Link>
                <Link activeClass="active" to="why" spy={true} smooth={true}  duration={600}>
                    <Item><p>Por que Aagrispot?</p> </Item>
                
                </Link>
                {/* <Link activeClass="active" to="video" spy={true} smooth={true}  duration={600}>
                    <Item><p>Como utilizar a plataforma?</p> </Item>
                </Link> */}
            </NavBar>
        </NavPageGeneral>
    );
}

export default NavPage