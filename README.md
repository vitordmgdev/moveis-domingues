# Móveis Domingues

Este é um repositório monolítico para o projeto Móveis Domingues, que inclui a página web, o aplicativo e a API.

## Estrutura do Projeto

O projeto utiliza [Turborepo](httpss://turbo.build/repo) para gerenciar o monorepo. A estrutura de pastas é a seguinte:

```
/
|-- apps/
|   |-- web/         # Aplicação Next.js para a página web
|   |-- app/         # Aplicação Next.js para o aplicativo
|   |-- api/         # API com Fastify
|-- packages/
|   |-- ui/          # Componentes React compartilhados
|   |-- config/      # Configurações compartilhadas (ESLint, TypeScript)
|   |-- tsconfig/    # tsconfig.json compartilhados
```

## Tecnologias Utilizadas

*   **Aplicações (Web e App):** [Next.js](httpss://nextjs.org/)
*   **API:** [Fastify](httpss://www.fastify.io/)
*   **Monorepo:** [Turborepo](httpss://turbo.build/repo)

## Começando

Para começar a desenvolver, siga estas etapas:

1.  **Instale as dependências:**

    ```bash
    npm install
    ```

2.  **Inicie o ambiente de desenvolvimento:**

    ```bash
    npm run dev
    ```

Este comando irá iniciar todas as aplicações (web, app e api) em modo de desenvolvimento.