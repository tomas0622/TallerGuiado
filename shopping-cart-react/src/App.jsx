import { useState } from 'react';
import { Product } from './Product';
import { Cart } from './Cart';
import './App.css';
function App() {
 const [cartItems, setCartItems] = useState([]);
 const products = [
 { id: 1, name: 'Laptop', price: 999 },
 { id: 2, name: 'Phone', price: 699 },
 { id: 3, name: 'Tablet', price: 399 },
 ];
 const addToCart = (product) => {
 setCartItems([...cartItems, product]);
 };
 const removeFromCart = (index) => {
 const newItems = [...cartItems];
 newItems.splice(index, 1);
 setCartItems(newItems);
 };
 return (
 <div className="app">
 <h1>Shop</h1>
 <div className="products">
 {products.map((product) => (
 <Product
 key={product.id}
 product={product}
 onAddToCart={addToCart}
 />
 ))}
 </div>
 <Cart items={cartItems} onRemoveItem={removeFromCart} />
 </div>
 );
}
export default App;
