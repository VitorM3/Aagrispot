import { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import  HomeMatrice  from '../pages/matrice/home';

export const RouterGeneral = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<HomeMatrice />} />
            </Routes>

        </BrowserRouter>
    );
}