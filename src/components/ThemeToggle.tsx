import { Button } from '@heroui/react';
import Moon from '@gravity-ui/icons/Moon';
import Sun from '@gravity-ui/icons/Sun';

export default function ThemeToggle() {
  function toggleTheme() {
    const root = document.documentElement;
    const theme = root.classList.contains('dark') ? 'light' : 'dark';
    root.classList.toggle('dark', theme === 'dark');
    root.dataset.theme = theme;
    try {
      localStorage.setItem('yagu-theme', theme);
    } catch {
      // The theme still works when browser storage is unavailable.
    }
  }

  return (
    <Button isIconOnly variant="secondary" className="theme-toggle"
      aria-label="Cambiar entre tema claro y oscuro" onPress={toggleTheme}>
      <Sun className="theme-toggle__sun" width={20} height={20} aria-hidden="true" />
      <Moon className="theme-toggle__moon" width={20} height={20} aria-hidden="true" />
    </Button>
  );
}
