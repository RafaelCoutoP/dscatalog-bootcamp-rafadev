import React, { useEffect, useState } from 'react';
import './styles.scss';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { getAccessToken, logout } from '../../utils/auth';


const NavBar = () => {
    
    const [currentUser, setCurrentUser] = useState('');
    const location = useLocation();  

    useEffect(() => {
        const currenUserData = getAccessToken();
        setCurrentUser(currenUserData.user_name);
    },[location]);

    const handleLogout = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        event.preventDefault();
        logout();
    }

    return (
        <nav className="row bg-primary main-nav">
            <div className="col-3">
                <Link to="/" className="nav-logo-text">
                    <h4>DS Catalog</h4>
                </Link>
            </div>
            <div className="col-6">
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