'use client';

import { useEffect, useState } from 'react';
import { Laptop, Moon, Sun } from 'lucide-react';
import { useSiteTheme } from './providers';

export function ThemeToggle() {
  const { theme, resolvedTheme, setTheme } = useSiteTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const activeTheme = mounted ? (theme ?? 'system') : 'system';

  return (
    <div className="theme-toggle" role="group" aria-label="Theme">
      <button
        type="button"
        className={`theme-toggle__option ${activeTheme === 'system' ? 'is-active' : ''}`}
        onClick={() => setTheme('system')}
        aria-label={`Use system theme${mounted ? `, currently ${resolvedTheme}` : ''}`}
        title={`Use system theme${mounted ? ` (${resolvedTheme})` : ''}`}
      >
        <Laptop size={15} />
      </button>
      <button
        type="button"
        className={`theme-toggle__option ${activeTheme === 'light' ? 'is-active' : ''}`}
        onClick={() => setTheme('light')}
        aria-label="Use light mode"
        title="Use light mode"
      >
        <Sun size={15} />
      </button>
      <button
        type="button"
        className={`theme-toggle__option ${activeTheme === 'dark' ? 'is-active' : ''}`}
        onClick={() => setTheme('dark')}
        aria-label="Use dark mode"
        title="Use dark mode"
      >
        <Moon size={15} />
      </button>
    </div>
  );
}
