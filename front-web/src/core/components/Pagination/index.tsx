import React from 'react';
import './styles.scss';
import { ReactComponent as ArrowIcon } from '../../assets/images/arrow.svg'
import { generateList } from '../../utils/list';

type Props ={
    totalPages: number;
    activePage: number;
    onChange: (item:number) => void;
}

const Pagination = ({ totalPages, activePage, onChange }:Props) => {
    const items = generateList(totalPages);
    const previusClass = totalPages > 0 && activePage > 0 ? 'active-page' : 'inactive-page'; 
    const nextClass = (activePage + 1) < totalPages ? 'active-page' : 'inactive-page' 
     
    return (
        <div className="pagination-container">
            <ArrowIcon 
            className={`pagination-previos ${previusClass}`}  
            onClick={() => onChange(activePage -1)}
            data-testid="arrow-icon-previous"
            />
            {items.map(item =>(
            <div
            key={item} 
            className={`pagination-item ${item === activePage ? 'active' : ''}`}
            onClick={() => onChange(item)}
            >
              { item + 1 }
            </div>    
            ))}
            <ArrowIcon  
            className={`pagination-next ${nextClass}`}
            onClick={() => onChange(activePage +1)}
            data-testid="arrow-icon-next"
            />
        </div>
    );
}

export default Pagination;