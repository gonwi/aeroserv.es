'use client';

import { usePathname, useRouter } from 'next/navigation';
import { ChevronDown } from 'lucide-react';
import type { Lang } from '@/lib/i18n';

export function LanguageSwitcher({ currentLang, label }: { currentLang: Lang; label: string }) {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <label
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 8,
        border: '1px solid rgba(255,255,255,0.12)',
        borderRadius: 999,
        padding: '10px 14px',
        background: 'rgba(255,255,255,0.03)',
        color: 'white',
        position: 'relative',
      }}
    >
      <span style={{ fontSize: 13, color: '#d8e1eb' }}>{label}</span>
      <select
        aria-label={label}
        value={currentLang}
        onChange={(e) => {
          const nextLang = e.target.value as Lang;
          const parts = pathname.split('/');
          parts[1] = nextLang;
          router.push(parts.join('/') || `/${nextLang}`);
        }}
        style={{
          appearance: 'none',
          background: 'transparent',
          color: 'white',
          border: 'none',
          outline: 'none',
          paddingRight: 20,
          fontWeight: 700,
          cursor: 'pointer',
          fontSize: 14,
          minWidth: 82,
        }}
      >
        <option value="es" style={{ color: 'black' }}>🇪🇸 ES</option>
        <option value="en" style={{ color: 'black' }}>🇬🇧 EN</option>
      </select>
      <ChevronDown size={16} style={{ pointerEvents: 'none' }} />
    </label>
  );
}
