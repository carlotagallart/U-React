import { getHeroeById , getHeroesByOwner} from "../../src/base-pruebas/08-imp-exp";
import heroesJson from "../../src/data/heroes";
describe('pruebas de 08-imp-exp', () => { 
    test('getHeroesById debe de retornar un heroe por ID', () => { 
        const id = 3;
        const heroe = getHeroeById(id);
        expect(heroe).toEqual({ id: 3, name: 'Superman', owner: 'DC' });
     })
     test('getHeroesById debe de retornar undefined si no existe', () => { 
        const id = 100;
        const heroe = getHeroeById(id);
        expect(heroe).toBeFalsy();
      })
      //Tarea
    //   debe retornar un arreglo con los héroes DE
    // Lenght === 3
    // toEqual al arreglo filtrado
    test('debe retornar un arreglo con los héroes DE', () => { 
        const owner = 'DC';
        const heroe = getHeroesByOwner(owner);
        // console.log(heroe)
        expect(heroe).toHaveLength(3);
        expect(heroe).toEqual(heroesJson.filter( (heroe) => heroe.owner === owner ))

      })
      test('debe retornar un arreglo con los héroes Marvel', () => { 
        const owner = 'Marvel';
        const heroe = getHeroesByOwner(owner);
        // console.log(heroe)
        expect(heroe).toHaveLength(2);
        expect(heroe).toEqual(heroesJson.filter( (heroe) => heroe.owner === owner ))

      })
    //debe de retornar un arreglo con los héroes de Marvel
    //lenght ===2
 })