import React, { useEffect, useState } from 'react';
import './styles.scss';
import { ReactComponent as ArrowIcon } from '../../../../core/assets/images/arrow.svg';
import { Link, useParams } from 'react-router-dom';
import ProductPrice from '../../../../core/components/ProductPrice';
import { makeRequest } from '../../../../core/utils/request';
import { Product } from '../../../../core/types/Product';

type ParamsType = {
    productId: string;
}
const ProductDatails = () => {
    const { productId } = useParams<ParamsType>();

const [product, setProduct] = useState<Product>();

    useEffect(()=>{
      makeRequest({ url: `/products/${productId}`})
        .then( response => setProduct(response.data));
    },[productId]);

    return (
        <div className="product-datails-container">
            <div className="card-base border-radius-20 product-datails">
                <Link to="/products" className="products-datails-goback">
                    <ArrowIcon className="icon-goback" />
                    <h1 className="text-goback">voltar</h1>
                </Link>
                <div className="row">
                    <div className="col-6 pr-5">
                        <div className="product-details-card text-center">
                            <img src={product?.imgUrl} alt={product?.name} className="product-datails-image" />
                        </div>
                        <h1 className="product-datails-name">
                         {product?.name}
                        </h1>
                        { product?.price && <ProductPrice  price={product?.price} /> }
                    </div>
                    <div className="col-6 product-details-card">
                        <h1 className="product-description-title">Descrição do produto</h1>
                        <p className="product-description-text">
                        {product?.description}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default ProductDatails;