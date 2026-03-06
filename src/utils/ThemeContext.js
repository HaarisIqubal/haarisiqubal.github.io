import { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

// mode: 'system' | 'light' | 'dark'
export function ThemeProvider({ children }) {
  const [mode, setMode] = useState(
    () => localStorage.getItem('theme-mode') || 'system'
  );
  const [systemDark, setSystemDark] = useState(
    () => window.matchMedia('(prefers-color-scheme: dark)').matches
  );

  // Track OS preference changes
  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    const handler = (e) => setSystemDark(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  const isDark = mode === 'dark' || (mode === 'system' && systemDark);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
    localStorage.setItem('theme-mode', mode);
  }, [isDark, mode]);

  // Cycles: system → light → dark → system
  const toggle = () =>
    setMode((prev) => (prev === 'system' ? 'light' : prev === 'light' ? 'dark' : 'system'));

  return (
    <ThemeContext.Provider value={{ isDark, mode, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
