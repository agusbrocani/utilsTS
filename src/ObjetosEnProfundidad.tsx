import { applyActionOnKeyValueOnObject, eliminarExpresionesDeCadena } from './utils/aplicarAccionEnProfundidadEnObjeto.ts'

const objetoComplejo = 
{
  usuario: {
      id: 12345,
      nombre: "Juan Perez",
      contacto: {
          correo: "juan.perez@example.com",
          telefono: {
              casa: "123-456-7890",
              movil: "987-654-3210"
          },
          direccion: {
              calle: "Calle Principal",
              numero: 101,
              ciudad: "Ciudad E\n\njemplo",
              pais: "Pais Imaginario"
          }
      },
      preferencias: {
          idioma: "español",
          tema: {
              color: "oscuro",
              fuentes: ["Roboto", "Aria\nl", "Sans-serif"]
          }
      }
  },
  productos: [
      {
          id: "p001",
          nombre: "Producto 1",
          precio: 100.5,
          enStock: true,
          variantes: [
              { color: "rojo", tamanio: "M" },
              { color: "azul", tamanio: "L" }
          ]
      },
      {
          id: "p002",
          nombre: "Producto 2",
          precio: 200,
          enStock: false,
          variantes: []
      }
  ],
  sistema: {
      version: "1.0.0",
      modulos: {
          autenticacion: {
              activo: true,
              metodos: ["clave", "biometrico", "OTP"]
          },
          notificaciones: {
              correo: true,
              sms: false,
              push: true
          }
      },
      logs: [
          { id: 1, mensaje: "Inicio de sesión exitoso", fecha: "2024-11-26" },
          { id: 2, mensaje: "\bIn\ttento\n\n\r\n fall\n\nido de inicio de sesión\n", fecha: "2024-11-25" }
      ]
  },
  metadatos: null,
  configuracionAvanzada: {
      opacidad: 0.8,
      habilitarModoDebug: false,
      reglas: {
          regla1: { condicion: "siempre", accion: "notificar" },
          regla2: { condicion: "error", accion: "deten\ner" }
      }
  }
};

const expresiones: string[] = 
[
    "\n",
    "\t",
    "\r",
    "\b"
]

const normalizar = 
(key: string, obj: any, nestingDepth: number) => 
{
    if("string" === typeof obj[key])    //para que un null u otra cosa no me rompa todo
        obj[key] = eliminarExpresionesDeCadena(obj[key] as string, expresiones)
    console.log(`${nestingDepth} ${key}: ${obj[key]}`)
}

let funcionDeAccion = normalizar
applyActionOnKeyValueOnObject(objetoComplejo, funcionDeAccion, 0)

// const mostrarKV = (key: string, obj: any, nestingDepth: number) => console.log(`${key}: ${obj[key]}`)
// let funcionDeAccion = mostrarKV

// console.log(objetoComplejo)


// const cadenaDePrueba = "Intento\n\n\r\n fall\n\nido de inicio de sesión\n"
// console.log(eliminarExpresionesDeCadena(cadenaDePrueba, expresiones))

function ObjetosEnProfundidad()
{
    return (
        <>
        </>
    )
}

export default ObjetosEnProfundidad