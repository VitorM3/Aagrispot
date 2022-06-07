import { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from '../components/Layout';
import CreateMatrix from '../pages/matrice/create';
import  HomeMatrice  from '../pages/matrice/home';

export const RouterGeneral = () => {
    return (
        <BrowserRouter>
        <Layout>
        <Routes>
                <Route path='/' element={<HomeMatrice />} />
                <Route path='/matrix/create' element={<CreateMatrix/>} />
            </Routes>
        </Layout>
            

        </BrowserRouter>
    );
}