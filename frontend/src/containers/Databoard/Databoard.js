import React, {useEffect, useState} from 'react';
import productServices from '../../core/services/productServices.js';
import "./dataBoard.css";
import Displaydata from './DisplayData.js';
import Addeditdata from './AddEditData.js';
import Pagination from '../../core/common/pagination/Pagination';
import * as databoardActions from '../../store/actions/databoardActions';
import {connect} from 'react-redux';


const Databoard = ({getDataboardProduct,databoardProducts,currentPage,postPerPage,totalPost,setPageNumber,setTypeForm}) => {
    let blur = document.querySelector('#blur');
    let formCar = document.querySelector('#form-inner');
     //get current post
     const lastPost = currentPage * postPerPage;
     const firtPost = lastPost - postPerPage;
     const currentPost = databoardProducts.slice(firtPost,lastPost);

    const displayF = () => {
        blur.classList.add('is-show');
        formCar.classList.add('is-show');
    }
    const hiddenF = () => {
        blur.classList.remove('is-show');
        formCar.classList.remove('is-show');
    }
    const displayForm = (type,productEdit) => {
        setTypeForm(type)
        const form = document.getElementById("form-add-edit-product");
        if(type === 'add') {
            form.reset();
            displayF();
        }else if(type === 'edit') {
            form.reset();
            for (const iterator of form.elements) {
                for (const key in productEdit) {
                    if (key === iterator.name) {
                        const ipnutField = document.getElementById(iterator.getAttribute('id'));
                        ipnutField.value = productEdit[key]
                    }
                }
            }
            displayF(); 
        }
        
    }
    const hiddenForm = () => {
        hiddenF();
    }

    const fetchCars = () => {
        productServices.getProducts().then(res => {
          getDataboardProduct(res.data);
        }).catch(err => {
          console.log(err);
        })
      }
    useEffect(() => {
        fetchCars();
    }, []);
    
      
    return (
        <div className="site-databoard">
            <div className='container'>
                <div className='top-databoard flex-box'>
                <Pagination totalPost={totalPost} postPerPage={postPerPage} currentPage={currentPage} setPageNumber={setPageNumber}/>
                    <button className='display-form' onClick={() => {displayForm('add')}}>
                        add car
                    </button>
                </div>
                <div className="list-cas">
                    <Displaydata carsDatabroard={currentPost} fetchCars = {fetchCars} displayForm = {displayForm}/>
                </div>
                <div className='form-inner' id='form-inner'>
                    <Addeditdata hiddenForm = {hiddenForm} fetchCars={fetchCars}/>
                </div>
                <div className='blur' id='blur'></div>
            </div>
            
        </div>
    );
}
const mapStateToProps = state => {
    return {
        databoardProducts: state.databoardReducer.databoardProducts,
        totalPost: state.databoardReducer.databoardProducts.length,
        currentPage: state.databoardReducer.currentPage,
        postPerPage: state.databoardReducer.postPerPage,
        productEdit: state.databoardReducer.productEdit
    }
}
const mapDispatchToProps = dispatch => {
    return {
        getDataboardProduct: products => {
            console.log('databoard',products);
            dispatch(databoardActions.getProdcuts(products));
        },
        setTypeForm: type => {
            dispatch(databoardActions.setTypeForm(type))
        },
        setPageNumber: number => {
            dispatch(databoardActions.setPageNumber(number));
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Databoard);

