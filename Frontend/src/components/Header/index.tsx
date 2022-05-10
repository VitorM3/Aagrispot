import {  HeaderStyle } from "./style";
import { Logo } from "../Images/@icons";
import ToggleTheme from "./ToggleTheme";

const Header = () => {
    return (
        <HeaderStyle>
            <Logo width={'4%'} />
            <ToggleTheme/>
        </HeaderStyle>

    );
}

export default Header