import Cards from "../../../../Cards";
import CardInfoWhatIs from "../CardInfoWhatIs";
import CardInfoWhy from "../CardInfoWhy";
import { CardAllGeneral } from "./style";
import {Element} from 'react-scroll'

const AllCards =  () =>{
    return(
    <CardAllGeneral>
        <Cards>
            <CardInfoWhatIs/>
        </Cards>
        <Cards>
            <Element name="why">
            <CardInfoWhy/>
            </Element>
            
        </Cards>
        {/* <Cards>
            <Element name="video">
            Video
            </Element>
            
        </Cards> */}
    </CardAllGeneral>);
}

export default AllCards