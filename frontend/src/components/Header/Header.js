import { Link, useNavigate } from 'react-router-dom';
import {useState} from 'react'
import { ReactComponent as CartIcon } from '../../assets/icon/shopping-cart.svg';
import { ReactComponent as Search } from '../../assets/icon/search.svg';
import { ReactComponent as User } from '../../assets/icon/user.svg';
import './header.css';
import {connect} from 'react-redux';
import CartView from '../../containers/Cart/CartView';
import * as searchAction from '../../store/actions/searchAction';


const Header = ({tottalQuantity,getSearchParams,resetParams,paramsFilterS}) => {
    const [isShow, setIsShow] = useState(false);
    const [params, setParams] = useState('');

    const showCartView = () => {
        setIsShow(!isShow);
    }
    const navigate = useNavigate();
    const searchPage = e => {
        e.preventDefault();
        navigate(`/search/${params}`);
    }
    const onChangeSearchField = e => {
        resetParams();
        getSearchParams(`q=${e.target.value}`,true);
        setParams(e.target.value);
    }
    return (
        <div className='site-header'>
            <div className='container'>
                <div className='header-inner flex-box'>
                    <div className='header-section'>
                        <h1 className='site-logo'>
                            <Link to="/">Home</Link>
                        </h1>
                    </div>
                    <div className='header-section flex-box'>
                        <div className='site-search'>
                            <form className='form-search' onSubmit={e => searchPage(e)}>
                                <input type="text" placeholder='search for...' onChange={e => onChangeSearchField(e)}/>
                                <button className='btn-search'>
                                    <Search/>    
                                </button>
                            </form>
                        </div>
                        <div className='site-cart'>
                            <button className='shopping-cart btn-button-header' onClick={showCartView}>
                                <span className='amount-item'>
                                    {tottalQuantity}
                                </span>
                                <CartIcon/>
                            </button>
                            {isShow ? <CartView/> : ''}
                        </div>
                        <div className='site-user'>
                            <button className='user btn-button-header'>
                                <User/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        tottalQuantity: state.cartReducer.cartProducts.length,
        paramsFilterS: state.searchReducer.params
    }
}
const mapDispatchToProps = dispatch => {
    return {
        getSearchParams: (param,status) => {
            dispatch(searchAction.setSearchParams(param,status))
        },
        resetParams: () => {
            dispatch(searchAction.resetParams())
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Header);
