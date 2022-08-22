
import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Databoard from './containers/Databoard/Databoard';
import Home from './containers/Home/Home';
import Header from './components/Header/Header';
import './core/style/common.css'
import CartPage from './containers/Cart/CartPage';


const App = () => {
  return (
      <div className='site-wrapper'>
        <BrowserRouter>
          <Header/>
          <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/databoard' element={<Databoard/>}/>
              <Route path='/cart' element={<CartPage/>}/>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;


