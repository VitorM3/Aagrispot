import { PageEnum } from "../../enum/pageEnum"

export interface IPageContext {
    page?:PageEnum
    handleChangePage: (to?:string) => void
}