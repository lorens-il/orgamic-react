import {FC} from 'react';
import {BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from '../header/Header';
import Footer from '../footer/Footer';
import ProductPage from '../pages/productPage/ProductPage';
import AboutUsPage from '../pages/aboutPage/AboutPage';
import Cart from '../pages/cart/Cart';

const App: FC = () => {
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path='/' element={<ProductPage />}/>
                <Route path='about' element={<AboutUsPage/>}/>
                <Route path='cart' element={<Cart/>}/>
            </Routes>
            <Footer/>
        </BrowserRouter>
    );
};

export default App;