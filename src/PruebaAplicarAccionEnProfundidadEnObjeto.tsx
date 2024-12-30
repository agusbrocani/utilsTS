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

    const fAccion = (k: any, o: any, n: any): void => console.log(`${"["+k+"-"+n+"]"} ${o[k]}`)
    //Si es objeto, key es la propiedad.
    //Si es array, key es el indice.

    applyActionOnKeyValueOnObject(objeto, fAccion, )

    return (
        <>

        </>
    )
}

export default PruebaAplicarAccionEnProfundidadEnObjeto