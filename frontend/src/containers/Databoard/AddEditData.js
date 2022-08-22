import React, {useState} from 'react';
import { ReactComponent as Close } from '../../assets/icon/close.svg';
import dataCountry from '../../core/data/dataCountry.js';
import CarController from '../controller/CarController';

const Addeditdata = ({hiddenForm, typeAction,fetchCars}) => {

    const [dataInput, setdataInput] = useState({name:"",linkImage:"", price:"",isStock:"", yearProduced:"", country:"", description:""});

    const addCar = (e) => {
        e.preventDefault();
        CarController.postCar(dataInput.name,dataInput.linkImage, dataInput.price, dataInput.isStock, dataInput.description, dataInput.yearProduced === "" ? "true": dataInput.yearProduced, dataInput.country)
        .then(res => {
            fetchCars();
            setdataInput({name:"",linkImage:"", price:"",isStock:"", yearProduced:"", country:"", description:""});
        })
    }

    return (
        <div className='form-parent'>
            <button className='hidden-form' onClick={hiddenForm}>
                <Close/>
            </button>
            <div className='title-form'>
                <h3>
                    Add Car
                </h3>
            </div>
            <form className='form-car'>
                <div className='form-group'>
                    <input type="text" name="name" placeholder='name car' value={dataInput.name} onChange={(e) => setdataInput({...dataInput, name:e.target.value})}/>
                </div>
                <div className='form-group'>
                    <input type="text" name="url-img" placeholder='link image car' value={dataInput.linkImage} onChange={(e) => setdataInput({...dataInput,linkImage:e.target.value})}/>
                </div>
                <div className='form-group'>
                    <input type="text" name="price" placeholder='price' value={dataInput.price} onChange={(e) => setdataInput({...dataInput,price:e.target.value})}/>
                </div>
                <div className='form-group'>
                    <select type="text" name='is-stock' value={dataInput.isStock} onChange={(e) => setdataInput({...dataInput,isStock:e.target.value})}>
                        <option value="true">Stocking</option>
                        <option value="false">Out of stock</option>
                    </select>
                </div>
                <div className='form-group'>
                    <input type="text" name="year-produced" placeholder='year produced' value={dataInput.yearProduced} onChange={(e) => setdataInput({...dataInput,yearProduced:e.target.value})}/>
                </div>
                <div className='form-group'>
                    <select type="text" name="country" value={dataInput.country} onChange={(e) => setdataInput({...dataInput,country:e.target.value})}>
                        {dataCountry.map((country, index) => (
                            <option key={index} value={country.code}>
                                {country.name}
                            </option>))}
                    </select>
                </div>
                <div className='form-group'>
                    <textarea type="text" name="description" placeholder='description' rows="6" value={dataInput.description} onChange={(e) => setdataInput({...dataInput,description:e.target.value})}></textarea>
                </div>
                <div className='form-group'>
                    {typeAction === "add" ? (<button className='btn-add-car' onClick={addCar}>
                        Add Car
                    </button>) : (<button className='btn-edit-car'>
                        Edit Car
                    </button>)}
                </div>
            </form>
        </div>
    );
}

export default Addeditdata;
