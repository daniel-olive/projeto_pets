<h1 align="center">PetDevShop</h1>

<p align="center"> Um catálogo de animais de estimação construído com Node.js, Express e TypeScript, utilizando renderização no lado do servidor com Mustache. <br /> <br /> <a href="https://projeto-pets.vercel.app/">Ver Demonstração</a> </p>

# 🐶 Sobre o Projeto

O PetDevShop é uma aplicação web que simula um catálogo online para um pet shop, permitindo aos usuários visualizar diferentes tipos de animais e pesquisar por raças específicas.

O projeto foi desenvolvido para demonstrar a criação de um servidor back-end com Node.js e TypeScript, aplicando uma arquitetura MVC (Model-View-Controller) para renderizar páginas dinamicamente no servidor com o template engine Mustache.

# 🛠️ Tecnologias Utilizadas

-   Node.js: Ambiente de execução para o JavaScript no servidor.

-   TypeScript: Adiciona tipagem estática para um código mais robusto e escalável.

-   Express.js: Framework para criar o servidor web e gerenciar as rotas da aplicação.

-   Mustache: Template engine para renderizar o HTML do lado do servidor de forma dinâmica.

-   HTML5 & CSS3: Para a estruturação e estilização da interface.

# 🚀 Funcionalidades

-   Visualização de Pets: Exibe uma galeria com todos os animais disponíveis.

-   Filtragem por Categoria: Páginas dedicadas para Cachorros, Gatos e Peixes, facilitando a navegação do usuário.

-   Sistema de Busca: Implementa uma busca que filtra os animais pelo nome da raça.

-   Páginas Dinâmicas: O conteúdo das páginas é gerado no servidor com base nos dados do Model.

-   Layout Responsivo: A interface se adapta a diferentes tamanhos de tela, de desktops a dispositivos móveis.

# 📦 Como Executar o Projeto

Siga os passos abaixo para executar o projeto em sua máquina.

Pré-requisitos
Você precisa ter o Node.js (versão 18 ou superior) instalado.

Instale globalmente as dependências de desenvolvimento: `npm i -g nodemon typescript ts-node`

Instalação e Execução
1 - Clone o repositório: `git clone https://github.com/daniel-olive/projeto_pets.git`

2 - Navegue até o diretório do projeto: `cd projeto_pets`

3 - Instale as dependências do projeto: `npm install`

4 - Inicie o servidor em modo de desenvolvimento: `npm run dev`

5 - Abra seu navegador e acesse `http://localhost:4000` (ou a porta definida no seu ambiente).

# 📚 Arquitetura e Explicação do Código

A aplicação é estruturada no padrão MVC (Model-View-Controller):

Model (src/models/pet.ts): Simula o banco de dados. Contém um array de objetos com os dados dos animais e exporta métodos para getAll, getFromType e getFromName.

Views (src/views/): São os arquivos .mustache que servem como templates da interface. Eles recebem os dados do controller para renderizar o HTML final que será enviado ao navegador.

Controllers (src/controllers/): Fazem a ponte entre o Model e a View. pageControle.ts lida com a renderização das páginas principais, enquanto searchController.ts gerencia a lógica da busca.

Routes (src/routes/index.ts): Define as rotas da API e associa cada uma a uma função específica do controller.

# 🎨 Layout

O design do site é limpo e direto, focado na fácil navegação e visualização dos animais.

A folha de estilo (public/css/style.css) contém media queries para garantir que o layout se ajuste bem em telas de diferentes tamanhos.

<p align="center"> <img src="https://danieldev.com.br/images/PetDevShop.jpg" alt="Screenshot do Projeto" width="700"> </p>

# 📄 Licença

-   Este projeto está licenciado sob a [MIT License](LICENSE).
