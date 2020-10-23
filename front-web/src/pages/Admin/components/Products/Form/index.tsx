import React, { useState } from 'react';
import { makeRequest } from '../../../../../core/utils/request';
import BaseForm from '../../BaseForm';
import './styles.scss';


type formState={
    name: string;
    price:string;
    category: string;
}

const Form = () => {
    const [formData, setformData] = useState<formState>({
        name:'',
        price:'',
        category:''  
    });

    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const name = event.target.name;
        const value = event.target.value;
        
        //conserva tudo de informação e retorna tudo que já existia  
        setformData(data => ({...data, [name]: value}));
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const payload ={
           ...formData,
           categories:[{ id: formData.category }], 
           imgUrl: 'https://imagens.canaltech.com.br/ofertas/o14410.1.jpg'
        }

        makeRequest({ url: '/products', method:'POST', data: payload});
    }

    return (
        <form onSubmit={handleSubmit}>
            <BaseForm title="cadastrar um produto">
                <div className="row mt-3">
                    <div className="col-6">
                        <input
                            value={formData.name}
                            name="name"
                            type="text"
                            className="form-control mb-5"
                            onChange={handleOnChange}
                            placeholder="Nome do Produto"
                        />
                        <select
                            value={formData.category}
                            className="form-control mb-5" onChange={handleOnChange}
                            name="category"
                            >
                            <option value="1">Livros</option>
                            <option value="3">Computadores</option>
                            <option value="2">Eletrônicos</option>
                        </select>
                        <input
                            value={formData.price}
                            name="price"
                            type="text"
                            className="form-control"
                            onChange={handleOnChange}
                            placeholder="Preço do Produto"
                        />
                    </div>
                </div>
            </BaseForm>
        </form>
    );
}

export default Form;