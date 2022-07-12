import {FC, lazy, Suspense} from 'react';
import {BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from '../header/Header';
import Footer from '../footer/Footer';
import AboutUsPage from '../pages/aboutPage/AboutPage';
import Page404 from '../pages/page404/Page404';
import Spinner from '../spinner/Spinner';
import ErrorBoundary from '../errorBoundary/ErrorBoundary';


import '../../styles/index.sass';
import "../../styles/link.sass";
import "../../styles/media.sass";

const ProductPage = lazy(() => import("../pages/productPage/ProductPage"));
const Cart = lazy(() => import("../pages/cart/Cart"));

const App: FC = () => {
    return (
        <BrowserRouter>
            <Header/>
            <Suspense fallback={<Spinner/>}>
                <Routes>
                    <Route 
                        path='/' 
                        element={
                            <ErrorBoundary>
                                <ProductPage/>
                            </ErrorBoundary>
                        }
                        />
                    <Route path='about' element={<AboutUsPage/>}/>
                    <Route 
                        path='cart' 
                        element={
                            <ErrorBoundary>
                                <Cart/>
                            </ErrorBoundary>
                        }
                        />
                    <Route path='*' element={<Page404/>}/>
                </Routes>
            </Suspense>
            <Footer/>
        </BrowserRouter>
    );
};

export default App;