import jwtDecode from 'jwt-decode';
export const CLIENT_ID = 'dscatalog';
export const CLIENT_SECRET = 'dscatalog123';

type LoginResponse ={
    access_token: string;
    token_type: string;
    expires_in: number;
    scope: string;
    userFirstName: string;
    userId: number;
}

export type Role= 'ROLE_OPERATOR' | 'ROLE_ADMIN';

type AccessToken ={
  exp: number,
  user_name: string,
  authorities: Role[]
}

export const saveSessionData = (loginResponse: LoginResponse) => {
    localStorage.setItem('authData', JSON.stringify(loginResponse)); // transformando um obj par string
}

export const getSessionData = ()=> {             //operador de coalescência nula (retorna tudo a direita quando a esquerda for null || undefined)     
    const sessionData = localStorage.getItem('authData') ?? '{}';
    const parsedSessionData = JSON.parse(sessionData);
    
    return parsedSessionData as LoginResponse; // está transformando o "any" em uma tipo de dado conhecido
}

export const getAccessToken = () => {
    const sessionData = getSessionData();

    try{            // try necessario para capturar a exceção e lançar um objeto vazio para a aplicação rodar sem problemas
        const tokenDecode = jwtDecode(sessionData.access_token);
        return tokenDecode as AccessToken;
    } catch (error){
        return {} as AccessToken;
    }
}

export const isTokenValid = () =>{
    const { exp } = getAccessToken();
    
    if(Date.now() <= exp * 1000){
        return true;
    }

    return false;
}

export const isAuthenticated = () => {
    const sessionData = getSessionData();

    return sessionData.access_token && isTokenValid();
}

export const isAllowedByRole = (routeRoles: Role[] = []) => {
    if(routeRoles.length === 0) {
        return true;
    }
    
    const { authorities } = getAccessToken();

    return routeRoles.some(role => authorities?.includes(role));
}



