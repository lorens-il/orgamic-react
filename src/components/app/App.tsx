import {FC} from 'react';
import {BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from '../header/Header';
import Footer from '../footer/Footer';
import ProductPage from '../pages/productPage/ProductPage';

const App: FC = () => {
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path='/' element={<ProductPage />}/>
            </Routes>
            <Footer/>
        </BrowserRouter>
    );
};

export default App;