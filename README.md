# ask-secret 🔑

> **Stop saving secrets in your frontend repo. Seriously.**

## 🚀 What is this?

`ask-secret` is a tiny, no-nonsense utility that helps you **keep secrets out of your frontend code** while developing. Instead of hardcoding API keys, it **asks for them** via `window.prompt` and keeps them in `localStorage` (so you don’t have to type them every time).

⚠️ **Not for production!** This is just a dev-time helper.

## 🔥 Why use this?

- **No more committing secrets by accident** 🔥
- **Quick and easy** – Just call `ask("my key")`
- **Browser-friendly** – Uses `localStorage` to remember secrets temporarily
- **No dependencies** – Just drop it in and go!

## 🛠 Installation

```sh
npm install ask-secret
```

## 🎯 Usage

```js
import { ask } from "ask-secret";

const API_KEY = ask("OpenAI secret key");

if (API_KEY) {
  const apiClient = new SomeApiClient({
    headers: { Authorization: `Bearer ${API_KEY}` },
  });
  console.log("✅ API Client initialized with secret.");
} else {
  console.error("❌ No secret provided.");
}
```

## 🛑 Clearing Secrets

Need to reset your stored secret? Open the DevTools console and run:

```js
localStorage.clear();
```

## 🏴‍☠️ But... is this secure?

Nope. It’s just **better than committing secrets**. Anyone with access to your browser can see the secret in `localStorage`, so don’t use this for anything serious!

## 📜 License

MIT – Do whatever you want, but **don’t blame me if you accidentally paste your API key into Discord.** 😅
