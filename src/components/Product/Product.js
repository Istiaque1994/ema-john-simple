import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css';

const Product = (props) => {

    const {img, name, seller, price, stock} = props.product;

    return (
        <div className="product">
            <div className="product-image">
                <img src={img} alt="No Image Found"/>
            </div>
            <div className="product-text-contant">
                <h3 className="product-name">{name}</h3>
                <p>by: {seller}</p>
                <p>$ {price}</p>
                <p>only {stock} left in stock - order soon</p>
                <button className="main-button" onClick={() => props.handleAddProduct(props.product)}>
                    <FontAwesomeIcon icon={faShoppingCart} /> add to cart
                </button>
            </div>
        </div>
    );
};

export default Product;