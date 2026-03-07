import { Link, createFileRoute, useNavigate } from '@tanstack/react-router'
import { BedroomScene } from '#/components/weather/BedroomScene'
import { useWeather } from '@/hooks/useWeather'
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Button } from '@/components/ui/button'

type SceneWeather = 'sunny' | 'cloudy' | 'rainy' | 'snowy'
type SceneTime = 'day' | 'night'

interface WeatherSearch {
  city?: string
  temperature?: number
  weather?: SceneWeather
  time?: SceneTime
}

export const Route = createFileRoute('/weather')({
  validateSearch: (search: Record<string, unknown>): WeatherSearch => ({
    city: parseString(search.city),
    temperature: parseNumber(search.temperature),
    weather: parseSceneWeather(search.weather),
    time: parseSceneTime(search.time),
  }),
  component: WeatherPage,
})

function WeatherPage() {
  const search = Route.useSearch()
  const navigate = useNavigate({ from: Route.fullPath })
  const { t } = useTranslation()
  const hasUrlWeather =
    typeof search.city === 'string' &&
    search.city.length > 0 &&
    search.temperature !== undefined &&
    search.weather !== undefined
  const { data, isLoading, error } = useWeather({ enabled: !hasUrlWeather })
  const weatherData = hasUrlWeather
    ? {
        city: search.city,
        temperature: search.temperature,
        weather: search.weather,
      }
    : data

  useEffect(() => {
    if (!data) return

    const nextSearch = {
      city: data.city,
      temperature: data.temperature,
      weather: data.weather,
      time: getCurrentTimeOfDay(),
    }

    if (
      search.city === nextSearch.city &&
      search.temperature === nextSearch.temperature &&
      search.weather === nextSearch.weather &&
      search.time === nextSearch.time
    ) {
      return
    }

    navigate({
      search: (prev) => ({
        ...prev,
        ...nextSearch,
      }),
      replace: true,
    })
  }, [
    data,
    navigate,
    search.city,
    search.temperature,
    search.time,
    search.weather,
  ])

  const sceneWeather = weatherData?.weather ?? 'sunny'
  const sceneTime = search.time ?? getCurrentTimeOfDay()

  return (
    <div className="page-wrap py-20 space-y-12">
      <header className="space-y-4">
        <h1 className="display-title text-5xl md:text-7xl">
          {t('weather.pageTitle')}
        </h1>
        <p className="text-muted-foreground max-w-2xl text-lg">
          {t('weather.pageSubtitle')}
        </p>
      </header>

      <div className="max-w-full space-y-6">
        <BedroomScene
          weather={sceneWeather}
          time={sceneTime}
          tvContent={{
            loadingLabel: t('weather.loading'),
            unavailableLabel: t('weather.unavailable'),
            city: weatherData?.city,
            temperature: weatherData?.temperature,
            state: hasUrlWeather
              ? 'ready'
              : isLoading
                ? 'loading'
                : error || !weatherData
                  ? 'error'
                  : 'ready',
          }}
        />

        <div className="flex justify-center">
          <Button asChild size="lg">
            <Link to="/">{t('weather.backToCv')}</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

function getCurrentTimeOfDay(): SceneTime {
  const hour = new Date().getHours()
  return hour >= 20 || hour < 6 ? 'night' : 'day'
}

function parseNumber(value: unknown) {
  if (typeof value === 'number' && Number.isFinite(value)) return value
  if (typeof value === 'string' && value.trim() !== '') {
    const parsed = Number(value)
    if (Number.isFinite(parsed)) return parsed
  }
  return undefined
}

function parseString(value: unknown) {
  return typeof value === 'string' && value.trim() !== '' ? value : undefined
}

function parseSceneTime(value: unknown) {
  return value === 'day' || value === 'night' ? value : undefined
}

function parseSceneWeather(value: unknown) {
  return value === 'sunny' ||
    value === 'cloudy' ||
    value === 'rainy' ||
    value === 'snowy'
    ? value
    : undefined
}
