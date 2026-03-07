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

  if (code === 0) return 'sunny' as const
  if (code >= 1 && code <= 3) return 'cloudy' as const
  if ((code >= 45 && code <= 67) || (code >= 80 && code <= 82))
    return 'rainy' as const
  if ((code >= 71 && code <= 77) || (code >= 85 && code <= 86))
    return 'snowy' as const

  return 'cloudy' as const
}
