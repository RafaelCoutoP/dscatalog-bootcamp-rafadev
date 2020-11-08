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

export const saveSessionData = (loginResponse: LoginResponse) => {
    localStorage.setItem('authData', JSON.stringify(loginResponse)); // transformando um obj par string
}

export const getSessionData = ()=> {             //operador de coalescência nula (retorna tudo a direita quando a esquerda for null || undefined)     
    const sessionData = localStorage.getItem('authData') ?? '{}';
    const parsedSessionData = JSON.parse(sessionData);
    
    return parsedSessionData as LoginResponse; // está transformando o "any" em uma tipo de dado conhecido
}



