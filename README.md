# 🎬 PurplePlay

Primeiro site realizado por mim, não tinha muito conhecimento na época. <br>
Uma plataforma moderna de streaming de filmes com interface intuitiva e sistema de autenticação.

![PurplePlay](https://img.shields.io/badge/Status-Em%20Desenvolvimento-yellow)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)
![Firebase](https://img.shields.io/badge/Firebase-FFCA28?logo=firebase&logoColor=black)

## 🚀 Funcionalidades

- ✅ **Sistema de Login/Cadastro** com Firebase Authentication (Clique no ícone no canto superior direito)
- ✅ **Navegação por Gêneros** (Ação, Comédia, Drama, Terror, etc.)
- ✅ **Interface Responsiva** para desktop e mobile
- ✅ **Catálogo de Filmes** organizado por categorias
- ✅ **Sistema de Favoritos** (Meus Filmes)
- ✅ **Sinopses Detalhadas** dos filmes
- ✅ **Animações e Transições** suaves

## 🛠️ Tecnologias Utilizadas

- **Frontend:** HTML5, CSS3, JavaScript (Vanilla)
- **Backend:** Firebase (Authentication + Realtime Database)
- **Hospedagem:** GitHub Pages
- **Design:** CSS Grid, Flexbox, Animações CSS

## 🎯 Estrutura do Projeto

```
PurplePlay/
├── index.html              # Página de login/cadastro
├── principal_v2.html       # Página principal
├── firebase-config.js      # Configurações do Firebase
├── script.js               # Scripts principais
├── sinopse2.js            # Script para sinopses
├── navbarvoltar.js        # Navegação
├── style.css              # Estilos principais
├── navbar.css             # Estilos da navbar
├── sinopse.css            # Estilos das sinopses
├── imagens/               # Assets de imagens
└── Login/                 # Estilos do login
    ├── carregar.css
    ├── fadein.css
    └── opcao2.css
```

## 📱 Como Usar

### 1. **Acesso Online**
Visite: [3Gb3.github.io/PurplePlay](https://3Gb3.github.io/PurplePlay)

### 2. **Executar Localmente**
```bash
# Clone o repositório
git clone https://github.com/3Gb3/PurplePlay.git

# Entre na pasta
cd PurplePlay

# Abra o index.html no navegador
# Ou use um servidor local (Live Server no VS Code)
```

## 🔧 Configuração do Firebase

Este projeto usa Firebase para autenticação e armazenamento. Para usar em seu próprio projeto:

### **⚠️ IMPORTANTE - Configuração Local:**

1. **Copie o arquivo template:**
   ```bash
   cp firebase-config.template.js firebase-config.js
   ```

2. **Configure suas credenciais:**
   - Crie um projeto no [Firebase Console](https://console.firebase.google.com)
   - Configure Authentication (Email/Password)
   - Configure Realtime Database
   - Substitua as credenciais em `firebase-config.js`

3. **Configure as regras de segurança** (veja seção abaixo)

### **🔒 Para GitHub Pages/Produção:**
- Use variáveis de ambiente ou configure diretamente no arquivo para deploy
- As chaves Firebase são seguras para frontend quando as regras estão configuradas corretamente

### Regras de Segurança Recomendadas

```javascript
// Realtime Database Rules
{
  "rules": {
    "meusFilmes": {
      "$userId": {
        ".read": "auth != null && auth.uid == $userId",
        ".write": "auth != null && auth.uid == $userId"
      }
    }
  }
}
```

---

⭐ **Gostou do projeto? Deixe uma estrela!** ⭐
