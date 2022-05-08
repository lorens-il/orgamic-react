import {FC, lazy} from 'react';
import {BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from '../header/Header';
import Footer from '../footer/Footer';
import AboutUsPage from '../pages/aboutPage/AboutPage';
import Page404 from '../pages/page404/Page404';

import "../../styles/link.sass";

const ProductPage = lazy(() => import("../pages/productPage/ProductPage"));
const Cart = lazy(() => import("../pages/cart/Cart"));

const App: FC = () => {
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path='/' element={<ProductPage />}/>
                <Route path='about' element={<AboutUsPage/>}/>
                <Route path='cart' element={<Cart/>}/>
                <Route path='*' element={<Page404/>}/>
            </Routes>
            <Footer/>
        </BrowserRouter>
    );
};

export default App;