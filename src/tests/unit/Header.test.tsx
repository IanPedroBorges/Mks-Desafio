import { render, screen } from '@testing-library/react';
import App from '../../App';

describe('Testando o componente Header', () => {
    it('O componente Header deve renderizar o título da aplicação', () => {
        render(<App />);
        const titleh2 = screen.getByRole('heading', {  name: /sistemas/i});
        const titleImg = screen.getByTestId('Mks');
        expect(titleImg).toBeInTheDocument();
        expect(titleh2).toBeInTheDocument();
    });
    it('O componente Header deve renderizar o botão do carrinho', () => {
        render(<App />);
        const cartButtonImg = screen.getByTestId('Cart');
        const cartQuantity = screen.getByText('0');
        const cartButton = screen.getByRole('button', {  name: /cart 0/i});
        expect(cartButton).toBeInTheDocument();
        expect(cartButtonImg).toBeInTheDocument();
        expect(cartQuantity).toBeInTheDocument();
    });
})