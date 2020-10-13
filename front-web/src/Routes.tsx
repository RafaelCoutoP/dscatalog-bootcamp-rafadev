import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavBar from './core/components/NavBar';
import Admin from './pages/Admin';
import Catalog from './pages/Catalog';
import ProductDatails from './pages/Catalog/components/ProductDetails';
import Home from './pages/Home';

const Routes = () => (
    <BrowserRouter>
    <NavBar />
        <Switch>
            <Route path="/" exact>
                <Home />
            </Route>
            <Route path="/products" exact> 
                <Catalog />
            </Route>
            <Route path="/products/:productId">
                <ProductDatails />
            </Route>
            <Route path="/admin">
                <Admin />
            </Route>
        </Switch>
    </BrowserRouter>
);

export default Routes;