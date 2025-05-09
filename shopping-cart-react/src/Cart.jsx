import React from 'react';
export function Cart({ items, onRemoveItem }) {
    const total = items.reduce((sum, item) => sum + item.price, 0);
    return (
    <div className="cart" data-testid="cart">
    <h2>Cart</h2>
    {items.length === 0 ? (
    <p>Your cart is empty</p>
    ) : (
    <>
    <ul>
    {items.map((item, index) => (
    <li key={index} data-testid="cart-item">
    {item.name} - ${item.price}
    <button onClick={() => onRemoveItem(index)}>Remove</button>
    </li>
    ))}
    </ul>
    <p>Total: ${total}</p>
    </>
    )}
    </div>
    );
   }