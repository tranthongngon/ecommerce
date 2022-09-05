import React, {useContext} from 'react';
import { Cart } from '../../../context';
import './product.css';
import * as cartAction from '../../../store/actions/cartActions';
import {connect} from 'react-redux';
import dataCountry from '../../../core/data/dataCountry';

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
                        {dataCountry.filter(c => c.code === productData.country).map((p,index) => p.name)}
                    </p>
                    <p className='product-trademark'>
                        {String(productData.trademark).replace(/-/gi,' ')}
                    </p>
                </div>
                <div className='product-footer flex-box'>
                    <p className='product-price'>
                        {Number(productData.price).toLocaleString('en-US',{
                            style:'currency',
                            currency:'USD',
                        })}
                    </p>
                    <div className='product-button'>
                        <button className='btn-add-to-cart' onClick={() => addToCart(productData)}>
                                {productData.isStock === "true" ? 'Add To Cart' : 'Out of stock'}
                        </button>
                    </div>
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