interface UserLocation {
  city: string
  latitude: number
  longitude: number
}

interface OpenMeteoResponse {
  current_weather: {
    temperature: number
    weathercode: number
  }
}

export async function getUserLocation(): Promise<UserLocation> {
  const res = await fetch('https://ipapi.co/json/', {
    cache: 'no-store',
  })
  if (!res.ok) {
    throw new Error('Failed to fetch location')
  }

  const data = (await res.json()) as Partial<{
    city: unknown
    latitude: unknown
    longitude: unknown
  }>

  const latitude = toNumber(data.latitude)
  const longitude = toNumber(data.longitude)

  if (
    typeof data.city !== 'string' ||
    !Number.isFinite(latitude) ||
    !Number.isFinite(longitude)
  ) {
    throw new Error('Location response is missing required fields')
  }

  return {
    city: data.city,
    latitude,
    longitude,
  }
}

export async function getWeather(
  lat: number,
  lon: number,
): Promise<OpenMeteoResponse> {
  const res = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`,
  )

  if (!res.ok) throw new Error('Failed to fetch weather')

  const data = (await res.json()) as Partial<{
    current_weather: Partial<{
      temperature: unknown
      weathercode: unknown
    }>
  }>

  if (
    typeof data.current_weather?.temperature !== 'number' ||
    typeof data.current_weather.weathercode !== 'number'
  ) {
    throw new Error('Weather response is missing current weather data')
  }

  return {
    current_weather: {
      temperature: data.current_weather.temperature,
      weathercode: data.current_weather.weathercode,
    },
  }
}

function toNumber(value: unknown): number {
  if (typeof value === 'number') {
    return value
  }

  if (typeof value === 'string') {
    return Number(value)
  }

  return Number.NaN
}
