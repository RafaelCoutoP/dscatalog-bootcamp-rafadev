import React from 'react';
import './styles.scss';
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => (
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
                    <NavLink to="/" activeClassName="active" exact>
                        HOME
                  </NavLink>
                </li>
                <li>
                    <NavLink to="/products" activeClassName="active">
                        CÁTALOGO
                  </NavLink>
                </li>
                <li>
                    <NavLink to="/admin" activeClassName="active">
                        ADMIN
                  </NavLink>
                </li>
            </ul>
        </div>
    </nav>
);

export default NavBar;