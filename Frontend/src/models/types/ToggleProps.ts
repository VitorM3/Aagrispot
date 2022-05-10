import React, { ReactNode } from "react"
import { IComponentBase } from "../interface/componentBase"

export type ToggleProps = IComponentBase & {
    onClick?:React.MouseEventHandler<HTMLLabelElement> 
    width:string
}