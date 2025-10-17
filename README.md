# Móveis Domingues

Este é um projeto destinado a Marcenaria Domingues no ramo de móveis sob-medida, este repositório consiste em um projeto full-stack, onde contém um app NextJS, onde tem a landing page e o CRM, e a api NodeJS com Fastify.

## Estrutura do Projeto

O projeto utiliza [Turborepo](httpss://turbo.build/repo) para gerenciar o monorepo. A estrutura de pastas é a seguinte:

```
/
|-- apps/
|   |-- web/         # Aplicação Next.js para web
|   |-- crm/         # Aplicação Next.js para CRM
|   |-- api/         # Api NodeJS com Fastify para o CRM
|-- packages/
|   |-- ui/          # Componentes React compartilhados
|   |-- config/      # Configurações compartilhadas (ESLint, TypeScript)
|   |-- tsconfig/    # tsconfig.json compartilhados
```

## Tecnologias Utilizadas

*   **Aplicações (Web e App CRM):** [Next.js](httpss://nextjs.org/)
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
