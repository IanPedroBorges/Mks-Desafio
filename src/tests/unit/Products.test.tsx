import { render, screen } from '@testing-library/react';
import App from '../../App';
import { vi } from 'vitest';
import { getProductsMock } from '../mocks/MocksApiReturns';

describe('Testando o componente products', async () => {
    it('O componente products deve renderizar os produtos', async () => {
        global.fetch = vi.fn().mockResolvedValue({
            json: async () => getProductsMock,
        });
        render(<App />);
        const allProducts = await screen.findAllByTestId('product');
        expect(allProducts).toHaveLength(8);
        expect(allProducts[0]).toBeInTheDocument();
    });
})