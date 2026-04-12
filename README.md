# AluraFlix 🎬

Uma plataforma de compartilhamento de vídeos educacionais desenvolvida com **React**, criada durante a **Imersão React** da Alura.

## 📋 Descrição

AluraFlix é uma aplicação web moderna que permite aos usuários explorar, categorizar e gerenciar vídeos de conteúdo educacional. A plataforma apresenta diferentes categorias de cursos com um carrossel interativo para navegação entre vídeos, um banner principal destacado e a funcionalidade de cadastro de novos vídeos e categorias.

## ✨ Funcionalidades

- 🎥 **Exibição de Vídeos**: Visualize vídeos categorizados em carrosséis interativos
- 📺 **Banner Principal**: Destaque do vídeo principal com descrição
- 🏷️ **Categorização**: Organização de vídeos por categorias com cores personalizadas
- ➕ **Cadastro de Vídeos**: Adicione novos vídeos à plataforma
- 📝 **Cadastro de Categorias**: Crie novas categorias de conteúdo
- 🎨 **Interface Responsiva**: Design adaptável para diferentes tamanhos de tela
- ⚡ **Navegação Suave**: Roteamento dinâmico com React Router

## 🛠️ Tecnologias Utilizadas

### Frontend

- **React** 16.13.1 - Biblioteca JavaScript para construção de interfaces
- **React DOM** 16.13.1 - Renderização de componentes React
- **React Router DOM** 5.2.0 - Roteamento de página única (SPA)
- **Styled Components** 5.1.1 - CSS-in-JS para estilização de componentes
- **React Slick** 0.27.1 - Carrossel/slider responsivo

### Backend

- **JSON Server** 1.0.0-beta.15 - API REST mockada com arquivo JSON

### Desenvolvimento

- **React Scripts** 5.0.1 - Scripts de build e desenvolvimento
- **ESLint** 10.2.0 - Linting e análise de código
- **Concurrently** 5.3.0 - Execução de múltiplos processos
- **Cross-env** 10.1.0 - Variáveis de ambiente multiplataforma

## 📋 Pré-requisitos

- **Node.js** v14 ou superior
- **npm** (vem com Node.js)

## 🚀 Como Instalar e Executar

### 1. Clone o repositório

```bash
git clone https://github.com/tatishinoda/imersaoreact.git
cd imersaoreact
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Inicie a aplicação

#### Opção 1: Modo Desenvolvimento (Frontend + Backend)

```bash
npm run dev
```

Isso iniciará tanto a aplicação React quanto o servidor JSON Server simultaneamente.

#### Opção 2: Apenas Frontend

```bash
npm start
```

A aplicação abrirá automaticamente em `http://localhost:3000`

#### Opção 3: Apenas Backend (API)

```bash
npm run server
```

O servidor JSON ficará disponível em `http://localhost:8080`

### 4. Build para Produção

```bash
npm run build
```

## 📁 Estrutura do Projeto

```
src/
├── components/              # Componentes reutilizáveis
│   ├── BannerMain/         # Banner principal com vídeo destacado
│   ├── Button/             # Botão customizado
│   ├── Carousel/           # Carrossel de vídeos
│   ├── Footer/             # Rodapé da página
│   ├── FormField/          # Campo de formulário
│   ├── Menu/               # Menu de navegação
│   └── PageDefault/        # Layout padrão
├── pages/                   # Páginas da aplicação
│   ├── Home/               # Página inicial
│   └── cadastro/           # Páginas de cadastro
│       ├── Categoria/      # Cadastro de categorias
│       └── Video/          # Cadastro de vídeos
├── data/                    # Dados estáticos
│   └── dados_iniciais.json # Dados iniciais das categorias e vídeos
├── assets/                  # Arquivos estáticos
│   └── img/                # Imagens
├── index.js                # Ponto de entrada da aplicação
└── index.css               # Estilos globais

db.json                      # Base de dados JSON (API)
```

## 🔧 Scripts Disponíveis

| Comando          | Descrição                                 |
| ---------------- | ----------------------------------------- |
| `npm start`      | Inicia o servidor de desenvolvimento      |
| `npm run dev`    | Inicia frontend e backend simultaneamente |
| `npm run server` | Inicia apenas o servidor JSON             |
| `npm run build`  | Cria build otimizado para produção        |
| `npm test`       | Executa os testes                         |

## 🧩 Componentes Principais

### BannerMain

Exibe um banner com vídeo em destaque, título e descrição.

### Carousel

Carrossel interativo para navegação entre vídeos de uma categoria.

### VideoCard

Card individual de vídeo dentro do carrossel.

### Menu

Navegação principal da aplicação com links para home e cadastro.

### FormField

Campo de entrada reutilizável para formulários.

## 📊 Estrutura de Dados

### Categorias

```json
{
  "titulo": "Front End",
  "cor": "#6BD1FF",
  "link_extra": {
    "text": "Formação de Front End na Alura",
    "url": "https://www.alura.com.br/..."
  },
  "videos": [...]
}
```

### Vídeos

```json
{
   "titulo": "Título do Vídeo",
   "url": "https://www.youtube.com/watch?v=..."
}
```

## 🌐 Rotas Disponíveis

| Rota                  | Descrição                              |
| --------------------- | -------------------------------------- |
| `/`                   | Página inicial com categorias e vídeos |
| `/cadastro/video`     | Página para cadastrar novo vídeo       |
| `/cadastro/categoria` | Página para cadastrar nova categoria   |

## 🎓 Origem do Projeto

Este projeto foi desenvolvido durante a **Imersão React** da Alura, um programa intensivo de aprendizado em desenvolvimento React com foco em:

- Componentização
- Estados e Props
- Roteamento
- Estilização com Styled Components
- Consumo de APIs

## 🤝 Contribuições

Contribuições são bem-vindas! Sinta-se livre para:

1. Fazer um fork do projeto
2. Criar uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abrir um Pull Request

## 👤 Autor

**Tati Shinoda**

- GitHub: [@tatishinoda](https://github.com/tatishinoda)

---

**Desenvolvido com ❤️ durante a Imersão React da Alura**

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
