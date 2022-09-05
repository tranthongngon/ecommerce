import React, {useEffect,useState} from 'react';
import productServices from '../../core/services/productServices';
import Product from './Product/Product';
import { getProdcuts } from '../../store/actions/productsAction';
import {connect} from 'react-redux';
import Loading from '../../core/common/loading/Loading';
import TitleSection from './TitleSection/TitleSection';

const Products = ({getProductsCar,dataProducts}) => {
    const [isLoading, setIsLoading] = useState(false);
    const fetchDataProducts = async () => {
        setIsLoading(true)
        await productServices.getDataByPrice().then(res => {
            setTimeout(() => {
                setIsLoading(false);
                getProductsCar(res.data)
            }, 200);
        }).catch(err => console.log(err));
    }
    useEffect(() => {
        fetchDataProducts();
    }, []);

    return (<div className='section'>
        {isLoading ? <Loading/> : 
            <div className='wrap-section section-top-price'>
                <TitleSection textTitle={'Top price'}/>
                <div className='list-products flex-box flex-box-4i flex-space-30'>
                {dataProducts.map((prod,index) => (
                    <div className='list-item' key={index}>
                        <Product productData={prod}/>
                    </div>
                ))}
                </div>
            </div>
        }
    </div>);
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
