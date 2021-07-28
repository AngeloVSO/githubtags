# GitHub TAGS

Projeto desenvolvido como parte do processo seletivo para compassoUOL.
O projeto consiste em poder logar na aplicação com autenticação do github, consultar um usuário utilizando API do github, verificando repositórios públicos e com estrelas. Implementei a funcionalidade de adicionar uma tag ao repositório para que você possa encontra-lo mais facilmente consultando uma tag cadastrada. 

<img src="https://user-images.githubusercontent.com/70985334/127355202-da3f4a69-dacd-4a7f-b065-69c2e5d14cf0.png" width="600px" alt="home"/></br></br>
<img src="https://user-images.githubusercontent.com/70985334/127354982-5b96d577-6dbf-4433-a0cb-a8052e5d9d7b.png" width="600px" alt="home"/></br></br>
<img src="https://user-images.githubusercontent.com/70985334/127355002-99d2cb3f-8790-4431-b49d-254c76172489.png" width="600px" alt="home"/></br></br>
<img src="https://user-images.githubusercontent.com/70985334/127355022-bca8535b-ea83-446d-b6a5-c209162c47d3.png" width="600px" alt="home"/></br></br>
<img src="https://user-images.githubusercontent.com/70985334/127355122-a2f45a17-3dc5-4e7d-bf60-7cedddc03b03.png" width="600px" alt="home"/></br></br>

### O projeto permite:
- Fazer autenticação e autorização de usuário github;
- Buscar todos os repositórios do usário logado;
- Buscar outros usários válidos no github;
- Gerenciar tags de repositórios favoritos listados (adicionar e excluir);
- Filtrar repositórios por tags.

### Tecnologias utilizadas

- React JS
- Firebase
- Dotenv
- Styled-Components

### Deploy

Link pra acessar aplicação: http://aodev-githubtags.surge.sh

### Como rodar?

Para autenticação, é necessário seguir algns passos que pode ser melhor compreendido aqui:
https://docs.github.com/pt/developers/apps/building-oauth-apps

Para uso do firebase, crie um arquivo .env na pasta raíz substitua as informações. Faça a configuração no seu firebase.

Agora faça um clone, acesse o terminal e dê um npm install.
Depois um comando npm start. Irá rodar em modo de desenvolvedor em localhost.

### O que funciona:

- É possível efetuar login com autenticação do github
- Acesso a aplicação apenas com login
- É possível buscar um usuário via API github
- É possível visualizar repositórios públicos
- É possível visualizar repositórios com estrelas
- É possível adicionar tags aos repositórios com estrelas
- É possível remover tags dos repositórios com estrelas
- É possível consultar repositórios informando uma tag cadastrada
- Não é possível adicionar tags iguais ao mesmo repositório
- Responsividade para iphone 6/7/8 Plus

### O que não funciona:

- Não é possível manter as tags salvas casa atualize ou saia da aplicação
- Não é possível editar as tags



### Autor

<table>
  <tr>
    <td align="center"><a href="https://github.com/AngeloVSO">
    <img src="https://avatars.githubusercontent.com/u/70985334?v=4" width="100px" alt="Imagem do perfil do
    Angelo O'Dwyer"/>
    <br />
    <sub><b>Angelo O'Dwyer</b></sub><br /></td>
</table>
