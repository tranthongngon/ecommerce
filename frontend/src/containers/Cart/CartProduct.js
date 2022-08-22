import React from 'react';

const CartProduct = ({cartProduct}) => {
    return (
        <div className='cart-product flex-box'>
            <div className='cart-product-img'>
                <img src={cartProduct.urlImg} alt={cartProduct.name}/>
            </div>
            <div className='cart-product-content flex-box'>
                <h3 className='cart-product-name'>{cartProduct.name}</h3>
                <p className='cart-product-quantity'>quantity:{cartProduct.quantity}</p>
                <p className='cart-product-price'>{cartProduct.price * cartProduct.quantity}$</p>
            </div>
        </div>
    );
}

export default CartProduct;
