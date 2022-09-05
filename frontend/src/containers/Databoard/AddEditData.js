import { ReactComponent as Close } from '../../assets/icon/close.svg';
import dataCountry from '../../core/data/dataCountry.js';
import productController from '../controller/productController';
import * as databoardActions from '../../store/actions/databoardActions';
import {connect} from 'react-redux';

const Addeditdata = ({hiddenForm,fetchCars,typeForm,productEdit,getDataForm,dataForm}) => {
    const addCar = (e) => {
        e.preventDefault();
        productController.postProducts(dataForm.name,dataForm.urlImg, dataForm.price, dataForm.isStock === "" ? "true":dataForm.isStock, dataForm.description, dataForm.yearProduced, dataForm.country,dataForm.trademark)
        .then(res => {
            document.getElementById("form-add-edit-product").reset();
            fetchCars();
            for (const key in dataForm) {
                getDataForm(key,"")
            }
        }).catch(err => console.log(err));
    }
    const editProduct = (e) => {
        e.preventDefault();
        productController.putProduct(dataForm.name,dataForm.urlImg, dataForm.price, dataForm.isStock === "" ? "true":dataForm.isStock, dataForm.description, dataForm.yearProduced, dataForm.country,dataForm.trademark,productEdit.id)
        .then(res => {
            fetchCars();
        }).catch(err => console.log(err));
    }

    return (
        <div className='form-parent'>
            <button className='hidden-form' onClick={hiddenForm}>
                <Close/>
            </button>
            <div className='title-form'>
                <h3>
                    {typeForm === 'edit' ? 'Edit Car':'Add Car'}
                </h3>
            </div>
            <form className='form-product' id ="form-add-edit-product">
                <div className='form-group'>
                    <input type="text" id="name-product" name="name" placeholder='name car' onChange={(e) => {getDataForm('name',e.target.value)}}/>
                </div>
                <div className='form-group'>
                    <input type="text" id="url-img-product" name="urlImg" placeholder='link image car'  onChange={(e) => {getDataForm('urlImg',e.target.value)}}/>
                </div>
                <div className='form-group'>
                    <input type="text" id="price-product" name="price" placeholder='price'  onChange={(e) => {getDataForm('price',e.target.value)}}/>
                </div>
                <div className='form-group'>
                    <select type="text" id="is-stock-product" name='isStock'  onChange={(e) => {getDataForm('isStock',e.target.value)}}>
                        <option value="true">Stocking</option>
                        <option value="false">Out of stock</option>
                    </select>
                </div>
                <div className='form-group'>
                    <input type="text" id="year-produced-product" name="yearProduced" placeholder='year produced'  onChange={(e) => {getDataForm('yearProduced',e.target.value)}}/>
                </div>
                <div className='form-group'>
                    <select type="text" id="country-product" name="country"  onChange={(e) => {getDataForm('country',e.target.value)}}>
                        {dataCountry.map((country, index) => (
                            <option key={index} value={country.code}>
                                {country.name}
                            </option>))}
                    </select>
                </div>
                <div className='form-group'>
                    <input type="text" id="trademark-product" name="trademark" placeholder='trademark product'  onChange={(e) => {getDataForm('trademark',e.target.value)}}/>
                </div>
                <div className='form-group'>
                    <textarea type="text" id="description-product" name="description" placeholder='description' rows="6" onChange={(e) => {getDataForm('description',e.target.value)}}></textarea>
                </div>
                <div className='form-group'>
                    {typeForm === "add" ? (<button className='btn-add-car' onClick={addCar}>
                        Add Car
                    </button>) : (<button className='btn-edit-car' onClick={editProduct}>
                        Edit Car
                    </button>)}
                </div>
            </form>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        typeForm : state.databoardReducer.type,
        productEdit: state.databoardReducer.productEdit,
        dataForm: state.databoardReducer.dataForm
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getDataForm: (nameF, valueF) => {
            dispatch(databoardActions.getDataForm(nameF,valueF))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Addeditdata);
