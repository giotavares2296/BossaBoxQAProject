# Desafio QA Bossa Box

## 1. Ferramenta Escolhida

O framework utilizado para realizar os testes foi o Cypress. Optei em usar o Cypress pois não é uma ferramenta que uso no meu dia a dia, então achei que seria uma oportunidade para fazer um projeto utilizando um framework que não estou acostumada.

## 2. Como rodar os testes

1. Verifique se você possui o node e o npm instalados, para mais detalhes [verifique aqui](https://balta.io/blog/node-npm-instalacao-configuracao-e-primeiros-passos)
2. Após verificar que tudo está instalado, acesse o diretório web-automation no terminal com `cd web-automation` para rodar os testes e2e, e para rodar o teste de API, acesse o diretório api-automation com `cd api-automation`
3. Instale as dependências do projeto com `npm i`
4. Para rodar o projeto  no modo headless execute `npx cypress run` e para rodar com o player iterativo do Cypress execute com `npx cypress open` 


Obs: Nao consegui realizar validaçōes das mensagens de erro relacionadas a senha na API pois no dia que realizei o teste a API só me retornava o erro 500 para esse cenário.

Obrigada!
