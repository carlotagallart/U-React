import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas";
describe('Prueba 09-promesas', () => { 
    test('Debe de retornar un heroe', () => { 
        const id = 1
        getHeroeByIdAsync(id)
        .then(hero => {
            // expect(true).toBe(false)
        })

     })
 })