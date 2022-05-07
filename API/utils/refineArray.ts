/**
 * Função para Refinar um array de string e retirar elementos especificos
 * @param caracterRemove elemento especificos
 * @param array Respectivo array
 * @returns Array de String
 */
export const refineArray = async (caracterRemove: string, array: string[]): Promise<string[]> => {
    try {
        // Tranzitar por todos os elementos do array
        array.forEach((element, index) => {
            
            // Verificar se o caracter separador está presente
            if (element == caracterRemove) {
                array.splice(index, 1)
            }
            console.log(array)
        })
        
        return array
    } catch (error:any) {
        throw new Error(`utils (refineArray) => ${error.message} `)
    }

}