import { useTranslation } from 'react-i18next'
import { en } from '@/data/en'
import { fr } from '@/data/fr'
import type { CVData } from '@/types/cv'

const locales: Record<string, CVData> = { en, fr }

// Returns correct CV data based on the current language
export function useCV(): CVData {
  const { i18n } = useTranslation()
  const locale = i18n.language.startsWith('fr') ? 'fr' : 'en'
  return locales[locale]
}
