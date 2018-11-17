# Boilertemplate de ReactJS

Boilertemplate derivado do react-create-app, com algumas modificações, entre elas:

- SASS
- EditorConfig
- ESLint (Airbnb)
- Prettier
- Arquitetura de pastas

## Configuração

Para utilizar esse boilertemplate siga os seguintes passos (Pré-requisito: Git e npm/yarn)

1. Abra o seu terminal de preferência e vá a pasta que deseja colocar o projeto
2. Clone o repósitorio com o comando "_git clone https://github.com/baraodev/react-boilertemplate_"
3. Baixe as dependências com "_npm install_" ou "_yarn install_"
4. Suba o servidor com "_npm start_" ou "_yarn start_"
5. Agora é só codar!

## Explicação de pastas

Agora vamos entender como funcionam as pastas...

### public

Onde fica a saída principal da aplicação (index.html) e o favicon.

### src

Onde fica o código fonte da aplicação, quase tudo que você codar vai ficar por aqui.

#### components

Componentes são elementos menores visiveis na interface, por exemplo, um card, um formulário etc.

#### pages

Pasta onde ficará armazenado as estruturas das páginas (As páginas serão constituidas pelos componentes).

#### services

Pasta que fica encarregada de se conectar com serviços, por exemplo, uma API.
