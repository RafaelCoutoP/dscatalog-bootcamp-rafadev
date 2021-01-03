import React, { useEffect, useState, useCallback } from 'react';
import { useHistory} from 'react-router-dom';
import { toast } from 'react-toastify';
import Pagination from '../../../../../core/components/Pagination';
import { ProductResponse } from '../../../../../core/types/Product';
import { makePrivateRequest, makeRequest } from '../../../../../core/utils/request';
import Card from '../Card';

const List = () => {

    const [productsResponse, setProductsResponse] = useState<ProductResponse>();
    const [isLoading, setIsLoading] = useState(false);
    const [activePage, setActivePage] = useState(0);
    const history = useHistory();

    // o useCallback está garantindo que não vai ser criado uma nova referência ao getProducts a cada renderização
    const getProducts = useCallback(() => {
        const params = {
            page: activePage,
            linesPerPage: 4,
            direction: 'DESC',
            orderBy : 'id'
        }
        setIsLoading(true)   
        makeRequest({ url: '/products', params })
            .then(response => setProductsResponse(response.data))
            .finally(() => {
                setIsLoading(false);
            })
    }, [activePage]);

    useEffect(() => {
      getProducts();
    }, [getProducts]);

    const handleCreate = () =>{
      history.push('/admin/products/create')
    }

    const onRemove = (productId: number) => {
        const confirm = window.confirm('Deseja realmente remover este produto?')

        if(confirm){
            makePrivateRequest({ url: `/products/${productId}`, method: 'DELETE' })
            .then(() => {
                toast.info('Produto removido com sucesso!')
                getProducts();
            })
            .catch(() => {
                toast.error('Erro ao remover produto')
            })
         };
        }

    return(
     <div className="admin-products-list">
         <button className="btn btn-primary btn-lg" onClick={handleCreate}>
             Adicionar
         </button>
         <div className="admin-list-container">
            {productsResponse?.content.map(product => (
                <Card product = {product} key={product.id} onRemove={onRemove}/>
            ))}
            {productsResponse && (
                <Pagination
                    totalPages={productsResponse?.totalPages}
                    activePage={activePage}
                    onChange={page => setActivePage(page)}
                />
            )}
         </div>
     </div>
    );
}

export default List;