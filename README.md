# ONG Transformando o Mundo

Aplicação Web desenvolvida como uma Single Page Application (SPA) para divulgação das ações de uma organização não governamental (ONG). O projeto apresenta informações institucionais, projetos sociais e um sistema de cadastro para voluntários, utilizando JavaScript modular, persistência local de dados e navegação dinâmica sem recarregamento da página.

---

## 📖 Sobre o Projeto

A **ONG Transformando o Mundo** foi desenvolvida com o objetivo de centralizar informações institucionais e facilitar o processo de inscrição de voluntários através de uma interface moderna, responsiva e acessível.

A aplicação adota o conceito de **SPA (Single Page Application)**, onde o conteúdo é atualizado dinamicamente através do JavaScript, sem necessidade de recarregar o documento HTML principal.

---

## 🚀 Funcionalidades

### Navegação SPA

- Sistema de roteamento baseado em Hash (`#`).
- Troca dinâmica de páginas sem recarregamento.
- Navegação entre seções específicas.
- Página personalizada para rotas inexistentes.

### Página Institucional

- Apresentação da ONG.
- Missão.
- Visão.
- Valores.

### Página de Projetos

- Educação para Todos.
- Capacitação Profissional.
- Programa de Voluntariado.

### Formulário de Cadastro

- Nome completo.
- Data de nascimento.
- CPF.
- Telefone.
- E-mail.
- CEP.
- Cidade.
- Estado.
- Endereço.
- Mensagem.

### Persistência de Dados

- Armazenamento dos dados utilizando Local Storage.
- Recuperação automática do último cadastro.
- Preenchimento automático do formulário.

### Validação de Dados

- Campos obrigatórios.
- Validação de e-mail.
- Validação de CPF.
- Validação de telefone.
- Validação de CEP.
- Feedback visual para entradas inválidas.

### Máscaras de Entrada

- CPF.
- Telefone.
- CEP.

---

## 🛠 Tecnologias Utilizadas

### Front-end

- HTML5
- CSS3
- JavaScript ES6

### Arquitetura

- SPA (Single Page Application)
- ES Modules (`import` e `export`)

### Armazenamento

- Local Storage API

### Biblioteca Externa

- Inputmask 5.0.8

---

## 📂 Estrutura do Projeto

```text
projeto-ong/
│
├── index.html
│
├── CSS/
│   └── styles.css
│
├── img/
│   ├── logo.png
│   ├── educacao.png
│   ├── capacitacao.png
│   ├── voluntarios.png
│   └── ong.png
│
└── js/
    ├── app.js
    ├── router.js
    │
    └── pages/
        ├── inicio.js
        ├── projetos.js
        ├── cadastro.js
        └── naoEncontrada.js
```

---

## ⚙️ Arquitetura da Aplicação

O projeto foi desenvolvido com JavaScript modular utilizando **ES Modules**.

### app.js

Responsável por:

- Inicialização da aplicação.
- Configuração de eventos globais.
- Persistência no Local Storage.
- Aplicação das máscaras de entrada.
- Exibição de notificações Toast.

### router.js

Responsável por:

- Controle das rotas.
- Navegação SPA.
- Renderização dinâmica dos componentes.
- Gerenciamento de seções internas.

### pages/

Contém os componentes responsáveis pela renderização das páginas da aplicação.

- inicio.js
- projetos.js
- cadastro.js
- naoEncontrada.js

---

## 🔀 Sistema de Rotas

A navegação utiliza Hash Routing.

Exemplos:

```text
#/inicio
```

```text
#/inicio?secao=missao
```

```text
#/projetos
```

```text
#/projetos?secao=edu
```

```text
#/cadastro
```

A troca de páginas ocorre dinamicamente através do elemento:

```html
<div id="app"></div>
```

---

## 💾 Persistência com Local Storage

Após o envio do formulário, os dados são armazenados localmente no navegador.

Exemplo:

```javascript
localStorage.setItem(
    "cadastrosONG",
    JSON.stringify(cadastros)
);
```

Os dados são posteriormente recuperados através de:

```javascript
JSON.parse(
    localStorage.getItem("cadastrosONG")
);
```

Informações armazenadas:

- Nome
- Data de nascimento
- CPF
- Telefone
- E-mail
- CEP
- Cidade
- Estado
- Endereço
- Mensagem

---

## ✅ Validação dos Formulários

A aplicação utiliza validações nativas do HTML5 combinadas com JavaScript.

Recursos utilizados:

```html
required
```

```html
pattern
```

```html
type="email"
```

```html
maxlength
```

Também foram utilizados os métodos:

```javascript
checkValidity();
```

```javascript
reportValidity();
```

Com isso, o utilizador recebe feedback imediato em caso de preenchimento incorreto.

---

## 📋 Máscaras de Entrada

O projeto integra a biblioteca **Inputmask** para melhorar a experiência de preenchimento dos campos.

Campos atendidos:

- CPF
- Telefone
- CEP

Exemplos:

```text
12345678910
↓
123.456.789-10
```

```text
21999999999
↓
(21)99999-9999
```

```text
22041001
↓
22041-001
```

---

## 🔔 Sistema de Notificações

Após o cadastro, uma mensagem temporária é exibida ao utilizador utilizando o componente Toast.

Exemplo:

```text
Cadastro salvo com sucesso!
```

O Toast é ocultado automaticamente após alguns segundos.

---

## 📱 Responsividade

A interface foi desenvolvida utilizando:

- Flexbox.
- CSS Grid.
- Media Queries.

O sistema adapta automaticamente a disposição dos elementos para:

- Desktop.
- Tablets.
- Smartphones.

---

## 🌿 GitFlow

O projeto segue a estratégia GitFlow para organização do desenvolvimento.

### Branch Principal

```text
main
```

Responsável pela versão estável da aplicação.

### Branch de Desenvolvimento

```text
develop
```

Responsável pela integração contínua das funcionalidades.

### Branches de Funcionalidades

```text
feature/spa-router
```

```text
feature/formulario-cadastro
```

```text
feature/localstorage
```

```text
feature/validacoes
```

```text
feature/inputmask
```

### Branch de Correções

```text
hotfix/correcoes
```

---

## 🏷 Versionamento

O projeto utiliza Versionamento Semântico (SemVer).

Estrutura:

```text
MAJOR.MINOR.PATCH
```

Exemplos:

```text
v0.1.0
```

```text
v0.5.0
```

```text
v0.7.1
```

```text
v1.0.0
```

---

## 🧪 Testes Realizados

### Navegação

- Troca de rotas.
- Navegação por submenu.
- Página não encontrada.
- Scroll para seções específicas.

### Formulário

- Campos obrigatórios.
- E-mail inválido.
- CPF inválido.
- Telefone inválido.
- CEP inválido.

### Persistência

- Salvamento de registros.
- Recuperação de dados.
- Restauração automática do formulário.

### Interface

- Responsividade.
- Menu Mobile.
- Toast de notificação.

---

## 🔮 Melhorias Futuras

- Integração com API REST.
- Banco de dados.
- Painel administrativo.
- Dashboard de estatísticas.
- Consulta automática de CEP.
- Sistema de login e autenticação.
- Área administrativa para gestão de voluntários.

---

## 👨‍💻 Autor

**Hudson Vidal de Lima**

Projeto desenvolvido para fins acadêmicos com foco em:

- HTML5
- CSS3
- JavaScript Modular
- SPA
- Local Storage
- GitFlow
- Versionamento Semântico
- Boas práticas de desenvolvimento Front-end

---

## 📄 Licença

Projeto desenvolvido exclusivamente para fins educacionais e acadêmicos.
