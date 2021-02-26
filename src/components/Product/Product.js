import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'

const Product = (props) => {

    const {img, name, seller, price, stock} = props.product;

    return (
        <div className="product">
            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                    <div className="product-image">
                        <img src={img} alt="No Image Found"/>
                    </div>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8">
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
            </div>
        </div>
    );
};

export default Product;