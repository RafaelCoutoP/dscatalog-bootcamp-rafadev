import React, { useEffect, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import Select from 'react-select'
import { useHistory, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { makePrivateRequest, makeRequest } from '../../../../../core/utils/request';
import BaseForm from '../../BaseForm';
import './styles.scss';
import { Category } from '../../../../../core/types/Product';


type FormState = {
    name: string;
    price: string;
    description: string;
    imgUrl: string;
    categories: Category[];
}

type ParamsType = {
    productId: string;
}

const Form = () => {
    const { register, handleSubmit, errors, setValue, control } = useForm<FormState>();
    const history = useHistory();
    const { productId } = useParams<ParamsType>();
    const [categories, setCategories] = useState<Category[]>([]);
    const [isLoadingCategories, setIsLoadingCategories] = useState(false);
    const isEditing = productId !== 'create';

    useEffect(() => {
        if (isEditing) {
            makeRequest({ url: `/products/${productId}` })
                .then(response => {
                    setValue('name', response.data.name);
                    setValue('price', response.data.price);
                    setValue('description', response.data.description);
                    setValue('imgUrl', response.data.imgUrl);
                    setValue('categories', response.data.categories);
                })
        }
    }, [productId, isEditing, setValue]);


    useEffect(() => {
        setIsLoadingCategories(true);
        makeRequest ({url:'/categories'})
        .then(response => setCategories(response.data.content))
        .finally(() => setIsLoadingCategories(false)) 
    }, [])


    const onSubmit = (data: FormState) => {
        makePrivateRequest({
            url: isEditing ? `/products/${productId}` : '/products',
            method: isEditing ? 'PUT' : 'POST',
            data: data
        })
            .then(() => {
                toast.info("Produto Salvo com sucesso!");
                history.push("/admin/products")
            })
            .catch(() => {
                toast.error("Erro ao salvar produto!");
            }) 
    }

    return (

        <form onSubmit={handleSubmit(onSubmit)}>
            <BaseForm
                title={isEditing ? "EDITAR PRODUTO" : "CADASTRAR PRODUTO"}
            >
                <div className="row">
                    <div className="col-6">

                        <div className="margin-bottom-30">
                            <input
                                ref={register({ required: "Campo obrigatório" })}
                                name="name"
                                type="text"
                                className="form-control input-base "
                                placeholder="Nome do produto"
                                data-testid="name"
                            />
                            {errors.name && (
                                <div className="invalid-feedback d-block">
                                    {errors.name.message}
                                </div>
                            )}
                        </div>
                        <div className="margin-bottom-30">
                            <label htmlFor="categories" className="d-none">Categorias</label>
                            <Controller
                            as={Select}
                            name="categories"
                            rules={{ required:true}}
                            options={categories}
                            control={control}
                            isLoading={isLoadingCategories}
                            getOptionLabel={(option: Category)=> option.name} 
                            getOptionValue={(option: Category)=> String(option.id)} 
                            inputId="categories"
                            defaultValue=""
                            isMulti
                            classNamePrefix="categories-select"
                            placeholder="Categorias"
                            />
                             {errors.categories && (
                                <div className="invalid-feedback d-block">
                                    Campo obrigatório
                                </div>
                            )}

                        </div>
                        <div className="margin-bottom-30">
                            <input
                                ref={register({ required: "Campo obrigatório" })}
                                name="price"
                                type="number"
                                className="form-control input-base"
                                placeholder="Preço"
                                data-testid="price"
                            />
                            {errors.price && (
                                <div className="invalid-feedback d-block">
                                    {errors.price.message}
                                </div>
                            )}
                        </div>
                        <div className="margin-bottom-30">
                            <input
                                ref={register({
                                    required: "Campo obrigatório",
                                })}
                                name="imgUrl"
                                type="text"
                                className="form-control input-base "
                                placeholder="Imagem do Produto"
                                data-testid="imgUrl"
                            />
                            {errors.imgUrl && (
                                <div className="invalid-feedback d-block">
                                    {errors.imgUrl.message}
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="col-6">
                        <textarea
                            ref={register({ required: "Campo obrigatório" })}
                            name="description"
                            className="form-control input-base"
                            placeholder="Descrição"
                            cols={30}
                            rows={10} 
                            data-testid="description"
                            />
                        {errors.description && (
                            <div className="invalid-feedback d-block">
                                {errors.description.message}
                            </div>
                        )}
                    </div>
                </div>
            </BaseForm>
        </form>
    )
}
export default Form;