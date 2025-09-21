# 🎬 PurplePlay

Uma plataforma moderna de streaming de filmes com interface intuitiva e sistema de autenticação.

![PurplePlay](https://img.shields.io/badge/Status-Em%20Desenvolvimento-yellow)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)
![Firebase](https://img.shields.io/badge/Firebase-FFCA28?logo=firebase&logoColor=black)

## 🚀 Funcionalidades

- ✅ **Sistema de Login/Cadastro** com Firebase Authentication
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
├── index.html              # Página principal
├── login.html              # Página de login/cadastro
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
Visite: [seuusuario.github.io/PurplePlay](https://seuusuario.github.io/PurplePlay)

### 2. **Executar Localmente**
```bash
# Clone o repositório
git clone https://github.com/seuusuario/PurplePlay.git

# Entre na pasta
cd PurplePlay

# Abra o index.html no navegador
# Ou use um servidor local (Live Server no VS Code)
```

### 3. **Primeiro Acesso**
1. Abra a aplicação
2. Clique em "Login" no canto superior direito
3. Crie uma conta ou faça login
4. Explore o catálogo de filmes!

## 🔧 Configuração do Firebase

Este projeto usa Firebase para autenticação e armazenamento. Para usar em seu próprio projeto:

1. Crie um projeto no [Firebase Console](https://console.firebase.google.com)
2. Configure Authentication (Email/Password)
3. Configure Realtime Database
4. Atualize as credenciais em `firebase-config.js`
5. Configure as regras de segurança (veja seção abaixo)

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

## 🌟 Próximas Funcionalidades

- [ ] Sistema de avaliações
- [ ] Busca avançada de filmes
- [ ] Trailers integrados
- [ ] Modo escuro
- [ ] Perfis de usuário
- [ ] Recomendações personalizadas

## 📸 Screenshots

*[Adicione screenshots do projeto aqui]*

## 🤝 Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para:

1. Fazer um Fork do projeto
2. Criar uma Branch para sua feature (`git checkout -b feature/NovaFuncionalidade`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova funcionalidade'`)
4. Push para a Branch (`git push origin feature/NovaFuncionalidade`)
5. Abrir um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👨‍💻 Autor

**Seu Nome**
- GitHub: [@seuusuario](https://github.com/seuusuario)
- LinkedIn: [Seu Perfil](https://linkedin.com/in/seuperfil)

---

⭐ **Gostou do projeto? Deixe uma estrela!** ⭐