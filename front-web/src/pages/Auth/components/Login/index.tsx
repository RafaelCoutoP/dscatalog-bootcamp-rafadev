import React from 'react';
import { Link } from 'react-router-dom';
import ButtonIcon from '../../../../core/components/ButtonIcon';
import AuthCard from '../Card';
import './styles.scss';

const Login = () => {
    return (
        <AuthCard title="login">
          <form className="login-form">  
             <input 
             type="email" 
             className="form-control input-base margin-bottom-30"
             placeholder="Email"
             />
            <input 
             type="password" 
             className="form-control input-base"
             placeholder="Senhar"
             />
             <Link to="/admin/auth/recover" className="login-link-recover">
                 Esqueci a senha?
             </Link>
            <div className="login-submit">
              <ButtonIcon text="Logar" />
            </div>
            <div className="text-center">
                <span className="not-registered">
                    Não tem Cadastro?
                </span>
            <Link to="/admin/auth/register" className="login-link-register">
                CADASTRAR
            </Link>
            </div>
          </form>
        </AuthCard>
    )
}

export default Login;