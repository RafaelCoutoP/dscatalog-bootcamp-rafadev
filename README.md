# Sobre o projeto

DS Catalog é uma aplicação full stack web desenvolvida com os ensinamentos do BootCamp DevSuperior, ministrado pela equipe de ensino [DevSuperior].

### Visão: usuario visitante
O projeto realisa uma busca catalogada de produtos que podem ser filtrados por nome e categorias, ao clicar em um determinado produto abre-se a descrição do produto escolhido.

### Visão: usuario credenciado 
O projeto tende atender as nescessidades de se administrar uma aplicação de forma intuitiva. Para poder utilizar os privilegios de admin o usuario obrigatoriamente tem que estar logado,
caso o usuario não tenha login e senha a aplicação tem um link que redireciona para a pagina de cadastro, caso o usuario tenha esquecido a senha a aplicação também tem um link que 
leva o mesmo para a página de recuperação. Ao usuario estar logado o mesmo tem a opção de adicionar, deletar, atualizar e buscar os produtos as categorias e os usuarios. A aplicação tem privilegios
para o tipo de autoridade do usuario credenciado, o operador tem o poder de adicionar, deletar, atualizar e buscar os produtos e as categorias, e o administrador que pode fazer tudo que o operador faz
adicionando poder para manipular o CRUD de usuarios.

## Layout web
![Web 1]

![Web 2]

## Modelo conceitual
![Modelo Conceitual]

# Tecnologias utilizadas
## Back end
- Java
- Spring Boot
- JPA / Hibernate
- Maven
## Front end
- HTML / CSS / JS / TypeScript
- ReactJS
- React Native
- Apex Charts
- Expo
## Implantação em produção
- Back end: Heroku
- Front end web: Netlify
- Banco de dados: Postgresql

# Como executar o projeto

## Back end
Pré-requisitos: Java 11

```bash
# clonar repositório
git clone https://github.com/devsuperior/sds1-wmazoni

# entrar na pasta do projeto back end
cd backend

# executar o projeto
./mvnw spring-boot:run
```

## Front end web
Pré-requisitos: npm / yarn

```bash
# clonar repositório
git clone https://github.com/devsuperior/sds1-wmazoni

# entrar na pasta do projeto front end web
cd front-web

# instalar dependências
yarn install

# executar o projeto
yarn start
```
# Autor
Rafael Couto
