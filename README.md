
# 📌 Hitesh Sir Persona Chatbot

An AI-powered chatbot that simulates conversations in the style and persona of **Hitesh Sir**.
Built with **Node.js (Express)** for the backend, **Google Gemini API** for AI responses, and a **Vanilla JS frontend** for chat UI.

---

## ✨ Features

* 💬 Chat interface with user + bot messages
* 🎨 Clean, bubble-style UI (user = blue, bot = gray)
* ⚡ Real-time responses powered by **Gemini**
* 🌐 Backend deployed on **Render**
* 🔑 Secure API key management with **dotenv**

---

## 🛠️ Tech Stack

* **Frontend**: HTML, CSS (Tailwind), JavaScript
* **Backend**: Node.js, Express.js
* **AI**: Google Gemini (`@google/generative-ai`)
* **Deployment**: Render

---

## 📂 Project Structure

```
├── frontend/
│   ├── index.html
│   ├── style.css
│   └── script.js
├── backend/
│   ├── server.js
│   ├── hitesh.js
│   ├── package.json
│   └── .env
└── README.md
```

---

## ⚡ Setup Instructions

### 1️⃣ Clone Repository

```bash
git clone https://github.com/your-username/HiteshSirPersona.git
cd HiteshSirPersona
```

### 2️⃣ Install Backend Dependencies

```bash
cd backend
npm install
```

### 3️⃣ Create `.env` File

Inside `backend/.env`, add:

```
GEMINI_API_KEY=your_gemini_api_key_here
PORT=5000
```

### 4️⃣ Run Backend Locally

```bash
node server.js
```

Server runs at:
👉 [http://localhost:5000](http://localhost:5000)

### 5️⃣ Run Frontend

Open `frontend/index.html` in a browser (or use **Live Server** in VS Code).

---

## 🚀 Deployment on Render

1. Push code to GitHub.
2. Go to [Render](https://render.com) → Create New Web Service.
3. Connect your repo.
4. Set **Build Command**:

   ```bash
   npm install
   ```

   and **Start Command**:

   ```bash
   node server.js
   ```
5. Add environment variable in Render dashboard:

   * `GEMINI_API_KEY = your_key`
6. Deploy 🎉

---

## 📸 Screenshots

### Chat UI

*User chatting with Hitesh Sir Persona*

![Chat UI Screenshot](screenshot.png)

---

## 🧑‍💻 Contributing

Contributions are welcome! Feel free to fork this repo and submit a PR.

-
