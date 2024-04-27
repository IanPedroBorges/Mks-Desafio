import { render, screen } from '@testing-library/react';
import App from '../../App';
import { vi } from 'vitest';
import { getProductsMock } from '../mocks/MocksApiReturns';
import userEvent from '@testing-library/user-event';

describe('Testando o componente CartPage', async () => {
    it('O componente CartPage deve renderizar os produtos do carrinho', async () => {
        global.fetch = vi.fn().mockResolvedValue({
            json: async () => getProductsMock,
        });
        render(<App />);
        const cartButton = screen.getByRole('button', { name: /cart 0/i });
        const allBuyButtons = await screen.findAllByTestId('button-buy');
        const allProducts = await screen.findAllByTestId('product');
        expect(allProducts).toHaveLength(8);
        expect(allProducts[0]).toBeInTheDocument();
        expect(allBuyButtons).toHaveLength(8);
        expect(allBuyButtons[0]).toBeInTheDocument();
        await userEvent.click(allBuyButtons[0]);
        const cartQuantity = screen.getByText('1');
        expect(cartQuantity).toBeInTheDocument();
        await userEvent.click(cartButton);
        const buttonFinalyBuy = screen.getByRole('button', {  name: /finalizar compra/i});
        expect(buttonFinalyBuy).toBeInTheDocument();
        const allCartProducts = await screen.findAllByTestId('Cart-Products');
        expect(allCartProducts).toHaveLength(1);
        expect(allCartProducts[0]).toBeInTheDocument();
        const titleCart = screen.getByRole('heading', {  name: /carrinho de compras/i});
        const buttonX = screen.getByRole('button', {  name: /x/i});
        const total = screen.getByRole('heading', {  name: /total/i});
        const price = screen.getByText(/r\$ 600/i);
        expect(titleCart).toBeInTheDocument();
        expect(buttonX).toBeInTheDocument();
        expect(total).toBeInTheDocument();
        expect(price).toBeInTheDocument();
    });
})