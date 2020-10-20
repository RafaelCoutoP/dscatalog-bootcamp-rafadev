import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from './components/NavbarAdmin';
import Products from './components/Products';
import './styles.scss'


const Admin = () => (
    <div className="admin-container">
        <Navbar />
        <div className="admin-content">
            <Switch>
                <Route path="/admin/products">
                    <Products />
                </Route>
                <Route path="/admin/Categories">
                    <h1>Categorias</h1>
                </Route>
                <Route path="/admin/Users">
                    <h1> Users</h1>
                </Route>
            </Switch>
        </div>
    </div>
);

export default Admin;