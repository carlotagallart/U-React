import { usContext } from "../../src/base-pruebas/06-deses-obj";

describe('Prueba de 06-deses-obj', () => { 
    test('tiene que retornar un objeto', () => { 
        const edad = 23;
        const clave = 'Carlota';
        const user = usContext({clave, edad});
        expect(user).toEqual({
            nombreClave: clave,
            anios: edad,
            latlng: {
                lat: 14.1232,
                lng: -12.3232
            }
        })
     })
 })