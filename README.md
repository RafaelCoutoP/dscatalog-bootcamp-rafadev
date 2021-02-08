# DS Catalog 
[![NPM](https://img.shields.io/npm/l/react)](https://github.com/RafaelCoutoP/dscatalog-bootcamp-rafadev/blob/main/LICENSE)

# Sobre o projeto
Link do Projeto em Produção: https://rafaelcdev-dscatalog.netlify.app/

DS Catalog é uma aplicação full stack web desenvolvida com os ensinamentos do BootCamp DevSuperior, ministrado pela equipe de ensino [DevSuperior].

### Visão: usuário visitante
O projeto realiza uma busca catalogada de produtos que podem ser filtrados por nome e categoria, ao clicar em um determinado produto abre-se a descrição do produto escolhido.

### Visão: usuário credenciado 
O projeto tende atender as nescessidades de se administrar uma aplicação de forma intuitiva. Para poder utilizar os privilégios de admin o usuário obrigatoriamente tem que estar logado,
caso o usuario não tenha login e senha a aplicação tem um link que redireciona para a página de cadastro, caso o usuário tenha esquecido a senha a aplicação também tem um link que 
leva o mesmo para a página de recuperação. Ao usuário estar logado o mesmo tem a opção de adicionar, deletar, atualizar e buscar os produtos, categorias e os usuarios. A aplicação tem privilégios
para o tipo de autoridade do usuario credenciado, o operador tem o poder de adicionar, deletar, atualizar e buscar os produtos e as categorias, e o administrador que pode fazer tudo que o operador faz
adicionando poder para manipular o CRUD de usuários.

## Layout web

### Visão visitante 

![Catalog 1](https://github.com/RafaelCoutoP/movie-flix-devrafac/blob/main/assetss/Captura%20de%20Tela%20(81).png)

![Catalog 2](https://github.com/RafaelCoutoP/movie-flix-devrafac/blob/main/assetss/Captura%20de%20Tela%20(82).png)

![Catalog 3](https://github.com/RafaelCoutoP/movie-flix-devrafac/blob/main/assetss/Captura%20de%20Tela%20(83).png)

### Visão administrador

![Catalog 4](https://github.com/RafaelCoutoP/movie-flix-devrafac/blob/main/assetss/Captura%20de%20Tela%20(84).png)

![Catalog 5](https://github.com/RafaelCoutoP/movie-flix-devrafac/blob/main/assetss/Captura%20de%20Tela%20(85).png)


## Modelo conceitual

![Modelo Conceitual](https://github.com/RafaelCoutoP/movie-flix-devrafac/blob/main/assetss/Captura%20de%20Tela%20(80).png)


# Tecnologias utilizadas
## Back end
- Java
- Spring Boot
- JPA / Hibernate
- Maven
- Spring Security
- Banco H2
- Banco Postgresql
- OAuth2
- Token JWT
- BCrypt
## Front end
- HTML / CSS / JS / TypeScript
- ReactJS
- BootStrap
- Axios
## Implantação em produção
- Back end: Heroku
- Front end web: Netlify
- Banco de dados: Postgresql

# Como executar o projeto

## Back end
Pré-requisitos: Java 11

```bash
# clonar repositório
git clone https://github.com/RafaelCoutoP/dscatalog-bootcamp-rafadev.git

# entrar na pasta do projeto back end
cd backend

# executar o projeto
./mvnw spring-boot:run
```

## Front end web
Pré-requisitos: npm / yarn

```bash
# clonar repositório
git clone https://github.com/RafaelCoutoP/dscatalog-bootcamp-rafadev.git

# entrar na pasta do projeto front end web
cd front-web

# instalar dependências
yarn install

# executar o projeto
yarn start
```
# Autor
Rafael Couto
