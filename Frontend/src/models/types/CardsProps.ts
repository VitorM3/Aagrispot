import { ReactComponentElement, ReactEventHandler } from "react"
import { IComponentBase } from "../interface/componentBase"

export type CardsProps = IComponentBase & {
    text:string
    click:()=>void
}