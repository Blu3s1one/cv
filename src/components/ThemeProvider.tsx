import {
  createContext,
  useContext,
  useEffect,
  useLayoutEffect,
  useState,
} from 'react'
import type { ReactNode } from 'react'
import {
  applyThemeMode,
  cycleThemeMode,
  getStoredThemeMode,
  persistThemeMode,
} from '@/lib/theme'
import type { ThemeMode } from '@/lib/theme'

interface ThemeContextValue {
  mode: ThemeMode
  toggleMode: () => void
}

const ThemeContext = createContext<ThemeContextValue | null>(null)

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<ThemeMode>(() => getStoredThemeMode())

  useLayoutEffect(() => {
    applyThemeMode(mode)
  }, [mode])

  useEffect(() => {
    persistThemeMode(mode)
  }, [mode])

  useEffect(() => {
    if (mode !== 'auto') {
      return
    }

    const media = window.matchMedia('(prefers-color-scheme: dark)')
    const onChange = () => applyThemeMode('auto')

    media.addEventListener('change', onChange)
    return () => {
      media.removeEventListener('change', onChange)
    }
  }, [mode])

  const value = {
    mode,
    toggleMode: () => setMode((currentMode) => cycleThemeMode(currentMode)),
  }

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  const value = useContext(ThemeContext)

  if (!value) {
    throw new Error('useTheme must be used within ThemeProvider')
  }

  return value
}
