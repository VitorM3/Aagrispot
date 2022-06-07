import {  HeaderStyle } from "./style";
import { Logo } from "../Images/@icons";
import ToggleTheme from "./ToggleTheme";

const Header = () => {
    return (
        <HeaderStyle>
            <ToggleTheme/>
        </HeaderStyle>

    );
}

export default Header