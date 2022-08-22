import React from "react";
import carServices from "../../core/services/carServices";
import dataCountry from "../../core/data/dataCountry";
import {Link} from 'react-router-dom'
import {ReactComponent as Edit} from '../../assets/icon/edit.svg';
import {ReactComponent as Trash} from '../../assets/icon/trash.svg';
import {ReactComponent as View} from '../../assets/icon/view.svg';

const Displaydata = ({ carsDatabroard, fetchCars ,fnSetTypeAction , displayF}) => {
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
    const editCar = (id) => {
        carServices.getOneCar(id).then(res => console.log(res.data))
        .catch(err => console.log(err));
        fnSetTypeAction('edit');
        displayF();
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
                            <td> {car.price} </td>
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
                                    <button data-edit={car.id} className="btn-action btn-edit" onClick={() => editCar(car.id)} ><Edit/></button>
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

export default Displaydata;
