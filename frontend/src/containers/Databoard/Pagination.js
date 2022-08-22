import React from 'react';
import { ReactComponent as Prev } from '../../assets/icon/arrow-left.svg';
import { ReactComponent as Next } from '../../assets/icon/arrow-right.svg';

const Pagination = ({totalPost, postPerPage, currentPage ,setPageNumber}) => {
    const totalPagination = Math.ceil(totalPost/postPerPage)
    const arrayPagination = [];
    for (let i = 1; i <= totalPagination ;i++) {
       arrayPagination.push(i)
    }
    return (
        <div className='pagiantion-parent flex-box'>
            <button className='btn-pagination btn-pre' onClick={(e) => {e.preventDefault();
                    setPageNumber(currentPage - 1 )} } disabled = {currentPage === 1}>
                <Prev/>
            </button>
            <ul className='pagination flex-box'>
                {arrayPagination.map((number, index) => (
                    <li className={currentPage === number ? 'pagination-item active' : 'pagination-item'} key={index}
                    onClick={(e) => {e.preventDefault();
                    setPageNumber(number)} } >
                        {number}
                    </li>
                ))}
            </ul>
            <button className='btn-pagination btn-next' onClick={(e) => {e.preventDefault();
                    setPageNumber(currentPage + 1 )} } disabled = {currentPage === totalPagination}>
                <Next/>
            </button>
        </div>
    );
}

export default Pagination;
