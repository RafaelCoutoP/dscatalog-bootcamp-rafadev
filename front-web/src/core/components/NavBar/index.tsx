import React, { useEffect, useState } from 'react';
import './styles.scss';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { getAccessToken, logout } from '../../utils/auth';


const NavBar = () => {
    
    const [currentUser, setCurrentUser] = useState('');
    const location = useLocation();  

    // verifica toda vez que mudar de local se o usuario está logado monitorando o token dele
    useEffect(() => {
        const currenUserData = getAccessToken();
        setCurrentUser(currenUserData.user_name);
    },[location]);

    const handleLogout = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        event.preventDefault();
        logout();
    }

    return (
        // navLink ativa automaticamente a class css active 
        //tag para dar mais semantica, tem a mesma função do div porem voltado a barra de navegação
        <nav className="row bg-primary main-nav">
            <div className="col-3">
                <Link to="/" className="nav-logo-text">
                    <h4>DS Catalog</h4>
                </Link>
            </div>
            <div className="col-6" /* offset da recur a esquerda em relação as 12 colunas*/>
                <ul className="main-menu">
                    <li>
                        <NavLink to="/" exact className="nav-link">
                            HOME
                      </NavLink>
                    </li>
                    <li>
                        <NavLink to="/products" className="nav-link">
                            CÁTALOGO
                      </NavLink>
                    </li>
                    <li>
                        <NavLink to="/admin" className="nav-link">
                            ADMIN
                      </NavLink>
                    </li>
                </ul>
            </div>
            <div className="col-3 text-right">
                { currentUser && (
                    // <>fragment</> = divisão logica que não vai adicionar nada no HTML e o browser não consegue enchergar
                    <>  
                        {currentUser}
                        <a 
                        href="#logout" 
                        className="nav-link active d-inline"
                        onClick={handleLogout}
                        >
                            LOGOUT  
                        </a>
                    </>
                )}
                { !currentUser && (
                    <Link to="/auth/login" className="nav-link active">
                        LOGIN
                    </Link>
                )}
            </div>
        </nav>
    )
};

export default NavBar;