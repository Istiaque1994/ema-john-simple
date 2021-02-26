import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const cart = props.cart

    // Total Item Price
    // const total = cart.reduce ( (total, prd) => total + prd.price , 0 )
    let total = 0;
    for(let i = 0; i < cart.length; i++){
        const product = cart[i];
        total = total + product.price;
    }

    // Shipping Price
    let shipping = 0;
    if(total > 35){
        shipping = 0;
    }
    else if(total > 15){
        shipping = 4.99;
    }
    else if(total > 0){
        shipping = 12.99;
    }

    // Tax
    const tax = Math.round(total / 10);

    // Grand Total
    const grandTotal = (total + shipping + Number(tax)).toFixed(2);

    return (
        <div className="cart-box">
            <h4>Order Summary</h4>
            <p><strong>Items ordered:</strong> {cart.length}</p>
            <p><strong>Items:</strong> {Number(total).toFixed(2)}</p>
            <p><strong>Shipping & Handling:</strong> {Number(shipping).toFixed(2)}</p>
            <p><strong>Tax (10%):</strong> {tax}</p>
            <h3>Order Total: {grandTotal}</h3>
            <button className="order-button">Review your order</button>
        </div>
    );
};

export default Cart;