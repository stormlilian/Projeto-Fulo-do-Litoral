## REST API com CRUD, NODE.js e MongoDB

https://github.com/stormlilian/Projeto-final-Reprograma/blob/master/src/arquitetura.png?raw=true

### Descrição:
Projeto desenvolvido para conclusão do bootcamp backend [{Reprograma}](https://reprograma.com.br/) e [XP.inc](https://www.xpinc.com/) com objetivo de mapear e aproximar artesãs e artesãos de cada região, facilitar a interação e a organização de associações, feiras e festivais de artesanato e fortalecimento da cultura criativa.

### Ferramentas utilizadas:

Linguaguem de Programação: [JavaScript ](https://www.javascript.com/) <br>
Gerenciador backend: [Nodejs](https://nodejs.org/en/) <br>
Teste API: [Insomnia](https://insomnia.rest/) <br>
Banco de dados: [MongoDB](https://www.mongodb.com/1) <br>
Infraestrutura: [Heroku](https://www.heroku.com/) <br>

### Dependencias que auxiliaram durante o desenvolvimento:
Npm <br>
Nodemon <br>
Mongoose <br>
Express <br>
Cors <br>
Body-parser

### Rotas API

 Busca artesão por id <br>
https://artesa-reprograma.herokuapp.com/artesaos/id?id=5fd2f4bde17ec2001716d264

 Buscar artesão por estado <br>
https://artesa-reprograma.herokuapp.com/artesaos/estado/?estado=Ceara

 Buscar artesão por artesanato <br>
https://artesa-reprograma.herokuapp.com/artesaos/arte/?artesanato=Renda

 Buscar artesão por cidade <br>
https://artesa-reprograma.herokuapp.com/artesaos/cidade/?cidade=Fortaleza

 Deletar um artesão <br>
https://artesa-reprograma.herokuapp.com/artesaos/deletar?id=5fd40838424e2b435afc1bd2

 Cadastrar artesão <br>
https://artesa-reprograma.herokuapp.com/artesaos/criar/

{ <br>
"nome": "Maria Valdenice", <br>
"email":"le@gmail.com", <br>
"artesanato": "teste", <br>
"cidade": "Fortaleza", <br>
"estado": "BA" <br>
}

 Listar todos artesãos <br>
https://artesa-reprograma.herokuapp.com/artesaos/

 Atualizar artesão <br>
https://artesa-reprograma.herokuapp.com/artesaos/atualizar/{id}

{ <br>
      "_id": "5fd40a9e677c50001785e485", <br>
      "nome": "Maria Valdenice", <br>
      "email": "val@gmail.com", <br>
      "artesanato": "Coco", <br>
      "cidade": "Maracanau", <br>
      "estado": "CE" <br>
}



### Rodando o projeto Back End no seu computador:

```bash
Server Local
# Com o git
# Clone este repositório
$ git clone https://github.com/stormlilian/Projeto-final-Reprograma.git

# Acesse a pasta do projeto no terminal/cmd
$ cd Projeto-final-Reprograma

# Instale as dependências
$ npm install
$ npm instal mongoose

# Execute o servidor
$ npm start

# O servidor inciará na porta:3030 - acesse <http://localhost:3030>
# Mongo conectado em mongodb://localhost:27017/db-artesao
```


### Acessando a aplicação no Heroku: 
* Acesse o [link da API](https://artesa-reprograma.herokuapp.com/)

* Utilize o [Postman](https://www.postman.com/) ou [Insomnia](https://insomnia.rest/download/) <br> para para chamar e testar os endpoints da API localmente ou via Heroku

