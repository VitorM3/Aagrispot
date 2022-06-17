import { useEffect, useLayoutEffect, useState } from "react"
import { toast } from "react-toastify"
import { useMatrix } from "../../hooks/useMatrix"
import { IMatrix } from "../../models/interface/routesApi/apiMatrix/matrix"
import { MatrixProps } from "../../models/types/MatrixProps"
import { MatrixSpearedInColumn } from "../../models/types/matrixSepearedInColumn"
import { AddElementsInMatrix, ColumnInMatrix, LineInMatrix, ElementInMatrix, MatrixData, MatrixGeneral, ValueInElement } from "./style"

const Matrix = ({ reference, itsResult,matrixResult}: MatrixProps) => {
    const [matrixSpearedInColumn, setMatrixSpearedInColumn] = useState<MatrixSpearedInColumn[]>([])
    const [viewMatrix, setViewMatrix] = useState<MatrixSpearedInColumn[]>([])
    const { postMatrixToCalculate,matrixCalculate } = useMatrix()

    useLayoutEffect(() => {
        setMatrixSpearedInColumn([])
        setViewMatrix([])
    }, [])

    useEffect(() => {
        setViewMatrix(matrixSpearedInColumn)
        if(matrixSpearedInColumn.length !== 0){
            insertValuesInContextMatrixToCalculate()
        }else{
            setViewMatrix([])
        }
    }, [matrixSpearedInColumn])

    useEffect(()=>{
        if(matrixResult !== undefined){
            setViewMatrix(organizeMatrixInColumnInResult())
        }
    },[matrixResult?.length])

    useEffect(()=>{
        if(matrixCalculate.length === 0){
            setMatrixSpearedInColumn([])
            setViewMatrix([])
        }
    },[matrixCalculate.length])

    /**
     * Adicionar uma nova coluna a uma matriz
     */
    const handleClickAddColumn = () => {
        // Criar número da coluna a partir da quantidade de elementos
        let column = matrixSpearedInColumn.length + 1
        if (column > 4) {
            toast.warning('Muitas colunas para realizar o calculo')
            return
        }
        // Criar matrizes
        let matrix: IMatrix[] = []
        if (matrixSpearedInColumn.length === 0) {
            matrix = [{ order: `a1${column}`, value: '' }]
        } else {
            matrix = matrixSpearedInColumn[0].matrix.map((matrix) => {
                matrix.value = ''
                return { order: `a${matrix.order[1]}${column}`, value: '' }
            })
        }
        setMatrixSpearedInColumn(prevState => [...prevState, { column, matrix }])
    }
    /**
     * Adicionar uma nova linha a uma matriz
     */
    const handleClickAddLine = async () => {
        if (parseInt(matrixSpearedInColumn[0].matrix[matrixSpearedInColumn[0].matrix.length - 1].order[1]) + 1 > 4) {
            toast.warning('Muitas linhas para  realizar calculo')
            return
        }
        const newMatrixSepearedInColumn = matrixSpearedInColumn.map((matrixInColumn, index) => {
            let arrayMatrix = matrixInColumn
            // Pegar número atual de linhas
            let line = parseInt(arrayMatrix.matrix[arrayMatrix.matrix.length - 1].order[1]) + 1

            // Adicionar nova matriz
            arrayMatrix.matrix.push({ order: `a${line}${arrayMatrix.column}`, value: '' })
            return arrayMatrix
        })

        setMatrixSpearedInColumn(newMatrixSepearedInColumn)

    }
    /**
     * Alterar valores de uma célula de uma matriz
     * @param column Coluna na célula
     * @param indexMatrix Index da célula
     * @param value Valor da célula
     */
    const handleChangeValueInMatrix = (column: number, indexMatrix: number, value: string) => {
        let arrayMatrix = matrixSpearedInColumn
        // Mapear objeto da matriz para alterar valor da respectiva célula
        let newArrayMatrix = arrayMatrix.map((matrixInColumn) => {
            let newMatrixInColumn = matrixInColumn
            if (newMatrixInColumn.column === column) {
                newMatrixInColumn.matrix[indexMatrix].value = value
            }
            return newMatrixInColumn
        })
        setMatrixSpearedInColumn(newArrayMatrix)
    }
    /**
     * Adicionar valores da matriz para o contexto de matrizes
     */
    const insertValuesInContextMatrixToCalculate = () => {
        let matrixGeneral: IMatrix[] = []
        matrixSpearedInColumn.forEach((matrixInColumn) => {
            // Agrupar todas as matrizes em um único array
            matrixInColumn.matrix.forEach((matrix) => {
                matrixGeneral.push(matrix)
            })
        })
        postMatrixToCalculate(reference, matrixGeneral)
    }
    /**
     * Organizar a matriz do resultado em colunas
     * @returns 
     */
    const organizeMatrixInColumnInResult = () => {
        let newMatrixSpearedInColumn: MatrixSpearedInColumn[] = []
        matrixResult!.forEach((matrix) => {
            // Verificar o número de colunas que serão necessárias
            let numColumns = matrix.order.length - 2
            // Dividir o order para encontrar a respectiva coluna
            let column = parseInt(matrix.order[1 + numColumns])
            // Procurar se a coluna ja foi cadastrada
            let findMatrixInColumn = newMatrixSpearedInColumn.filter((matrix) => matrix.column === column)[0]
            if (findMatrixInColumn === undefined) {
                newMatrixSpearedInColumn.push({ column, matrix: [matrix] })
            } else {
                // Adicionar nova matriz
                findMatrixInColumn.matrix.push(matrix)
                // Retire aquele que não tem a respectiva coluna
                let insertInMatrixSpearedInColumn = newMatrixSpearedInColumn.filter((matrix) => matrix.column !== column)
                // Insere os dados
                insertInMatrixSpearedInColumn.push(findMatrixInColumn)
                // Altera os dados da variável que vai para o state
                newMatrixSpearedInColumn = insertInMatrixSpearedInColumn
            }
        })
        return newMatrixSpearedInColumn
    }

    return (
        <MatrixGeneral>
            <MatrixData>
                <LineInMatrix>
                    {viewMatrix.map((matrixSpeared) => (
                        <ColumnInMatrix key={matrixSpeared.column}>
                            {matrixSpeared.matrix.map((matrix, index) => {
                                return (
                                    <>
                                        <ElementInMatrix key={index}>
                                            <ValueInElement
                                                placeholder={matrix.order} value={matrix.value}
                                                onChange={(e) => {
                                                    handleChangeValueInMatrix(matrixSpeared.column, index, e.target.value)
                                                }} readOnly={itsResult} />
                                        </ElementInMatrix>
                                    </>
                                )
                            })}
                            {!itsResult ?
                                <AddElementsInMatrix
                                    onClick={() => { handleClickAddLine() }}>+</AddElementsInMatrix>
                                : ''}

                        </ColumnInMatrix>
                    ))
                    }
                    <ColumnInMatrix>
                        {!itsResult?
                            <AddElementsInMatrix
                                onClick={() => { handleClickAddColumn() }}>+</AddElementsInMatrix>
                            : ''
                        }
                    </ColumnInMatrix>
                </LineInMatrix>
            </MatrixData>
        </MatrixGeneral>
    )
}

export default Matrix