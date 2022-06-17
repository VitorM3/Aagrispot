import { MutableRefObject } from "react"
const scrollToRef = async (ref:MutableRefObject<any>) => {
    window.scrollTo(0,ref.current!.offsetTop)
}

export default scrollToRef