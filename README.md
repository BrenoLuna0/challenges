# UA Heroes Manegement

A UA Heroes Management é um software de cadastro de heróis e de logística de distribuição dos mesmos para lidar com as ameaças que aparecem no mundo.

## Experiência

Para resolver o problema proposto, inicialmente eu pensei na melhor maneira de conseguir visualizar os heróis e as ameaças com seus respectivos embates. Pra isso, eu pensei na visão de um mapa, onde você pode ver onde estão os heróis e as ameaças de maneira simples e bem objetiva. A partir disso, comecei a pensar em como fazer essa implementação. Um dos pontos mais difíceis para mim foi modelar a interface, pois não consegui ter inspirações suficientes e não tinha quase nada para me basear na criação do layout. Na divisão do código, pensei em fazer o backend como uma API node, e o frontend uma aplicação React. Como banco de dados eu escolhi o Postegres, mas pensando na modelagem atual de como está o projeto, vejo que um banco de dados não relacional seria bastante eficiente nesse caso. Dentro do processo de criação do frontend, quando eu pensei em usar um mapa, não tive dúvida e já fui direto ao Google Maps. As outras funcionalidades foram elementos que eu desenvolvi no React. Também utilizei uma biblioteca para realizar as operações com as localizações.

## Instalação

Para essa etapa, você precisa de algum package maneger ([npm](https://nodejs.org/en/), ou [yarn](https://yarnpkg.com/))

Dentro das pastas "backend" e "web" execute o comando

```bash
npm install
```

ou

```bash
yarn
```

para fazer a instalação das dependências do projeto.

## Uso

Para rodar o projeto, primeiro abra a pasta "backend" e execute o comando

```bash
node index.js
```

Em Seguida, abra a pasta "web" e execute o comando

```bash
yarn start
```

ou

```bash
npm start
```
