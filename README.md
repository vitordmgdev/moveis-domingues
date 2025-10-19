# Web Marcenaria

Este é um projeto destinado a Marcenaria Domingues no ramo de móveis sob-medida, este repositório consiste em um projeto full-stack, onde contém um app NextJS, onde tem a landing page e o CRM, e a api NodeJS com Fastify.

## Estrutura do Projeto

O projeto utiliza [Turborepo](httpss://turbo.build/repo) para gerenciar o monorepo. A estrutura de pastas é a seguinte:

```
/
|-- apps/
|   |-- web/ # Landing page + área do usuário
|   |-- crm/ # App CRM para gestão
|-- packages/
|   |-- ui/          # Componentes React compartilhados
|   |-- shared/      # Pacotes compartilhados
|       |-- prisma/
|           |-- schema.prisma
|       |-- index.ts
|   |-- eslint/               # Configurações ESLint
|   |-- typescript-config/    # Configurações Typescript
```

## Tecnologias

*   **Web:** React, [Next.js](https://nextjs.org/), [TailwindCSS](https://tailwindcss.com/), [Typescript](https://www.typescriptlang.org/)
*   **Monorepo:** [Turborepo](https://turbo.build/repo)
*   **Banco de dados:** PostgreSQL, [PrismaORM](https://www.prisma.io/)

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
