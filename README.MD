# RAS IEEE
![GitHub repo size](https://img.shields.io/github/repo-size/PedroLucas-Developer/Ras-IEEE?style=for-the-badge)
![GitHub language count](https://img.shields.io/github/languages/count/PedroLucas-Developer/Ras-IEEE?style=for-the-badge)
![GitHub forks](https://img.shields.io/github/forks/PedroLucas-Developer/Ras-IEEE?style=for-the-badge)

Este é o lugar onde a tecnologia robótica ganha vida. Explore nosso site para ficar por dentro das últimas notícias, projetos emocionantes e recursos educacionais sobre robótica. Somos uma comunidade apaixonada por robótica, e este site é o nosso ponto de encontro para compartilhar conhecimento, inspirar e colaborar. Junte-se a nós nessa jornada tecnológica!

## Estrutura do Diretório

- `/src`: Contém o código-fonte do site.
- `/src/assets`: Armazena recursos públicos, como imagens e arquivos estáticos.
- `/src/ja`: Contem os arquivos JavaScript usados no projeto
- `/src/styles`: Contem os arquivos CSS usados no projeto

## Dependências

- Email.JS (v3.2.0)

## Instruções de Instalação

Para configurar e executar este projeto localmente, siga as etapas abaixo:

1. Clone o repositório: `git clone https://github.com/PedroLucas-Developer/Ras-IEEE.git`
2. Navegue até o diretório do projeto: `cd Ras-IEEE`
3. Instale as dependências: `npm install`
4. Abra o arquivo `/src/index.js` Com o Live Server.

Certifique-se de configurar as variáveis de ambiente, como API keys, se necessário.

## Funcionalidades
Envio de Email atraves da biblioteca Email.JS, para isso e preciso mudar as variaveis, que se encontram no /src/js/email.js

emailjs.init('your_Public_key');
emailjs.sendForm('your_service_id', 'your_template_id', this)

essas podem ser conseguidas no site do [Email.js](https://www.emailjs.com/).


## Pasta _Nao_Abra
- `/_nao_abra` : Contem os arquivos usando para conseguir hospedar o projeto na vercel, nao usar esse codigo de base
