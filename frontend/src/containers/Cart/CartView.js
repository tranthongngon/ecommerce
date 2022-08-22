import React from 'react';
import { Link } from 'react-router-dom';
import './CartView.css';
import {connect} from 'react-redux';
import CartProduct from './CartProduct';

const CartView = ({cartProducts}) => {
    return (
        <div className='cart-container'>
            <h1 className='cart-header'>
                Added Product
            </h1>
            <div className='cart-products'>
                {cartProducts.map((cartProduct,index)=> <CartProduct key={index} cartProduct={cartProduct}/>)}
            </div>
            <div className='cart-bottom'>
                <button className='checkout-page'>
                    <Link to="/cart">View Cart</Link>
                </button>
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        cartProducts: state.cartReducer.cartProducts,
    }
}

export default connect(mapStateToProps)(CartView);
