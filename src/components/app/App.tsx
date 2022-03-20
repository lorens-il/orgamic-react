import {FC} from 'react';
import {BrowserRouter, Route, Routes } from 'react-router-dom';
import ProductPage from '../pages/productPage/ProductPage';

const App: FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<ProductPage />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App;