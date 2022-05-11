import { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CreateMatrice from '../pages/matrice/create';
import  HomeMatrice  from '../pages/matrice/home';

export const RouterGeneral = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<HomeMatrice />} />
                <Route path='/matrice/create' element={<CreateMatrice/>} />
            </Routes>

        </BrowserRouter>
    );
}