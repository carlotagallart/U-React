import { retornaArreglo } from "../../src/base-pruebas/07-deses-arr";

describe('Prueba en 07-deses-arr', () => { 
    test('debe de retornar un string y un numero', () => { 
        const [string, number] = retornaArreglo()
        // expect(typeof string).toBe('string')
        // expect(typeof number).toBe('number')
        expect(string).toStrictEqual(expect.any(String))
        expect(number).toStrictEqual(expect.any(Number))
     })
 })