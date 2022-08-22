import React, {useEffect, useState} from 'react';
import carServices from '../../core/services/carServices.js';
import "./dataBoard.css";
import Displaydata from './DisplayData.js';
import Addeditdata from './AddEditData.js';
import Pagination from './Pagination.js';


const Databoard = () => {
    const [carsDatabroard , setcarsDatabroard ] = useState([]);
    const [typeAction, settypeAction] = useState('');
    let blur = document.querySelector('#blur');
    let formCar = document.querySelector('#form-inner');
     //pagiantion
     const [currentPage, setcurrentPage] = useState(1);
     const [postPerPage] = useState(5);
     //get current post
     const lastPost = currentPage * postPerPage;
     const firtPost = lastPost - postPerPage;
     const totalPost = carsDatabroard.length;
     const currentPost = carsDatabroard.slice(firtPost,lastPost);
     //setpage number
    const setPageNumber = number => setcurrentPage(number);
    const fnSetTypeAction = type => settypeAction(type)

    const displayF = () => {
        blur.classList.add('is-show');
        formCar.classList.add('is-show');
    }
    const hiddenF = () => {
        blur.classList.remove('is-show');
        formCar.classList.remove('is-show');
    }
    const displayForm = (e) => {
        e.preventDefault();
        fnSetTypeAction('add');
        displayF();
    }
    const hiddenForm = (e) => {
        e.preventDefault();
        hiddenF();
    }

    const fetchCars = () => {
        carServices.getCars().then(res => {
          setcarsDatabroard(res.data);
          console.log(res.data);
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
                <Pagination totalPost={totalPost} postPerPage={postPerPage} currentPage={currentPage} setPageNumber={setPageNumber} />
                    <button className='display-form' onClick={displayForm}>
                        add car
                    </button>
                </div>
                <div className="list-cas">
                    <Displaydata carsDatabroard={currentPost} fetchCars = {fetchCars} fnSetTypeAction={fnSetTypeAction} displayF = {displayF}/>
                </div>
                <div className='form-inner' id='form-inner'>
                    <Addeditdata hiddenForm = {hiddenForm} typeAction = {typeAction} fetchCars={fetchCars}/>
                </div>
                <div className='blur' id='blur'></div>
            </div>
            
        </div>
    );
}

export default Databoard;

