import { useEffect, useState } from "react";
import { useTheme } from "../../../hooks/useTheme";
import { Moon, Sun } from "../../Images/@icons";
import { DivChangeTheme, ToggleAside, ToggleButton, ToggleGeneral } from "./style";

const ToggleTheme = () => {
    const [itsLight,setItsLight] = useState(false)
    const {handleChangeTheme} = useTheme()

    useEffect(()=>{
        handleChangeTheme(itsLight)
    },[itsLight])


    return (
        <DivChangeTheme >
            {itsLight ? <Moon width={'15%'}  /> : <Sun width={'30%'}/>}
            
            <ToggleGeneral className="toggle" >
            
            <ToggleAside onClick={()=>{setItsLight(!itsLight)}} id='toggle' />
            <ToggleButton checked={itsLight} widthToggle={'100%'} ></ToggleButton>
        </ToggleGeneral>

        </DivChangeTheme>
    );
}

export default ToggleTheme 