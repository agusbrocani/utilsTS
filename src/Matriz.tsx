import { verificarMatrizMatematica } from './utils/matrices.ts'

function Matriz()
{
    const prueba: number[][] = 
    [
        [1,2,3],
        [1,2,3],
        [1,2,3]
    ]

    if(verificarMatrizMatematica(prueba))
    {
        console.log("Es una matriz matematica.")
    }
    else
    {
        console.log("No es una matriz matematica.")
    }

    return (
        <>
        </>
    )
}

export default Matriz