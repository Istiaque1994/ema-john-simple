import React, { useState } from 'react';
import './Shop.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import fakeData from '../../fakeData';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';

const Shop = () => {

    const first10 = fakeData.slice(0,10);
    const [products, setProducts] = useState(first10);

    const [cart, setCart] = useState([]);

    const handleAddProduct = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
    }

    return (
        <div className="shop-container">
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-9 col-lg-9 mobile-product">
                        <div className="row">
                                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                    <div className="product-container">
                                    {
                                        products.map(pd => <Product product= {pd} handleAddProduct = {handleAddProduct}></Product>)
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 mobile-cart">
                        <div className="cart-container">
                            <Cart cart={cart}></Cart>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shop;