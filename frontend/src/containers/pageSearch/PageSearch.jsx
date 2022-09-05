import React from 'react';
import { useParams,useSearchParams } from 'react-router-dom';
import { useState,useEffect } from 'react';
import productServices from '../../core/services/productServices';
import Product from '../Home/Product/Product';
import Loading from '../../core/common/loading/Loading.jsx';
import * as searchAction from '../../store/actions/searchAction';
import { connect } from 'react-redux';
import './page-search.css'
import Pagination from '../../core/common/pagination/Pagination';

const PageSearch = ({getSearchParams,paramsFilterS,postPerPage,currentPage,setPageNumber,resetParams}) => {
    const params = useParams().params;
    const [searchProduct, setSearchProduct] = useState([]);
    const [isLoading, setIsLoading] = useState();
    const [searchParams, setSearchParams] = useSearchParams();

    const lastPost = currentPage * postPerPage;
    const firtPost = lastPost - postPerPage;
    const totalPost = searchProduct.length;
    const currentPost = searchProduct.slice(firtPost,lastPost);


    const resetForm = () => {
        const formTrademark = document.getElementById('form-trademark');
        const formCountry = document.getElementById('form-country');
        const formPrice = document.getElementById('form-price');

        const arrayForms = [formTrademark,formCountry,formPrice];
        for (const iterator of arrayForms) {
            if(iterator){
                iterator.reset();
            }
        }
    }

    const fetchsSearchProducts = () => {
        setIsLoading(true);
        resetForm();
        productServices.quickSearch(params)
        .then(res => {
            setTimeout(() => {
                setSearchProduct(res.data);
                setIsLoading(false);
                setPageNumber(1)
            }, 200);
        }).catch(err => {
            console.log(err);
        });
    }
    const fetchsSearchFilter = (parmasFilter) => {
        setIsLoading(true)
        productServices.searchFilter(parmasFilter)
        .then(res => {
            setTimeout(() => {
                setSearchProduct(res.data);
                setIsLoading(false);
                setPageNumber(1)
            }, 200);
        }).catch(err => {
            console.log(err);
        })
    }
    useEffect(() => {
        fetchsSearchProducts();
    }, [params]);

    const onChangeCheckbox = e => {
        let arrayParams = [...paramsFilterS];
        if(e.target.checked) {
            getSearchParams(`${e.target.dataset.search}=${e.target.value}`,true);
            arrayParams.push(`${e.target.dataset.search}=${e.target.value}`)
        }else{
            getSearchParams(`${e.target.dataset.search}=${e.target.value}`,false)
            for (let i = 0; i < arrayParams.length; i++) {
                if(arrayParams[i] === `${e.target.dataset.search}=${e.target.value}`) {
                    arrayParams.splice(i,1);
                }
            }
        }
        setSearchParams({"":[...new Set(arrayParams)].join("&")})
        fetchsSearchFilter([...new Set(arrayParams)].join("&"));
    }

    const onApllyPrice = () => {
        let arrayParams = [...paramsFilterS];
        const priceForm = document.getElementById("price-from");
        const priceTo = document.getElementById("price-to");
        if(priceForm.value !== "") {
            getSearchParams(`${priceForm.dataset.search}=${priceForm.value}`,true);
            arrayParams.push(`${priceForm.dataset.search}=${priceForm.value}`);
        }
        if(priceTo.value !== "") {
            getSearchParams(`${priceTo.dataset.search}=${priceTo.value}`,true);
            arrayParams.push(`${priceTo.dataset.search}=${priceTo.value}`);
        }
        setSearchParams({"":[...new Set(arrayParams)].join("&")})
        fetchsSearchFilter([...new Set(arrayParams)].join("&")); 
    }

    const resetFilters = () => {
        resetForm();
        resetParams();
        getSearchParams(`q=${params}`,true);
        fetchsSearchProducts(params);
        setSearchParams({"":""});
    }

    return (
        <div className='container page-search'>
            {isLoading ? <Loading/> : ""}
            {
                searchProduct.length > 0 ? (
                    <div className='search-wrap flex-box'>
                        <div className='search-filter' id="search-filter">
                            <div className='search-filter-tittle'>
                                <h2>Search Filters</h2>
                            </div>
                            <div className='search-filter-wrap'>
                                <div className='trademark item-filter'>
                                    <h3 className='trademark-title title-child-filter'>Trademark</h3>
                                    <form id="form-trademark">
                                        <div className="form-group-filter">
                                            <input type="checkbox" id="Volkswagen" value="Volkswagen" data-search="trademark" onChange={e => onChangeCheckbox(e)}/>
                                            <label htmlFor="Volkswagen">Volkswagen</label>
                                        </div>
                                        <div className="form-group-filter">
                                            <input type="checkbox" id="Fiat" value="Fiat" data-search="trademark" onChange={e => onChangeCheckbox(e)}/>
                                            <label htmlFor="Fiat">Fiat</label>
                                        </div>
                                        <div className="form-group-filter">
                                            <input type="checkbox" id="General-Motors" value="General-Motors" data-search="trademark" onChange={e => onChangeCheckbox(e)}/>
                                            <label htmlFor="General-Motors">General Motors</label>
                                        </div>
                                        <div className="form-group-filter">
                                            <input type="checkbox" id="BMW" value="BMW" data-search="trademark" onChange={e => onChangeCheckbox(e)}/>
                                            <label htmlFor="BMW">BMW</label>
                                        </div>
                                        <div className="form-group-filter">
                                            <input type="checkbox" id="Toyota" value="Toyota" data-search="trademark" onChange={e => onChangeCheckbox(e)}/>
                                            <label htmlFor="Toyota">Toyota</label>
                                        </div>
                                        <div className="form-group-filter">
                                            <input type="checkbox" id="Hyundai" value="Hyundai" data-search="trademark" onChange={e => onChangeCheckbox(e)}/>
                                            <label htmlFor="Hyundai">Hyundai</label>
                                        </div>
                                    </form>
                                </div>
                                <div className='conutry item-filter'>
                                    <h3 className='trademark-title title-child-filter'>Country</h3>
                                    <form id="form-country">
                                        <div className="form-group-filter">
                                            <input type="checkbox" id="US" data-search="country" value="US" onChange={e => {onChangeCheckbox(e)}}/>
                                            <label htmlFor="US">United States</label>
                                        </div>
                                        <div className="form-group-filter">
                                            <input type="checkbox" id="GB" data-search="country" value="GB" onChange={e => onChangeCheckbox(e)}/>
                                            <label htmlFor="GB">United Kingdom</label>
                                        </div>
                                        <div className="form-group-filter">
                                            <input type="checkbox" id="DE" data-search="country" value="DE" onChange={e => onChangeCheckbox(e)}/>
                                            <label htmlFor="DE">Germany</label>
                                        </div>
                                        <div className="form-group-filter">
                                            <input type="checkbox" id="IT" data-search="country" value="IT" onChange={e => onChangeCheckbox(e)}/>
                                            <label htmlFor="IT">Italy</label>
                                        </div>
                                        <div className="form-group-filter">
                                            <input type="checkbox" id="JP" data-search="country" value="JP" onChange={e => onChangeCheckbox(e)}/>
                                            <label htmlFor="JP">Japan</label>
                                        </div>
                                        <div className="form-group-filter">
                                            <input type="checkbox" id="KR" data-search="country" value="KR" onChange={e => onChangeCheckbox(e)}/>
                                            <label htmlFor="KR">Korea</label>
                                        </div>
                                    </form>
                                </div>
                                <div className='price item-filter'>
                                    <h3 className='trademark-title title-child-filter'>Price Range</h3>
                                    <form id="form-price" className='form-price-filter flex-space-20 flex-box-2i'>
                                        <div className="form-group-filter">
                                            <input type="text" id="price-from" data-search="price_gte" placeholder='$ from'/>
                                        </div>
                                        <div className="form-group-filter">
                                            <input type="text" id="price-to" data-search="price_lte" placeholder='$ to'/>
                                        </div>
                                        <div className="form-group-filter">
                                            <button onClick={e => {e.preventDefault();onApllyPrice()}} className='btn btn-search-price'>Apply</button>
                                        </div>
                                    </form>
                                </div>
                                <div className='price item-filter'>
                                    <h3 className='trademark-title title-child-filter'>Clear Filter</h3>
                                    <button className='btn btn-clear' onClick={e => {e.preventDefault();resetFilters()}}>Clear All</button>
                                </div>
                            </div>
                        </div>
                        <div className='search-result'>
                            <div className='page-searh-tittle'>
                                <h2>Searh result for: <span>"{params}"</span></h2>
                            </div>
                            <div className='flex-box flex-box-3i flex-space-40'>
                                {currentPost.map((product,index) => <Product productData={product} key={index}/>)}
                            </div>
                            {searchProduct.length > postPerPage ? <Pagination totalPost={totalPost} postPerPage={postPerPage} currentPage={currentPage} setPageNumber={setPageNumber}/>:''}
                        </div>
                    </div>
                ): <div className='search-not-found'>
                    <h2 className='search-not-found-title'>
                        No results were found
                    </h2>
                    <p>
                        Try using more generic keywords
                    </p>
                </div>
            }
        </div>
    );
}

const mapStateToProps = state => {
    return {
        paramsFilterS: state.searchReducer.params,
        currentPage: state.searchReducer.currentPage,
        postPerPage: state.searchReducer.postPerPage,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        getSearchParams: (param,status) => {
            dispatch(searchAction.setSearchParams(param,status))
        },
        setPageNumber: number => {
            dispatch(searchAction.setPageNumber(number))
        },
        resetParams: () => {
            dispatch(searchAction.resetParams())
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(PageSearch);
