import { Link } from 'react-router-dom';
import {useState} from 'react'
import { ReactComponent as CartIcon } from '../../assets/icon/shopping-cart.svg';
import { ReactComponent as Search } from '../../assets/icon/search.svg';
import { ReactComponent as User } from '../../assets/icon/user.svg';
import './header.css';
import {connect} from 'react-redux';
import CartView from '../../containers/Cart/CartView';


const Header = ({tottalQuantity}) => {
    const [isShow, setisShow] = useState(false);

    const showCartView = () => {
        setisShow(!isShow);
        console.log(isShow);
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
                            <input type="text" placeholder='search for...'/>
                            <button className='btn-search'>
                                <Search/>    
                            </button>
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
    }
}

export default connect(mapStateToProps)(Header);
