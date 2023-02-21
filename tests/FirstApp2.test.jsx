import { render, screen } from '@testing-library/react';
import { FirstApp } from '../src/FirstApp';

describe('Pruebas en <FirstApp />', () => { 
    const title = 'Hola, soy Carlota';
    const subTitle = 'Soy un subtitulo';
    test('debe de hacer match con el snapshot', () => { 
        const {container} = render(<FirstApp title={title}/>)
        expect(container).toMatchSnapshot()
     })
     
     test('debe de mostrar el mensaje hola soy carlota', () => { 
      render(<FirstApp title={title}/>)
      expect(screen.getByText(title)).toBeTruthy()
      })
      test('el titulo tiene que esta en un h1', () => { 
        render(<FirstApp title={title}/>)
        expect(screen.getByRole('heading', {level: 1}));
       })
    test('debe de enviar el subtitulo por props', () => { 
      render(<FirstApp title={title} subTitle={subTitle} />)
      expect(screen.getAllByText(subTitle).length).toBe(1)
     })
 })