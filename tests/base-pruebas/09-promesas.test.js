import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas";
describe('Prueba 09-promesas', () => { 
    test('Debe de retornar un heroe', (done) => { 
        const id = 1
        getHeroeByIdAsync(id)
        .then(hero => {
            expect(hero).toEqual({
                id: 1,
                name: 'Batman',
                owner: 'DC'
            })
            done();
        })

     })
     test('Debe de obtener un error si el heroe no existe', (done) => { 
        const id = 100;
        getHeroeByIdAsync(id)
        .then(hero =>{
            expect(hero).toBeFalsy();
            done();
        })
        .catch(error => {
            // console.log(error)
            expect(error).toBe( `No se pudo encontrar el héroe ` + id);

            // expect(error).toBe( `No se pudo encontrar el héroe ${id}`);
            done();
        })

     })
 })