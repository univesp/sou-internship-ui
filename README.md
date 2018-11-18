# Boilertemplate de ReactJS

Boilertemplate derivado do react-create-app, com algumas modificações, entre elas:

- SASS
- EditorConfig
- ESLint (Airbnb)
- Prettier
- Arquitetura de pastas
- Docker

## Configuração

Para utilizar esse boilertemplate siga os seguintes passos (Pré-requisito: Git, npm/yarn, o HyperV com uma maquina virtual e o Docker)

1. Abra o seu terminal de preferência e vá a pasta que deseja colocar o projeto
2. Clone o repósitorio com o comando "_git clone https://github.com/baraodev/react-boilertemplate_"
3. Crie uma maquina virtual com o comando "_docker-machine create -d hyperv univesp_"
4. Utilize o comando para preparar o ambiente "_docker-machine env univesp_"
5. Construa e suba os serviços com "_docker-compose up -d --build_"
6. Agora é só codar! Para ver o app basta entrar em "_http://localhost:3000_"

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

Qualquer dúvida só procurar por Marco Barão :-D
