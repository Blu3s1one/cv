import { useQuery } from '@tanstack/react-query'
import { getUserLocation, getWeather } from '@/api/weather'

interface UseWeatherOptions {
  enabled?: boolean
}

const WEATHER_STALE_TIME_MS = 30 * 60 * 1000
const WEATHER_GC_TIME_MS = 60 * 60 * 1000

export function useWeather({ enabled = true }: UseWeatherOptions = {}) {
  return useQuery({
    queryKey: ['weather'],
    staleTime: WEATHER_STALE_TIME_MS,
    gcTime: WEATHER_GC_TIME_MS,
    enabled,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    queryFn: async () => {
      const location = await getUserLocation()

      const weather = await getWeather(location.latitude, location.longitude)

      return {
        city: location.city,
        temperature: weather.current_weather.temperature,
        weather: getSceneWeatherFromCode(weather.current_weather.weathercode),
      }
    },
  })
}

function getSceneWeatherFromCode(code?: number) {
  if (code === undefined) return 'sunny' as const

  // Open-Meteo / WMO weather codes:
  // 0: Clear sky
  // 1: Mainly clear
  if (code === 0 || code === 1) return 'sunny' as const

  // 2: Partly cloudy, 3: Overcast
  // 45, 48: Fog / depositing rime fog
  if (code === 2 || code === 3 || code === 45 || code === 48)
    return 'cloudy' as const

  // Drizzle, freezing drizzle, rain, freezing rain, rain showers,
  // and all thunderstorm variants → treat as rainy
  if (
    [
      51, 53, 55, // drizzle
      56, 57, // freezing drizzle
      61, 63, 65, // rain
      66, 67, // freezing rain
      80, 81, 82, // rain showers
      95, 96, 99, // thunderstorm (with/without hail)
    ].includes(code)
  ) {
    return 'rainy' as const
  }

  // Snow fall, snow grains, snow showers → snowy
  if ([71, 73, 75, 77, 85, 86].includes(code)) return 'snowy' as const

  // Any other (rare/unsupported) code: fall back to cloudy
  return 'cloudy' as const
}
