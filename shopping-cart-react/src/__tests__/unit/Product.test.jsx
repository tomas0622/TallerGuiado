import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Product } from '../../Product';
describe('Product Component', () => {
    const mockProduct = {
        id: 1,
        name: 'Test Product',
        price: 100,
    };
    const mockAddToCart = jest.fn();
    it('renders product information', () => {
        render(<Product product={mockProduct} onAddToCart={mockAddToCart} />);

        expect(screen.getByText('Test Product')).toBeInTheDocument();
        expect(screen.getByText('$100')).toBeInTheDocument();
        expect(screen.getByRole('button', { name: /add to cart/i })).toBeInTheDocument();
    });
    it('calls onAddToCart when button is clicked', () => {
        render(<Product product={mockProduct} onAddToCart={mockAddToCart} />);

        fireEvent.click(screen.getByRole('button', { name: /add to cart/i }));
        expect(mockAddToCart).toHaveBeenCalledWith(mockProduct);
    });
});
