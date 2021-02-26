import React from 'react';
import logo from '../../images/logo.png';
import './Header.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
    return (
        <div className="header">
            <div className="logo">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <img src={logo} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="menu">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <nav>
                                <a href="/shop">Shop</a>
                                <a href="/review">Order Review</a>
                                <a href="/anage">Manage Inventory here</a>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;