import { useEffect, useState } from "react";
import { useMatrix } from "../../../../../hooks/useMatrix";
import { IMatrix } from "../../../../../models/interface/routesApi/apiMatrix/matrix";
import { MatrixSpearedInColumn } from "../../../../../models/types/matrixSepearedInColumn";
import Matrix from "../../../../Matrix";
import { ColumnMatrix, Elements, LineMatrix, MatrixCreateGeneral, Title } from "./styled";

const MatrixCreate = () => {
    const { matrixCreated } = useMatrix()
    const [matrixSpearedInColumn, setMatrixSpearedInColumn] = useState<MatrixSpearedInColumn[]>([])
    // Verificar mudança na matriz criada
    useEffect(() => {
        setMatrixSpearedInColumn([])
        if (matrixCreated.length > 0) {
            separateMatrixInColumn(matrixCreated).then((newMatrixSpearedInColumn)=>{
                setMatrixSpearedInColumn(newMatrixSpearedInColumn)
            })
        }
    }, [matrixCreated])


    /**
     * Separar as matrizes em colunas
     * @param allMatrix Todas as matrizes desorganizadas
     */
    const separateMatrixInColumn = async (allMatrix: IMatrix[]):Promise<MatrixSpearedInColumn[]> => {
        let newMatrixSpearedInColumn: MatrixSpearedInColumn[] = []
        allMatrix.forEach((matrix) => {
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
                // Altera os dados da variavel que vai para o state
                newMatrixSpearedInColumn = insertInMatrixSpearedInColumn
            }
        })
        return newMatrixSpearedInColumn
    }

    return (
        <MatrixCreateGeneral>
            <Title><h1>Matrix criada</h1></Title>
            <Matrix reference="MC1" itsResult matrixResult={matrixCreated}/>
        </MatrixCreateGeneral>
    );
}

export default MatrixCreate