# Sistema de Cadastro de Clientes

Este projeto foi feito com [Angular CLI](https://github.com/angular/angular-cli) versão 16.2.10.

## Contato do desenvolvedor

Este projeto foi feito por **Luiz Carlos Comparin**.

-   Autor - Luiz Comparin
-   LinkedIn - [Luiz Comparin | LinkedIn](https://www.linkedin.com/in/luiz-carlos-comparin/)
-   Email - [luizcomparin18@gmail.com](mailto:luizcomparin18@gmail.com)

## Descrição

Esta é uma aplicação front-end de teste para a vaga de desenvolvedor Angular Júnior/Pleno. </br>
Este app está hospedado usando Firebase Hosting.
<a href="https://sistemacadastroangular.web.app/inicio" target="_blank">Clique aqui para acessar.</a>

### Principais tecnologias

Runtime [Node.js 18.18.2](https://nodejs.org/en/blog/release/v18.18.2) </br>
Linguagem [TypeScript](https://www.typescriptlang.org/) </br>
Framework web [Angular 16.2](https://github.com/nestjs/nest). </br>
Framework CSS (estilização) [TailwindCSS](https://tailwindcss.com/docs/installation) </br>
Hospedagem [Firebase](https://firebase.google.com/?hl=pt) </br>

## Instalação de dependências

Este projeto foi criado usando Node 18.18.2.

1. Instale o [Node 18.18.2](https://nodejs.org/en/blog/release/v18.18.2).
2. Instale o [Angular 16.2](https://github.com/angular/angular-cli).
3. Instale todas as dependências rodando no terminal `npm install`.

## Rodar a aplicação

Execute o script `ng serve` para inicar a aplicação na porta `http://localhost:4200/`.

## Buildar a aplicação

Execute o script `ng build` para buildar o projeto. A build será gerada no diretório `dist/`.

### Local Storage

Esta aplicação usa o localstorage do navegador para armazenar dados. A chave dos dados está sob o nome de `clientes_list_localstorage`. <br/>
As imagens de perfil são comprimidas e salvas como `string base64` no localstorage, na propriedade `image_profile_url`.

## Estrutura do projeto

### Telas:

#### Inicio

_Features:_ </br>

-   Navegar para outras rotas </br>
-   Cards de últimos clientes adicionados </br>

#### Cadastrar cliente

_Ações e features:_ </br>

-   Salvar novo cliente no localstorage </br>
-   Validação de inputs </br>
-   Consulta e preenchimento de endereço por CEP </br>
-   Envio de imagem de perfil </br>
-   Formulário reativo </br>

#### Listar clientes

_Ações e configurações:_ </br>

-   Consultar do localstorage </br>
-   Pesquisar por nome </br>
-   Pesquisar por cpf </br>
-   Escolher se inicia pela pesquisa ou se contém </br>
-   Ordenar por ordem crescente e decrescente </br>
-   Ordenar por nome </br>
-   Ordenar por cpf </br>
-   Ordenar por data de criação </br>
-   Ordenar por data de modificação </br>
-   Paginação (definir quantidade de itens por página) </br>
-   Excluir cliente </br>
-   Editar cliente (abre dialog com tela e campos para editar e salvar) </br>

### Entidades

```
Cliente: {
    id: UUID,
    nome: string,
    cpf: string,
    telefone: string,
    endereco: Endereco
    atualizado_em: string (Date UTC ISOString)
    criado_em: string (Date UTC ISOString)
    image_profile_url: string | null
}

Endereco: {
    rua: string,
    bairro: string,
    cidade: string,
    estado: string,
    cep: string,
    numero: string
}

```

### Pastas

```
app
│
├── components                      -> Componentes de uso compartilhado entre a aplicação.
├── entities                        -> Pasta contendo a entidade Cliente.
├── pages                           -> Páginas acessíveis pelas rotas no projeto.
├── pipes                           -> Pipes de transformação de valores no template HTML.
│
├── services
│	├─ cep.service.ts               -> Service responsável por se comunicar com API de CEP do BrasilApi.
│	├─ cliente-form.service.ts      -> Service que contém o formulários de cliente, usando Reactive Forms.
│	├─ helper.service.ts            -> Service com métodos auxiliares.
│	├─ cliente.service.ts           -> Service com a lógica de consultar, criar, excluir e editar um Cliente.
│	├─ local-storage.service.ts     -> Service responsável por armazenar e consultar dados do localstorage.
│	└─ pagination.service.ts        -> Service contendo a lógica de paginação, filtragem e ordenação da lista.
│
└── types                           -> Pasta contendo a interface Endereco e os types de paginação.
	└─ paginationTypes              -> Types, enums, interfaces relacionados à paginação.

```

### Considerações importantes

#### Gerenciamento de estado / Services

O gerenciamento de estado da aplicação é feito através dos Services, que são injetados nos componentes através do `constructor`.

#### Componentes

Os componentes são páginas e componentes visuais diversos da aplicação, como botões personalizados, dialogs, inputs e mais.
