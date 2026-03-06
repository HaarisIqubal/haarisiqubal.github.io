import { HiSun, HiMoon, HiComputerDesktop } from 'react-icons/hi2';
import { useTheme } from '../utils/ThemeContext';

const icons = {
  system: <HiComputerDesktop size={18} />,
  light:  <HiSun size={18} />,
  dark:   <HiMoon size={18} />,
};

export default function ThemeToggle() {
  const { mode, toggle } = useTheme();
  return (
    <button
      onClick={toggle}
      aria-label={`Theme: ${mode} — click to cycle`}
      title={`Theme: ${mode}`}
      className="flex items-center gap-1 px-2 py-1 rounded transition ease-in-out duration-200 code-font text-sm"
      style={{ color: 'var(--color-muted)', border: '1px solid var(--color-border)' }}
    >
      {icons[mode]}
      <span className="hidden sm:inline text-xs">{mode}</span>
    </button>
  );
}
