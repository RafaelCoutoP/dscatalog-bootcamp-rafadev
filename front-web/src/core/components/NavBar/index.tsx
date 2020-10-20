import React from 'react';
import './styles.scss';
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => (
    // navLink ativa automaticamente a class css active 
    //tag para dar mais semantica, tem a mesma função do div porem voltado a barra de navegação
    <nav className="row bg-primary main-nav">
        <div className="col-2">
            <Link to="/" className="nav-logo-text">
                <h4>DS Catalog</h4>
            </Link>
        </div>
        <div className="col-6 offset-2" /* offset-2 deu recur a esquerda em relação as 12 colunas*/>
            <ul className="main-menu">
                <li>
                    <NavLink to="/"  exact>
                        HOME
                  </NavLink>
                </li>
                <li>
                    <NavLink to="/products" >
                        CÁTALOGO
                  </NavLink>
                </li>
                <li>
                    <NavLink to="/admin" >
                        ADMIN
                  </NavLink>
                </li>
            </ul>
        </div>
    </nav>
);

export default NavBar;