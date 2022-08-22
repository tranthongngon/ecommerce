import { createContext, useState } from 'react';

export const Cart = createContext();

const Context  = ({children}) => {
    const [cart, setcart] = useState([]);

    return <Cart.Provider value={{cart, setcart}}> {children} </Cart.Provider>
}

export default Context;