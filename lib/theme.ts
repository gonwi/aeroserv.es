export const THEME_STORAGE_KEY = 'aeroserv-theme';

export type ThemePreference = 'system' | 'light' | 'dark';
export type ResolvedTheme = 'light' | 'dark';

export function getThemeScript() {
  return `
    (() => {
      const storageKey = '${THEME_STORAGE_KEY}';
      const root = document.documentElement;
      const stored = localStorage.getItem(storageKey);
      const preference = stored === 'light' || stored === 'dark' || stored === 'system'
        ? stored
        : 'system';
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      const resolvedTheme = preference === 'system' ? systemTheme : preference;

      root.dataset.themePreference = preference;
      root.dataset.themeResolved = resolvedTheme;
      root.classList.toggle('dark', resolvedTheme === 'dark');
      root.style.colorScheme = resolvedTheme;
    })();
  `;
}
