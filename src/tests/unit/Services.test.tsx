import { render } from '@testing-library/react';
import App from '../../App';
import { vi } from 'vitest';
import { getProductsMock, getProductsTratedMock, productQuantityMock } from '../mocks/MocksApiReturns';
import { getProducts } from '../../services/GetProducts';
import { quantityProducts, totalPrice } from '../../services/QuantityProducts';

describe('Testando funcionalidades da Services', () => {
    it('Deve retornar um array de produtos', async () => {
        global.fetch = vi.fn().mockResolvedValue({
            json: async () => getProductsMock,
        });
        render(<App />);
        const products = await getProducts();
        expect(products).toEqual(getProductsTratedMock);
    });
    it('testando as funcionalidades de QuantityProducts', () => {
        const quantity = quantityProducts(productQuantityMock);
        const price = totalPrice(productQuantityMock);
        expect(price).toBe(6000);
        expect(quantity).toBe(6);

    });
})