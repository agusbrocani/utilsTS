//verificar matriz matematica

export function verificarMatrizMatematica(mat: unknown[][]): boolean
{
    const cantidadDeFilas: number = mat.length

    if(0 === cantidadDeFilas || !(Array.isArray(mat[0])))
        return false

    const cantidadDeColumnas: number = mat[0].length

    for(const e of mat)
    {
        if(!(Array.isArray(e) && cantidadDeColumnas === e.length))
            return false
    }

    return true
}

