import React from 'react';
import { render, screen } from '@testing-library/react';
import Pagination from '..';
import userEvent from '@testing-library/user-event';

test('should render Pagination', () => {

    const totalPages = 3;
    const activePage = 0;
    const onChange = () => null;

    render(
        <Pagination 
           totalPages={totalPages}
           activePage={activePage} 
           onChange={onChange}
        />
    )

    const previusElement = screen.getByTestId('arrow-icon-previous');
    const nextElement = screen.getByTestId('arrow-icon-next');
    const firstPageItem = screen.getByText('1');
    const secondPageItem = screen.getByText('2');
    const thirdPageItem = screen.getByText('3');

    expect(previusElement).toBeInTheDocument();
    expect(previusElement).toHaveClass('inactive-page');
    expect(nextElement).toBeInTheDocument();
    expect(nextElement).toHaveClass('active-page');
    expect(firstPageItem).toBeInTheDocument();
    expect(firstPageItem).toHaveClass('active');
    expect(secondPageItem).toBeInTheDocument();
    expect(secondPageItem).not.toHaveClass('active');
    expect(thirdPageItem).toBeInTheDocument();
    expect(thirdPageItem).not.toHaveClass('active');
});

test('should enable previus action and disable next action', () => {
    
    const totalPages = 3;
    const activePage = 2;
    const onChange = () => null;

    render(
        <Pagination 
           totalPages={totalPages}
           activePage={activePage} 
           onChange={onChange}
        />
    )

    const previusElement = screen.getByTestId('arrow-icon-previous');
    const nextElement = screen.getByTestId('arrow-icon-next');

    expect(previusElement).toBeInTheDocument();
    expect(previusElement).toHaveClass('active-page');
    expect(nextElement).toBeInTheDocument();
    expect(nextElement).toHaveClass('inactive-page');
});

test('should trigger onChange action', () => {
    const totalPages = 3;
    const activePage = 1;
    const onChange = jest.fn();

    render(
        <Pagination 
        totalPages={totalPages}
        activePage={activePage} 
        onChange={onChange}
        />
    )
    const previusElement = screen.getByTestId('arrow-icon-previous');
    const nextElement = screen.getByTestId('arrow-icon-next');
    const firstPageItem = screen.getByText('1');

    userEvent.click(firstPageItem);
    expect(onChange).toHaveBeenCalledWith(0);    

    userEvent.click(previusElement);
    expect(onChange).toHaveBeenCalledWith(0);

    userEvent.click(nextElement);
    expect(onChange).toHaveBeenCalledWith(2);
});
