import { applyActionOnKeyValueOnObject } from "./utils/aplicarAccionEnProfundidadEnObjeto"

function PruebaAplicarAccionEnProfundidadEnObjeto()
{

    const objeto: Object = {
        p1: "a1",
        p2: 2,
        p3: null,
        p4: undefined,
        p5: NaN,
        p6: [],
        p7: {},
        p8: [[[8]]],
        p9: {
            p10: {
                p11: {
                    p12: {
                        id: 1,
                        nya: "Agustin Brocani",
                        sexo: "M",
                        salario: 100.2
                    }
                }
            }
        },
        p13: [0,1,2,3,4,5,6,7,8,9],
        p14: ["Agustin", "Nicolas", "Brocani"],
        p15: [{id: 1}, {id: 2}, {id: 3}],
        p16: [null, null, null],
        p17: [undefined, undefined, undefined],
        p18: [NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN],
        p19: ["", "", "", "", "", "", "", "", "", ""]
    }

    // const fAccion = (k: string, o: any, n: number): void => console.log(`${"["+k+"-"+n+"]"} ${o[k]}`)
    //Si es objeto, key es la propiedad.
    //Si es array, key es el indice[js maneja así a los array].

    type KeyValueType = Record<string, any>
    const objeto2: KeyValueType = {
        key1: "value1",                // String
        key2: 123,                     // Number
        key3: true,                    // Boolean
        key4: [1, 2, 3],               // Array
        key5: { p: 456 },         // Object
        key6: () => "hello",           // Function
        key7: null,                    // Null
        key8: undefined,               // Undefined
        key9: Symbol("symbol"),        // Symbol            ===> DA ERROR, no puede castear para acceder
        key10: BigInt(9007199254740991), // BigInt
        key11: new Date(),             // Date              ===> ¿ARRAY?
        key12: /regex/,                // Regular Expression
        key13: new Map(),              // Map
        key14: new Set([5, 6, 7]),     // Set
        key15: new WeakMap(),          // WeakMap
        key16: new WeakSet(),          // WeakSet
        key17: new Error("Error"),     // Error
        key18: new Promise((resolve) => resolve("done")), // Promise
        key19: [1, "mixed", true],     // Tuple (simulado como array)
        key20: new Uint8Array([100]),  // Alternativa a Buffer
        key21: "initialized as unknown", // Unknown inicializado con un valor válido
        key22: "any value",            // Any inicializado con un valor válido
        key23: {
            key24: {
                id: 1,
                nya: "Agustin Brocani",
                sexo: "M",
                salario: 100.5,
                p: undefined
            }
        }
    };
    

    const fAccion = (k: string, o: any, n: number): void => {
    
        //if(null === o) no puede pasar
        //true * 2 da 2

        // if("object" === typeof o[k])
        if(Array.isArray(o))
        {
            console.log("[Caso 0]\nIndex: " + k + "\nValue: " + o[Number(k)])
        }
        else    //caso 0, 4 los más comunes[caso 1 - 1 vez]
        {
            try
            {
                if(null === o[k])
                {
                    if("object" === typeof o[k])
                    {
                        console.log(`[Caso: ${1}]\n`+"Es object y o[k] es null: " + o[k])
                    }
                    else
                    {
                        console.log(`[Caso: ${2}]\n`+"NO es object y o[k] es null: " + o[k])
                    }
                }
                else
                {
                    if("object" === typeof o[k])
                    {
                        console.log(`[Caso: ${3}]\n`+"Es object y o[k] NO es null: " + o[k])
                    }
                    else
                    {
                        console.log(`[Caso: ${4}]\n`+"NO es object y o[k] NO es null: " + o[k])
                    }
                }
            }
            catch(e)
            {
                console.log("Error: " + e)
            }
        }

        // if("object" === typeof o[k])
        // {
        //     console.log(`obj: ${o[k]}`)
        // }else if(Array.isArray(o))
        //     {
        //         o[Number(k)] *= 2
        //         console.log(`arr: ${o[Number(k)]}`)
        //     }
        //     else
        //     {
        //         console.log("otro: " + o[k])
        //     }
    }

    applyActionOnKeyValueOnObject(objeto2, fAccion, )

    return (
        <>

        </>
    )
}

export default PruebaAplicarAccionEnProfundidadEnObjeto