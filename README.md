# Countries App

Aplicação front-end desenvolvida com **Next.js**, **React** e **TypeScript**, com o objetivo de listar países, permitir busca por nome, filtro por sub-região, troca de idioma da interface e visualização de detalhes de cada país.

Este projeto foi desenvolvido como parte de um desafio front-end.

---

## Funcionalidades

- Listagem de países
- Exibição de informações básicas dos países:
  - Bandeira
  - Nome
  - População
  - Continente
  - Sub-região
- Busca de países por nome
- Filtro por sub-região
- Página de detalhes para cada país
- Exibição de informações adicionais:
  - Nome oficial
  - Capital
  - Área
  - Idiomas
  - Moedas
- Alternância de idioma da interface entre:
  - Português do Brasil
  - Inglês
- Mensagem para quando nenhum país for encontrado
- Botão para limpar filtros
- Layout responsivo
- Interface moderna e componentizada

---

## Tecnologias utilizadas

- Next.js
- React
- TypeScript
- Tailwind CSS
- REST Countries API

---

## API utilizada

Os dados dos países são consumidos através da **REST Countries API**.

URL base:

```txt
https://restcountries.com/v3.1
```

Endpoints utilizados:

```txt
GET /all
GET /name/{name}
```

A aplicação utiliza a API para buscar a lista de países e também para buscar informações específicas de um país na página de detalhes.

---

## Como executar o projeto

### 1. Clone o repositório

```bash
git clone <url-do-repositorio>
```

### 2. Acesse a pasta do projeto

```bash
cd countries-app
```

### 3. Instale as dependências

```bash
npm install
```

### 4. Execute o projeto em ambiente de desenvolvimento

```bash
npm run dev
```

### 5. Acesse no navegador

```txt
http://localhost:3000
```

---

## Scripts disponíveis

### Rodar o projeto em desenvolvimento

```bash
npm run dev
```

### Gerar build de produção

```bash
npm run build
```

### Rodar a versão de produção

```bash
npm start
```

### Rodar verificação de lint

```bash
npm run lint
```

---

## Estrutura de pastas

```txt
src/
  app/
    country/
      [name]/
        page.tsx
    globals.css
    layout.tsx
    page.tsx

  components/
    CountriesExplorer.tsx
    CountryCard.tsx
    CountryList.tsx
    HomeContent.tsx
    LanguageSwitcher.tsx
    Loading.tsx
    SearchInput.tsx
    SubregionFilter.tsx

  services/
    countriesApi.ts

  types/
    country.ts
    language.ts

  utils/
    formatNumber.ts
    translations.ts
```

---

## Decisões técnicas

### Next.js com App Router

O projeto utiliza o **App Router** do Next.js para organização das rotas.

A página inicial da aplicação está localizada em:

```txt
src/app/page.tsx
```

A página de detalhes utiliza uma rota dinâmica:

```txt
src/app/country/[name]/page.tsx
```

Com isso, ao clicar em um país, o usuário é redirecionado para uma URL como:

```txt
/country/Brazil
```

---

### Separação de responsabilidades

A aplicação foi organizada em camadas para facilitar manutenção, leitura e evolução do código.

#### `app`

Contém as rotas da aplicação, incluindo a página inicial e a rota dinâmica de detalhes dos países.

#### `components`

Contém os componentes reutilizáveis da interface, como cards, lista de países, campos de busca, filtros, conteúdo da home e seletor de idioma.

#### `services`

Contém as funções responsáveis pela comunicação com a API externa.

#### `types`

Contém as tipagens TypeScript utilizadas no projeto.

#### `utils`

Contém funções auxiliares, como formatação de números e textos de tradução da interface.

---

### TypeScript

Foi criada uma tipagem para representar os dados dos países retornados pela API.

Isso ajuda a:

- Reduzir erros durante o desenvolvimento
- Melhorar o autocomplete da IDE
- Facilitar a manutenção do código
- Deixar a aplicação mais segura e previsível

Também foi criada uma tipagem específica para os idiomas suportados pela interface:

```ts
export type Language = "pt-BR" | "en";
```

---

### Tailwind CSS

O Tailwind CSS foi utilizado para estilização da aplicação.

A escolha foi feita por permitir criar uma interface responsiva, organizada e consistente de forma rápida, sem necessidade de muitos arquivos CSS separados.

---

### Busca e filtro no cliente

A busca por nome e o filtro por sub-região são realizados no lado do cliente.

Essa decisão foi tomada porque a quantidade de países retornada pela API é pequena, permitindo uma experiência mais rápida para o usuário sem precisar fazer uma nova requisição a cada alteração no campo de busca ou no filtro.

---

### Alternância de idioma

Foi implementado um seletor de idioma para alternar a interface entre **Português do Brasil** e **Inglês**.

A troca de idioma é feita no lado do cliente utilizando estado local do React.

Os textos da interface ficam centralizados no arquivo:

```txt
src/utils/translations.ts
```

Essa decisão facilita manutenção e evolução futura, caso novos idiomas sejam adicionados.

Observação: a tradução aplicada é referente aos textos da interface. Os nomes dos países e algumas informações retornadas pela API continuam seguindo o formato original dos dados recebidos.

---

### Rota dinâmica para detalhes

A página de detalhes foi implementada utilizando rota dinâmica do Next.js.

Cada país pode ser acessado através do seu nome na URL.

Exemplo:

```txt
/country/Brazil
```

Na página de detalhes, a aplicação busca as informações do país selecionado e exibe dados adicionais.

---

### Formatação de números

Foi criada uma função utilitária usando `Intl.NumberFormat` para formatar números grandes, como população e área.

Exemplo:

```txt
212559409
```

É exibido como:

```txt
212.559.409
```

Isso melhora a leitura das informações na interface.

---

### Uso do componente Image do Next.js

As bandeiras dos países são renderizadas com o componente `Image` do Next.js.

Essa decisão permite aproveitar recursos da própria framework para lidar melhor com imagens, como otimização e controle de carregamento.

---

### Otimização da requisição

A chamada para a API foi configurada para buscar apenas os campos necessários para a aplicação.

Isso reduz o volume de dados trafegados e melhora a organização das informações utilizadas no projeto.

---

## Melhorias implementadas

Além dos requisitos principais do desafio, foram adicionadas algumas melhorias:

- Componentização da interface
- Layout responsivo
- Interface com visual mais moderno
- Rota dinâmica para detalhes do país
- Busca combinada com filtro de sub-região
- Alternância de idioma da interface entre PT-BR e EN
- Mensagem para lista vazia
- Botão para limpar filtros
- Formatação de números
- Organização da camada de API
- Tipagem dos dados retornados pela API
- Separação entre componentes, serviços, tipos e utilitários
- Uso de arquivo centralizado para traduções
- Melhoria visual dos cards, filtros e página inicial

---

## Possíveis melhorias futuras

Algumas melhorias que podem ser implementadas futuramente:

- Paginação dos países
- Carregamento incremental
- Skeleton loading durante carregamento
- Tratamento avançado de erros da API
- Ordenação por nome, população ou continente
- Filtro por continente
- Persistência do idioma escolhido no `localStorage`
- Tradução dos nomes dos países quando possível
- Testes automatizados
- Deploy em ambiente de produção
- Melhorias de acessibilidade
- Modo escuro

---

## Autor

Desenvolvido por **Dyelson Mota**.
