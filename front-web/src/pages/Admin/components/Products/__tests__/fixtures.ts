import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

export const categoriesResponse = {
    "content": [
        {
            "id": 3,
            "name": "Computadores"
        },
        {
            "id": 2,
            "name": "Eletrônicos"
        },
        {
            "id": 1,
            "name": "Livros"
        }
    ]
};

export const productResponse = {
        "id": 20,
        "name": "PC Gamer Tr",
        "description": ";)",
        "price": 1650.0,
        "imgUrl": "image.jpg",
        "date": "2020-07-14T10:00:00Z",
        "categories": [
            {
                "id": 3,
                "name": "Computadores"
            }
        ]
    };

export const fillFormData = () => {

    const nameInput = screen.getByTestId('name');
    const priceInput = screen.getByTestId('price');
    const imgUrlInput = screen.getByTestId('imgUrl');
    const descriptionInput = screen.getByTestId('description');
 
    userEvent.type(nameInput, 'Computador'); 
    userEvent.type(priceInput, '5000');
    userEvent.type(imgUrlInput, 'computador.jpg');
    userEvent.type(descriptionInput, 'Ótimo computador');
}