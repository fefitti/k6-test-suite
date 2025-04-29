# k6 Test Suite🎯

Este repositório contém uma coleção de testes de performance utilizando a ferramenta **k6**. 
O **k6** é uma ferramenta moderna de testes de carga e performance, que permite simular tráfego de usuários e analisar a performance de aplicações web e APIs.

## Índice

- [Visão Geral](#visão-geral)
- [Pré-requisitos](#pré-requisitos)
- [Instalação](#instalação)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Como Executar os Testes](#como-executar-os-testes)
- [Como Criar Seus Próprios Testes](#como-criar-seus-próprios-testes)
- [Exemplo de Teste](#exemplo-de-teste)
- [Relatório de Resultados](#relatório-de-resultados)

## Visão Geral

Este repositório contém testes de performance com o **k6** para avaliar a resposta e o desempenho da nossa API e outros pontos críticos do sistema. O k6 simula múltiplos usuários acessando a aplicação simultaneamente, permitindo medir como ela se comporta sob pressão.

## Pré-requisitos

Antes de começar, você precisa instalar o **k6**. Se você ainda não o instalou, veja o passo de instalação abaixo.

### Ferramentas necessárias:

- **k6**: A ferramenta de teste de performance.
- **Node.js**: Caso queira integrar com alguma outra ferramenta de teste ou executar comandos com npm.
  
## Instalação

### 1. Instalar o **k6** via **Snap**:

Caso ainda não tenha o **k6** instalado, você pode instalá-lo usando o **Snap**:

`sudo snap install k6`

### 2. Verifique se o k6 foi instalado com sucesso:
`k6 version`

Isso deve retornar a versão do k6 instalada.

## Estrutura do Projeto

**k6-test-suite/**
│

├── tests/

│   ├── apiTest.js            # Teste para a API

│   ├── loadTest.js           # Teste de carga

│   └── performanceTest.js    # Teste de performance

│
├── README.md                # Este arquivo

└── package.json              # Arquivo de dependências e scripts (se necessário)


**tests/:** Contém todos os scripts de teste.
**README.md:** Contém informações sobre o projeto, como utilizar os testes e rodá-los.
**package.json:** Configurações do npm para auxiliar em scripts, se necessário.

### 🧑‍💻Como Executar os Testes
1. Navegue até o diretório do projeto:
`cd ~/suites-de-testes/k6-test-suite`
2. Execute os testes com o comando k6 run:
O k6 executa os testes de performance a partir de um arquivo JavaScript.

***Exemplo:***
Para rodar o teste de API:
`k6 run tests/apiTest.js`
Ou para rodar o teste de carga:
`k6 run tests/loadTest.js`

### 3. Visualização dos Resultados
Durante a execução dos testes, o k6 irá mostrar um relatório em tempo real com informações como:
- Número de requisições por segundo (RPS)
- Tempo de resposta
- Latência
- Erros
- e muito mais.
Ao final da execução, o k6 gera um resumo do desempenho, ajudando você a analisar o comportamento do sistema sob carga.

## 🛠️ Como Criar Seus Próprios Testes

Para criar novos testes com k6, você deve criar novos arquivos JavaScript dentro da pasta tests/. Aqui está um modelo básico para um teste de API:

    import http from 'k6/http';
    import { check } from 'k6';
    export default function () {
    const res = http.get('https://api.exemplo.com/dados');
    // Verifique se a resposta foi bem-sucedida
    check(res, {
    'status é 200': (r) => r.status === 200,
    'duração é menor que 1s': (r) => r.timings.duration < 1000,
    });
    }

> > ***Explicação do Código:***
**http.get(): **Faz uma requisição HTTP GET para a URL especificada.
**check(): **Verifica se os critérios definidos foram atendidos, como o código de status da resposta ou o tempo de resposta.

***Exemplo:***
Aqui está um exemplo simples de teste de carga com k6.
Arquivo: tests/loadTest.js

      import http from 'k6/http';
    import { check } from 'k6';

    export let options = {
    stages: [
    { duration: '30s', target: 50 }, // Aumenta a carga para 50 usuários ao longo de 30 segundos
    { duration: '1m', target: 50 },  // Mantém 50 usuários por 1 minuto
    { duration: '30s', target: 0 },  // Reduz a carga para 0 usuários ao longo de 30 segundos
    ],
    };

    export default function () {
    const res = http.get('https://api.exemplo.com');
  
    // Verifique se a resposta foi bem-sucedida
    check(res, {
    'status é 200': (r) => r.status === 200,
    'tempo de resposta é abaixo de 1s': (r) => r.timings.duration < 1000,
    });
    }

> > ***Explicação do Código:***
**options:** Define a carga do teste, simulando 50 usuários por 1 minuto.
**stages: **Define as diferentes fases do teste.
**http.get():** Realiza as requisições à API.
**check():** Valida se os resultados atendem às expectativas.

## 📝 Relatório de Resultados

Após a execução do teste, o k6 gera um relatório no terminal com dados como:
- Número total de requisições feitas
- Status das respostas
- Tempo médio de resposta
- Taxa de falhas (erros)
- Média de tempo de resposta por requisição
Esse relatório ajuda a identificar gargalos e problemas de performance na aplicação.

## 📬 Contato 
Feito com carinho por Fernanda Fittipaldi Santos. 

Quer bater um papo técnico ou discutir ideias de automação? 

Me chama! 🚀 [LinkedIn](https://www.linkedin.com/in/fefitti/ "LinkedIn") |[ Portfólio de Bots](https://sites.google.com/view/botbrisado/home " Portfólio de Bots")

### 🔥 Bora Automatizar o Mundo! 🔥
