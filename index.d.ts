/**
 * Prompts the user for a secret and stores it in localStorage.
 *
 * On first call, displays a `window.prompt()` dialog asking for the value.
 * On subsequent calls with the same key, returns the stored value from localStorage.
 *
 * Returns `null` if localStorage is unavailable (non-browser environment)
 * or if the user dismisses/cancels the prompt.
 *
 * @param key - The identifier for the secret (used to generate the localStorage key).
 * @returns The secret string, or `null` if unavailable.
 */
export function ask(key: string): string | null;
