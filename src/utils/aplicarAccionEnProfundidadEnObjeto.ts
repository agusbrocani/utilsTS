type KeyValueType = Record<string, any>
type actionFunction = (key: string, obj: any, nestingDepth: number) => void;
export function applyActionOnKeyValueOnObject(obj: KeyValueType, action: actionFunction, nestingDepth: number = 0): void 
{
  for(const key in obj) 
  {
      if ("object" === typeof obj[key] && null !== obj[key]) 
      {
        applyActionOnKeyValueOnObject(obj[key], action, nestingDepth + 1);
      } 
      else 
      {
        action(key, obj, nestingDepth)
      }
  }
}

export function eliminarExpresionesDeCadena(cadena: string, listaDeExpresiones: string[]): string
{
    let length = cadena.length
    let i = 0

    while(i < length)
    {
        for(const expresion of listaDeExpresiones)
        {
            while(expresion === cadena[i])
            {
                cadena = cadena.replace(expresion, "")  //replace es solo para la primer aparicion
                length--
            }
        }
        i++
    }

    return cadena
}