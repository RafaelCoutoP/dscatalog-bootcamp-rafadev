import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Form from './Form';
import List from './List';

const Products = () => {

    // cuiado em declarar as ordem das rotas! 
    return (
        <div>
           <Switch>
               <Route path="/admin/products" exact>
                   <List />
               </Route>
               <Route path="/admin/products/:productId">
                    <Form />
               </Route>
           </Switch>
        </div>
    );
}

export default Products;