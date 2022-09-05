import React from "react";
import carServices from "../../core/services/productServices";
import dataCountry from "../../core/data/dataCountry";
import {Link} from 'react-router-dom'
import {ReactComponent as Edit} from '../../assets/icon/edit.svg';
import {ReactComponent as Trash} from '../../assets/icon/trash.svg';
import {ReactComponent as View} from '../../assets/icon/view.svg';
import * as databoardActions from '../../store/actions/databoardActions';
import {connect} from 'react-redux';

const Displaydata = ({ carsDatabroard, fetchCars , displayForm, getProductEdit, getDataForm}) => {
    const deleteCar = id => {
        carServices
            .deleteCar(id)
            .then(res => {
                console.log(res.data);
                fetchCars();
            })
            .catch(err => {
                console.log(err);
            });
    };
    const editCar = (car) => {
        for (const key in car) {
            getDataForm(key,car[key])
        }
        getProductEdit(car)
        displayForm('edit',car);
    }
    return (
        <table className="table-cars">
            <thead>
                <tr>
                    <th style={{width:"50px"}}>STT</th>
                    <th>Image</th>
                    <th style={{width:"100px"}}>Name</th>
                    <th style={{width:"80px"}}>Price</th>
                    <th style={{width:"80px"}}>Year Produced</th>
                    <th style={{width:"100px"}}>Country</th>
                    <th>Description</th>
                    <th style={{width:"100px"}}>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    carsDatabroard.map((car, index) => (
                        <tr key={index}>
                            <td> {index + 1}</td>          
                            <td> <img src={car.urlImg} alt={car.name} className="img-td"></img></td>
                            <td> {car.name} </td>
                            <td> {Number(car.price).toLocaleString('en-US',{
                            style:'currency',
                            currency:'USD',
                        })} </td>
                            <td> {car.yearProduced} </td>
                            {dataCountry.filter(c => c.code === car.country).map((n,index)=>(
                                <td key={index}>{n.name}</td>
                            ))}
                            <td> 
                                <p className="desc">
                                    {car.description}
                                </p>
                            </td>
                            <td>
                                <div className="action flex-box">
                                    <button data-view={car.id} className="btn-action btn-view" ><Link to="/prodcut-detail"><View/></Link></button>
                                    <button data-edit={car.id} className="btn-action btn-edit" onClick={() => editCar(car)} ><Edit/></button>
                                    <button data-delete={car.id} className="btn-action btn-trash" onClick={() => deleteCar(car.id)}><Trash/></button>
                                </div>
                            </td>
                        </tr>
                    ))
                }               
            </tbody>
        </table>
    );
};

const mapStateToProps = state => {
    return {

    }
}

const mapDispatchToProps =  dispatch => {
    return {
        getProductEdit: product => {
            dispatch(databoardActions.getProductEdit(product))
        },
        getDataForm: (nameF, valueF) => {
            dispatch(databoardActions.getDataForm(nameF,valueF))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Displaydata);
