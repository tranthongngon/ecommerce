import React from 'react';
import { ReactComponent as Prev } from '../../../assets/icon/arrow-left.svg';
import { ReactComponent as Next } from '../../../assets/icon/arrow-right.svg';

const Pagination = ({totalPost, postPerPage, currentPage ,setPageNumber}) => {
    const totalPagination = Math.ceil(totalPost/postPerPage)
    const arrayPagination = [];
    for (let i = 1; i <= totalPagination ;i++) {
       arrayPagination.push(i)
    }
    const displayNone = {
        display: 'none'
    }
    const displayB = {
        display: 'flex'
    }
    return (
        <div className='pagiantion-parent flex-box'>
            <button className='btn-pagination btn-pre' onClick={(e) => {e.preventDefault();
                    setPageNumber(currentPage - 1)} } disabled = {currentPage === 1}>
                <Prev/>
            </button>
            <ul className='pagination flex-box'>
                {arrayPagination.map((number, index) => {
                    if(currentPage === number || currentPage ===  number - 1 || currentPage === number + 1 || number === 1 || number === totalPagination) {
                        return <li className={currentPage === number ? 'pagination-item active' : 'pagination-item'} key={index}
                        onClick={(e) => {e.preventDefault();
                        setPageNumber(number)} } >
                            {number}
                        </li>
                    }else {
                        return <li className='pagination-item pagination-item-dot' style={currentPage === number + 2 || currentPage === number - 2 ? displayB : displayNone} key={index}>...</li>
                    }
                })}
            </ul>
            <button className='btn-pagination btn-next' onClick={(e) => {e.preventDefault();
                    setPageNumber(currentPage + 1)} } disabled = {currentPage === totalPagination}>
                <Next/>
            </button>
        </div>
    );
}


export default Pagination;
