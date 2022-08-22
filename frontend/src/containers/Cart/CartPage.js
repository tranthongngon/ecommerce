import React, {useState, useEffect, useContext} from 'react';
import Product from '../Home/Product/Product';
import { Cart } from '../../context';

const CartPage = () => {

    const [totalPrice, settotalPrice] = useState();

    const {cart, setcart} = useContext(Cart);
    
    useEffect(() => {
        let a = ["a","ab", "c", "a","b","ab","b",5]
        settotalPrice(cart.reduce((acc,curr) => acc + Number(curr.price),0));
        console.log(a.filter((item, index) => a.indexOf(item) === index),a);

        setcart([...new Map(cart.map((item) => [item["id"], item])).values()]);
        console.log(cart);

        let uniqueObjArray = [
            ...new Map(cart.map((item) => [item["id"], item])).values(),
        ];
        console.log(uniqueObjArray);
    }, []);

    return (
        <div className='cart-page'>
            <h3 className='title-cart'>
                My Cart
            </h3>
            <h4 className='total-price'>
                total: ${totalPrice}
            </h4>
            <div className='list-products flex-box flex-box-4i'>
                {Array.from(new Set(cart)).map((prod,index) => (
                <div className='list-item' key={index}>
                    <Product productData={prod}/>
                </div>
                ))}
            </div>
        </div>
    );
}

export default CartPage;
