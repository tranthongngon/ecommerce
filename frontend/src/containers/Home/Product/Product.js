import React, {useContext} from 'react';
import { Cart } from '../../../context';
import './product.css';
import * as cartAction from '../../../store/actions/cartActions';
import {connect} from 'react-redux'

const Product = ({productData,addToCart}) => {
    return (
        <div className='item-product'>
            <div className='product-image'>
                <img src ={productData.urlImg} alt ={productData.name}/>
            </div>
            <div className='product-content'>
                <h3 className='product-name'>
                    {productData.name}
                </h3>
                <div className='product-meta flex-box'>
                    <p className='product-country'>
                        {productData.country}
                    </p>
                    <p className='product-year-produced'>
                        {productData.yearProduced}
                    </p>
                </div>
                <div className='product-footer flex-box'>
                    <p className='product-price'>
                        {productData.price}
                    </p>
                    <button className='btn-add-to-cart' onClick={productData.isStock ==='true' ? (() => addToCart(productData)): ''}>
                            {productData.isStock === "true" ? 'Ad To Cart' : 'Out of stock'}
                    </button>
                </div>
            </div>
        </div>
    );
}

const mapDispatchToProps = dispatch => {
    return {
        addToCart: (car) => {
            dispatch(cartAction.addToCart(car))
        }
    }
}

export default connect(null,mapDispatchToProps)(Product);