export function ask(key) {
  const promptMessage = `${key} ?`;
  const localStorageKey = `secret_${btoa(key)}`;

  if (typeof localStorage === "undefined") {
    console.warn(
      "🚨 localStorage is not available. This function only works in a browser context."
    );
    return null;
  }

  let secret = localStorage.getItem(localStorageKey);
  if (!secret) {
    secret = window.prompt(promptMessage);
    if (secret) {
      localStorage.setItem(localStorageKey, secret);
      console.log("🔑 Secret stored successfully.");
    } else {
      console.warn("⚠️ No secret provided.");
    }
  }
  return secret;
}

// Usage Example:
/*
const API_SECRET = ask("API_KEY");

if (API_SECRET) {
  const apiClient = new SomeApiClient({
    headers: { Authorization: `Bearer ${API_SECRET}` },
  });
  console.log("✅ API Client initialized with secret.");
} else {
  console.error("❌ No secret provided.");
}
*/
