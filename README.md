# Desafio-NeuroTech

# Contexto

A proposta do desafio é baseada no seguinte cenário: uma empresa em rápido crescimento necessita organizar as informações de seus funcionários para otimizar a alocação de analistas em projetos conforme suas habilidades e experiências. A aplicação busca facilitar o resgate de dados e a visualização de informações específicas.

# Objetivo

O principal objetivo foi desenvolver uma API RESTful capaz de:

Cadastrar, ler, atualizar e excluir informações de colaboradores.

Realizar consultas dinâmicas no banco de dados com filtros definidos pelo usuário.

A base de dados inclui informações como:

Nome;

E-mail;

Contato;

Competências técnicas;

Certificações;

Tempo de experiência;

URL do LinkedIn.

# Tecnologias Utilizadas

# Backend

Java 21

Spring Boot 3.0

Spring Data JPA para gerenciamento do banco de dados

SQL

# Frontend

HTML5

CSS3

JavaScript ES6

Fetch API para consumo da API

Estrutura do Projeto

# Backend

Camada Controller: Recebe as requisições HTTP e retorna as respostas.

Camada Service: Contém a lógica de negócios.

Camada Repository: Interface com o banco de dados utilizando JPA.

Modelos: Definem as entidades que representam os dados armazenados no banco.

# Frontend

Página de busca: Permite ao usuário aplicar filtros para consultar informações dos colaboradores.

Tabela dinâmica: Exibe os resultados das consultas.

Modais: Para cadastro e edição de colaboradores.

# Funcionalidades

Cadastro de colaboradores com validação de campos obrigatórios.

Listagem de todos os colaboradores.

Atualização de informações de um colaborador específico.

Exclusão de colaboradores.
