import { render, screen } from '@testing-library/react';
import { CounterApp } from '../src/CounterApp';
describe('Prueba en <CounterApp />', () => { 
    const value = 100
    test('Debe de hacer match con el snapshot', () => { 
        const { container } = render(<CounterApp value={value}/>);
        expect(container).toMatchSnapshot();
     });
     test('debe de mostrar el valor inicial 100', () => { 
        render(<CounterApp value={100}/>);
        expect(screen.getByText('100')).toBeTruthy();
      })
 })