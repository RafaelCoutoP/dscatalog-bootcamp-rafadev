import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '..';
import history from '../../../core/utils/history';
import { Router } from 'react-router-dom';

test('should render Home', () => {

    render(
    <Router history={history}>    
        <Home />
    </Router>
    );

    const titleElement = screen.getByText('Conheça o melhor catalogo de produtos')
    const subTitleElement = screen.getByText('Ajudaremos você a encontrar os melhores produtos disponíveis no mercado.')
    const mainImage = screen.getByTestId('main-image'); 
    const textIcon = screen.getByText(/INICIE AGORA A SUA BUSCA/i);   

    expect(titleElement).toBeInTheDocument();
    expect(subTitleElement).toBeInTheDocument();
    expect(mainImage).toBeInTheDocument();    
    expect(textIcon).toBeInTheDocument();

});