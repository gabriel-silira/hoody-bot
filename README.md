# 🤖 Hoody Bot

Bot para Discord com comandos de moderação, entretenimento e informações, acompanhado de um site responsivo para apresentação e consulta dos comandos.

**Versão:** `2.2.2`

<p align="center">
  <img src="bot/images/Banner%26Avatar.png" alt="Banner do Hoody Bot" width="720">
</p>

## 🌐 Site

🔗 **Acesse o projeto:** [Hoody Bot](https://gabriel-silira.github.io/hoody-bot/site/)

No site é possível conhecer o bot, consultar seus 18 comandos e acessar o fluxo de adição ao Discord.

---

## ✨ Funcionalidades

- **Comandos de barra:** interação pelo menu de comandos do Discord.
- **Moderação:** banimento, desbanimento, expulsão e timeout.
- **Entretenimento:** saudação, cara ou coroa, dados e piadas aleatórias.
- **Informações:** ajuda, latência, data, hora e dados do bot.
- **Respostas em embeds:** retorno visual para ações de moderação.
- **Site responsivo:** páginas de apresentação e comandos adaptadas para desktop, tablet e celular.
- **Busca de comandos:** filtro por nome, descrição ou categoria diretamente no site.

---

## 🛡️ Comandos de moderação

| Comando    | Descrição                                          | Exemplo                       |
| ---------- | -------------------------------------------------- | ----------------------------- |
| `/ban`     | Bane um membro e registra o motivo informado.      | `/ban @usuário motivo`        |
| `/unban`   | Remove o banimento de um usuário.                  | `/unban @usuário motivo`      |
| `/kick`    | Expulsa um membro sem aplicar banimento.           | `/kick @usuário motivo`       |
| `/timeout` | Aplica um timeout por minutos ou o remove com `0`. | `/timeout @usuário 10 motivo` |

Os comandos de moderação verificam as permissões correspondentes do membro que executa a ação. O cargo do Hoody também precisa estar acima do cargo do membro moderado e possuir as permissões necessárias.

## 🎮 Comandos de entretenimento

| Comando   | Descrição                                                    |
| --------- | ------------------------------------------------------------ |
| `/hoody`  | Envia uma saudação usando o nome de quem executou o comando. |
| `/moeda`  | Sorteia entre cara e coroa.                                  |
| `/d6`     | Rola um dado de seis lados.                                  |
| `/d20`    | Rola um dado de vinte lados.                                 |
| `/d100`   | Rola um dado de cem lados.                                   |
| `/piadas` | Escolhe uma piada aleatória da coleção do Hoody.             |

## ℹ️ Comandos de informação

| Comando       | Descrição                                                              |
| ------------- | ---------------------------------------------------------------------- |
| `/help`       | Mostra a central de ajuda com os comandos separados por categoria.     |
| `/dev`        | Mostra quem criou o Hoody Bot.                                         |
| `/site`       | Envia o endereço do site do projeto.                                   |
| `/servidores` | Mostra em quantos servidores o bot está presente.                      |
| `/infos`      | Envia uma informação aleatória sobre o Hoody.                          |
| `/ping`       | Mostra a latência atual do bot em milissegundos.                       |
| `/data`       | Mostra a data configurada no ambiente em que o bot está executando.    |
| `/hora`       | Mostra o horário configurado no ambiente em que o bot está executando. |

### Resumo

| Categoria      | Quantidade |
| -------------- | ---------: |
| Moderação      |          4 |
| Entretenimento |          6 |
| Informação     |          8 |
| **Total**      |     **18** |

---

## 🛠️ Tecnologias utilizadas

| Tecnologia    | Aplicação                                               |
| ------------- | ------------------------------------------------------- |
| Python        | Lógica e execução do bot                                |
| discord.py    | Integração com a API do Discord e comandos de aplicação |
| python-dotenv | Leitura segura do token pelo arquivo de ambiente        |
| HTML5         | Estrutura das páginas do site                           |
| CSS3          | Identidade visual, layout e responsividade              |
| JavaScript    | Menu móvel, busca e comportamentos da interface         |
| GitHub Pages  | Publicação do site estático                             |

---

## 🚀 Executando o bot localmente

### Pré-requisitos

- Python 3 instalado.
- Uma aplicação e um bot configurados no [Discord Developer Portal](https://discord.com/developers/applications).
- Intents e permissões adequados aos comandos que serão utilizados.

### Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/gabriel-silira/hoody-bot.git
   cd hoody-bot
   ```

2. Crie e ative um ambiente virtual:

   ```bash
   python -m venv .venv
   ```

   No Windows:

   ```powershell
   .\.venv\Scripts\Activate.ps1
   ```

3. Instale as dependências:

   ```bash
   pip install discord.py python-dotenv
   ```

4. Crie um arquivo `.env` na raiz do projeto:

   ```env
   TOKEN=seu_token_do_discord
   ```

5. Inicie o bot:

   ```bash
   python bot/hoodybot.py
   ```

> Nunca publique o token do bot. Caso ele seja exposto, gere um novo token imediatamente no Discord Developer Portal.

---

## 📂 Estrutura do projeto

```text
hoody-bot/
├── bot/
│   ├── images/
│   │   ├── Avatar.png
│   │   └── Banner&Avatar.png
│   ├── hoodybot.py
│   ├── infos.py
│   └── piadas.py
├── site/
│   ├── images/
│   ├── script/
│   │   └── script.js
│   ├── style/
│   │   ├── comandos.css
│   │   ├── responsive.css
│   │   └── style.css
│   ├── comandos.html
│   └── index.html
└── README.md
```

### Organização dos arquivos

- **`bot/hoodybot.py`** — inicialização do bot e definição dos comandos.
- **`bot/infos.py`** — informações aleatórias utilizadas pelo comando `/infos`.
- **`bot/piadas.py`** — coleção utilizada pelo comando `/piadas`.
- **`site/index.html`** — página inicial e apresentação do Hoody.
- **`site/comandos.html`** — catálogo pesquisável dos 18 comandos.
- **`site/style/`** — estilos compartilhados, página de comandos e responsividade.
- **`site/script/script.js`** — menu móvel, busca de comandos e atualização do ano.
- **`site/images/`** — avatar e fundos utilizados no site.

---

## 🎯 Objetivo do projeto

O Hoody Bot foi desenvolvido para reunir recursos comuns de administração e interação em uma experiência simples dentro do Discord. O projeto também demonstra integração com a API do Discord, organização de comandos de aplicação e desenvolvimento de uma interface web responsiva para documentação e apresentação do bot.

---

**Desenvolvido por [Gabriel Silira](https://github.com/gabriel-silira) — SLRDev**
