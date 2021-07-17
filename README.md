## :clipboard: Sobre 

Minha implementação do desafio proposto pela [HDN Digital]() é um catalógo de heróis desenvolvido nas tecnologias relacionadas abaixo.

## :rocket: Tecnologias

[Node](https://nodejs.org/en/)
[Typescript](https://www.typescriptlang.org/)
[TypeORM](https://typeorm.io/#/)
[Express](https://expressjs.com/pt-br/)

## :bookmark: Regras
#### Heroes

 - [x] Cadastrar hero (name e description)
 - [x] Não permitir que cadastre o mesmo nome de hero
 - [x] Adicionar um ou mais poderes
 - [x] Listar todos heroes 
 - [x] Editar info
 - [ ] Deletar hero


#### Powers

 - [x] Cadastrar power
 - [x] Não permitir que cadastre o mesmo nome
 - [x] Filtrar heroes por power

## :fire: Como usar
```
# Clone este repositório
$ git clone https://github.com/JBMILHOUSE/challenge-hero-hdn.git

# Acesse a pasta do projeto qual terminal de sua preferência
$ cd challenge-hero-hdn 

# Instalar as dependências
$ npm install ou yarn 

# Para criar as tabelas do banco de dados
$ yarn typeorm migration:run

# Iniciar a aplicação
$ yarn dev ou npm dev

```
Por fim, a aplicação estará disponível em ``` localhost:3333 ```
## :memo: licença

This project has the MIT license. See the archive [LICENSE](LICENSE.md) for more details.

<h4 align="center">
    Made with 💜 by <a href="https://www.linkedin.com/in/christopher-alexandre-a477b6170/" target="_blank">Chris</a>
</h4>
