import { verificarMatrizMatematica } from './utils/matrices.ts'

function Matriz()
{
    const pruebas: number[][][] = 
    [
        [[1]], // Matriz 1x1 válida
        [[1, 2], [3, 4]], // Matriz 2x2 válida
        [[1, 2, 3], [4, 5, 6]], // Matriz 2x3 válida
        [[1, 2, 3], [4, 5]], // Matriz inválida (filas de tamaño diferente)
        [[1, 2], [3, 4], [5, 6]], // Matriz 3x2 válida
        [[1]], // Matriz 1x1 válida (caso más pequeño)
        [[1, 2, 3], [4, 5, 6], [7, 8, 9]], // Matriz 3x3 válida
        [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12]], // Matriz 4x3 válida
        [[1, 2], [3, 4], [5]], // Matriz inválida (una fila incompleta)
        [] // Matriz vacía
    ];

    /*
    type testTitulo = 
    {
    caso: string,
    titulo: string,
    resultadoEsperado: boolean
    }
    const titulos: testTitulo[] = 
    [
    {caso: "[OK]Cadena con 1 espacio entre palabra.", titulo: "Este es el nombre del documento", resultadoEsperado: true},
    {caso: "[OK]Numeros.", titulo: "123", resultadoEsperado: true},
    {caso: "[OK]Cadena con tilde.", titulo: "Título", resultadoEsperado: true},
    {caso: "[ERROR]Cadena con 2 espacios intermedios.", titulo: "Título  con 2 espacios", resultadoEsperado: false},
    {caso: "[ERROR]Cadena vacia.", titulo: "", resultadoEsperado: false},
    {caso: "[ERROR]Cadena con 1 espacio sin caracteres.", titulo: " ", resultadoEsperado: false},
    {caso: "[ERROR]Cadena con un espacio inicial", titulo: " Este es el nombre del documento", resultadoEsperado: false},
    {caso: "[ERROR]Cadena con un espacio final", titulo: "Este es el nombre del documento ", resultadoEsperado: false},
    {caso: "[ERROR]Cadena con un caracter no valido intermedio", titulo: "Este@es el nombre del documento", resultadoEsperado: false},
    {caso: "[ERROR]Cadena con caracteres no validos iniciales", titulo: "¨_¨_¨_Este es el nombre del documento", resultadoEsperado: false},
    {caso: "[ERROR]Cadena con caracteres no validos finales ", titulo: "Este es el nombre del documento¨_¨_¨_", resultadoEsperado: false},
    {caso: "[ERROR]Cadena con caracteres no validos iniciales y finales", titulo: "¨_¨_¨_Este es el nombre del documento¨_¨_¨_", resultadoEsperado: false},
    {caso: "[ERROR]Cadena con caracteres no validos iniciales, finales e intermedios", titulo: "¨_¨_¨_Este ¨_¨_¨_es el nombre del documento¨_¨_¨_", resultadoEsperado: false},
    {caso: "[ERROR]Cadena con 101 caracteres o mas.", titulo: "Esta es una cadena que contiene 101 caracteres para probar el caso en el que la funcion da false00101", resultadoEsperado: false},
    {caso: "[OK]Cadena con 100 caracteres exactos", titulo: "Esta es una cadena que contiene 100 caracteres para probar el caso en el que la funcion da true00100", resultadoEsperado: true}
    ]
     */
    
    // Iterar sobre las pruebas
    for (let i = 0; i < pruebas.length; i++) {
        const prueba = pruebas[i];
        if (verificarMatrizMatematica(prueba)) {
            console.log(`Prueba ${i + 1}: Es una matriz matemática.`);
        } else {
            console.log(`Prueba ${i + 1}: No es una matriz matemática.`);
        }
    }

    return (
        <>
        </>
    )
}

export default Matriz