import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Cart } from '../../Cart';
describe('Cart Component', () => {
    const mockItems = [
        { id: 1, name: 'Product 1', price: 100 },
        { id: 2, name: 'Product 2', price: 200 },
    ];
    const mockRemoveItem = jest.fn();
    it('renders empty cart message when no items', () => {
        render(<Cart items={[]} onRemoveItem={mockRemoveItem} />);
        expect(screen.getByText('Your cart is empty')).toBeInTheDocument();
    });
    it('renders cart items when items exist', () => {
        render(<Cart items={mockItems} onRemoveItem={mockRemoveItem} />);

        expect(screen.getByText('Product 1 - $100')).toBeInTheDocument();
        expect(screen.getByText('Product 2 - $200')).toBeInTheDocument();
        expect(screen.getByText('Total: $300')).toBeInTheDocument();
    });
    it('calls onRemoveItem when remove button is clicked', () => {
        render(<Cart items={mockItems} onRemoveItem={mockRemoveItem} />);

        const removeButtons = screen.getAllByRole('button', { name: /remove/i });
        fireEvent.click(removeButtons[0]);
        expect(mockRemoveItem).toHaveBeenCalledWith(0);
    });
});
