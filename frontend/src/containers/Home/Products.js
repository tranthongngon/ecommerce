import React, {useEffect} from 'react';
import carServices from '../../core/services/carServices';
import Product from './Product/Product';
import { getProdcuts } from '../../store/actions/productsAction';
import {connect} from 'react-redux';

const Products = ({getProductsCar,dataProducts}) => {
    const fetchDataProducts = async () => {
        await carServices.getCars().then(res => {
            getProductsCar(res.data);
        }).catch(err => console.log(err));
    }
    useEffect(() => {
        fetchDataProducts();
    }, []);

    return (
        <div className='list-products flex-box flex-box-4i'>
            {dataProducts.map((prod,index) => (
                <div className='list-item' key={index}>
                    <Product productData={prod}/>
                </div>
            ))}
        </div>
    );
}



const mapDispatchToProps = dispatch => {
    return {
        getProductsCar: products => {
            dispatch(getProdcuts(products));
        }
    }
}

const mapStateToProps = state => {
    return {
        dataProducts: state.productsReducer.products,
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Products);
