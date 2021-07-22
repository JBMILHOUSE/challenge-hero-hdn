## :clipboard: Sobre 

Minha implementação do desafio proposto pela [HDN Digital](http://hdn.digital/), é um catalógo de heróis desenvolvido nas tecnologias relacionadas abaixo.

## :rocket: Tecnologias
Esse projeto foi desenvolvido com as seguintes tecnologias:

- [Node](https://nodejs.org/en/)
- [Typescript](https://www.typescriptlang.org/)
- [TypeORM](https://typeorm.io/#/)
- [Express](https://expressjs.com/pt-br/)

## :bookmark: Regras

 - [x] Cadastrar hero (name e description)
 - [x] Não permitir que cadastre o mesmo nome de hero
 - [x] Adicionar um ou mais poderes
 - [x] Listar todos heroes 
 - [x] Editar info
 - [ ] Deletar hero 
 - [x] Cadastrar power
 - [x] Não permitir que cadastre o mesmo nome de poder
 - [x] Filtrar heroes por power


## :pushpin: Rotas
#### POST
- ``/heroes`` Rota para criar um novo hero.
- ``/powers`` Rota para criar novo poder.
-``/add/powers`` Rota para adicionar poder ao hero.

#### GET
-``/heroes`` Rota listar todos os heróis.
-``/powers/:id`` Rota para listar heróis com poder espeficíco.

#### PUT
-``/heroes/:id`` Rota para alterar informação do herói.

#### DELETE
-``/hero/:id`` Rota para deletar herói.

## :fire: Como usar
```
# Clone este repositório
> git clone https://github.com/JBMILHOUSE/challenge-hero-hdn.git

# Acesse a pasta do projeto qual terminal de sua preferência
> cd challenge-hero-hdn 

# Instalar as dependências
> npm install ou yarn 

# Para criar as tabelas do banco de dados
> yarn typeorm migration:run

# Iniciar a aplicação
> yarn dev ou npm dev

```
Por fim, a aplicação estará disponível em ``` localhost:3333 ```
## :memo: Licença

This project has the MIT license. See the archive [LICENSE](LICENSE.md) for more details.

<h4 align="center">
    Made with 💜 by <a href="https://www.linkedin.com/in/christopher-alexandre-a477b6170/" target="_blank">Chris</a>
</h4>
