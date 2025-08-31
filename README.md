# Ranking 2025 - Liga Oeste Paulista de Tênis de Mesa

Este projeto apresenta o **Ranking 2025 da Liga Oeste Paulista de Tênis de Mesa**, em formato de site interativo.
Feito em **React + Vite**, publicado no **Netlify** e atualizado via **CSV**.

---

## 🚀 Como rodar localmente

1. Clone este repositório:
   ```bash
   git clone https://github.com/seu-usuario/ranking-tenis-2025.git
   cd ranking-tenis-2025
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Rode o servidor local:
   ```bash
   npm run dev
   ```

O site abrirá em [http://localhost:5173](http://localhost:5173).

---

## 🌍 Deploy no Netlify

1. Crie uma conta em [Netlify](https://www.netlify.com/) (se ainda não tiver).  
2. Clique em **New Site from Git**.  
3. Conecte ao seu repositório do GitHub.  
4. No campo de build configure:  
   - **Build Command:** `npm run build`  
   - **Publish directory:** `dist`  

---

## 🔄 Atualizando o Ranking

Para atualizar o ranking basta substituir o arquivo:

```
public/ranking.csv
```

e dar **commit + push** no GitHub. O Netlify fará o deploy automaticamente.

---

## 🎨 Cores do site

O site utiliza **azul, verde e branco** em tons suaves, conforme solicitado.

---

👨‍💻 Desenvolvido para a Liga Oeste Paulista de Tênis de Mesa - 2025
