import { SinalCalc } from "../../../enum/sinalCalc";
import { IMatrixBase } from "../../matrixBase";

export interface IBodyCalculate {
    matrixOne:IMatrixBase[]
    matrixTwo:IMatrixBase[]
    sinalOperation:SinalCalc
}