import React from 'react';
import './styles.scss';

const NavBar = () => (
    //tag para dar mais semantica, tem a mesma função do div porem voltado a barra de navegação
    <nav className="row bg-primary main-nav">
        <div className="col-2">
            <a href="link" className="nav-logo-text">
                <h4>DS Catalog</h4>
            </a>
        </div> 
        <div className="col-6 offset-2" /* offset-2 deu recur a esquerda em relação as 12 colunas*/>
            <ul className="main-menu">
                <li>
                    <a href="link" className="active">
                        HOME
                  </a>
                </li>
                <li>
                    <a href="link">
                        CÁTALOGO
                  </a>
                </li>
                <li>
                    <a href="link">
                        ADMIN
                  </a>
                </li>
            </ul>
        </div>
    </nav>
);

export default NavBar;