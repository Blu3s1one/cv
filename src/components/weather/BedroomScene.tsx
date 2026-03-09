type SceneWeather = 'sunny' | 'cloudy' | 'rainy' | 'snowy'
type SceneTime = 'day' | 'night'

interface TVContent {
  loadingLabel: string
  unavailableLabel: string
  state: 'loading' | 'error' | 'ready'
  city?: string
  temperature?: number
}

export interface BedroomSceneProps {
  weather?: SceneWeather
  time?: SceneTime
  tvContent: TVContent
}

export function BedroomScene({
  weather = 'sunny',
  time = 'day',
  tvContent,
}: BedroomSceneProps) {
  const isNight = time === 'night'
  const sceneSky = isNight ? 'var(--scene-sky-night)' : 'var(--scene-sky-day)'

  return (
    <div
      className="relative mx-auto aspect-[3/2] w-full max-w-2xl overflow-hidden rounded-2xl border-4"
      style={{
        backgroundColor: 'var(--scene-room)',
        borderColor: 'var(--scene-room-border)',
      }}
    >
      {/* Window */}
      <div
        className="absolute top-8 left-8 h-28 w-32 overflow-hidden rounded-lg border-4 sm:left-12 md:left-16"
        style={{
          backgroundColor: sceneSky,
          borderColor: 'var(--scene-window-frame)',
        }}
      >
        <WeatherOutside weather={weather} time={time} />
      </div>

      {/* Desk and computer */}
      <div className="absolute right-8 bottom-44 hidden w-36 sm:right-10 sm:w-42 md:right-14 md:block md:w-48">
        <div className="absolute bottom-0 left-0 h-3 w-full rounded-sm shadow-md" style={{ backgroundColor: 'var(--scene-desk-top)' }} />
        <div className="absolute bottom-[-104px] left-3 h-[104px] w-3 rounded-b-sm" style={{ backgroundColor: 'var(--scene-desk-leg)' }} />
        <div className="absolute bottom-[-104px] right-4 h-[104px] w-3 rounded-b-sm" style={{ backgroundColor: 'var(--scene-desk-leg)' }} />

        <div className="relative -top-3 ml-7 w-26 sm:ml-8 sm:w-28 md:ml-9 md:w-32">
          <div className="rounded-lg bg-neutral-900 p-1.5 shadow-2xl ring-2 ring-neutral-700">
            <div className="relative overflow-hidden rounded-[4px] border border-cyan-400/30 bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950 px-2 py-2 text-cyan-100">
              <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(to_bottom,transparent_0%,rgba(255,255,255,0.18)_50%,transparent_100%)] [background-size:100%_6px]" />
              <div className="relative space-y-1">
                <TVScreenContent tvContent={tvContent} />
              </div>
            </div>
          </div>
          <div className="mx-auto h-3 w-3 bg-neutral-800" />
          <div className="mx-auto h-1.5 w-12 rounded-full bg-neutral-700" />
        </div>
      </div>

      {/* Bed */}
      <div
        className="absolute bottom-16 left-8 hidden h-20 w-48 rounded-md shadow-md sm:left-12 sm:w-56 md:left-16 md:block md:w-60"
        style={{ backgroundColor: 'var(--scene-bed-cover)' }}
      >
        <div className="absolute -top-3 left-3 h-6 w-16 rounded-full shadow-sm" style={{ backgroundColor: 'var(--scene-pillow)' }} />
        <div className="absolute bottom-0 h-10 w-full rounded-b-md" style={{ backgroundColor: 'var(--scene-desk-top)' }} />
        <div className="absolute -bottom-3 left-2 h-3 w-2 rounded-b-sm" style={{ backgroundColor: 'var(--scene-desk-top)' }} />
        <div className="absolute -bottom-3 right-2 h-3 w-2 rounded-b-sm" style={{ backgroundColor: 'var(--scene-desk-top)' }} />
      </div>

      {/* Cat */}
      <div className="absolute bottom-10 right-16 sm:right-24 md:right-32">
        {/* Tail, starting at back and resting on floor */}
        <div className="absolute bottom-0 left-8 h-2 w-12 rounded-full" style={{ backgroundColor: 'var(--scene-cat)' }} />

        {/* Body */}
        <div className="relative h-9 w-16 rounded-full shadow-sm" style={{ backgroundColor: 'var(--scene-cat)' }} />

        {/* Paws: two at left, one at right (fourth hidden in perspective) */}
        <div className="absolute -bottom-1 left-1 flex gap-1">
          <div className="h-2 w-2.5 rounded-full" style={{ backgroundColor: 'var(--scene-cat-detail)' }} />
          <div className="h-2 w-2.5 rounded-full" style={{ backgroundColor: 'var(--scene-cat-detail)' }} />
        </div>
        <div className="absolute -bottom-1 right-2 h-2 w-2.5 rounded-full" style={{ backgroundColor: 'var(--scene-cat-detail)' }} />

        {/* Head, shifted more to the left */}
        <div className="absolute -top-7 left-1 w-9 h-9">
          {/* Outer ears behind head */}
          <div className="absolute -top-1 left-1 z-0 h-3 w-3 rotate-45 rounded-[2px]" style={{ backgroundColor: 'var(--scene-cat)' }} />
          <div className="absolute -top-1 right-1 z-0 h-3 w-3 rotate-45 rounded-[2px]" style={{ backgroundColor: 'var(--scene-cat)' }} />

          {/* Head circle */}
          <div className="relative z-10 h-9 w-9 rounded-full" style={{ backgroundColor: 'var(--scene-cat)' }}>
            {/* Inner ears (front-facing detail) */}
            <div className="absolute -top-[2px] left-[6px] h-2 w-2 rotate-45 rounded-[1px]" style={{ backgroundColor: 'var(--scene-cat-detail)' }} />
            <div className="absolute -top-[2px] right-[6px] h-2 w-2 rotate-45 rounded-[1px]" style={{ backgroundColor: 'var(--scene-cat-detail)' }} />

            {/* Eyes (slightly higher) */}
            <div className="absolute top-2.5 left-2.5 h-1.5 w-1.5 rounded-full" style={{ backgroundColor: 'var(--scene-cat-eye)' }} />
            <div className="absolute top-2.5 right-2.5 h-1.5 w-1.5 rounded-full" style={{ backgroundColor: 'var(--scene-cat-eye)' }} />

            {/* Nose - small triangle pointing upwards */}
            <div
              className="absolute top-4 left-1/2 -translate-x-1/2 w-0 h-0"
              style={{
                borderLeft: '3px solid transparent',
                borderRight: '3px solid transparent',
                borderBottom: '0',
                borderTop: '4px solid var(--scene-cat-detail)',
              }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

interface TVScreenContentProps {
  tvContent: TVContent
}

function TVScreenContent({ tvContent }: TVScreenContentProps) {
  if (tvContent.state === 'loading') {
    return (
        <p className="text-sm text-cyan-100/80">{tvContent.loadingLabel}</p>
    )
  }

  if (tvContent.state === 'error') {
    return (
        <p className="text-sm text-rose-200">{tvContent.unavailableLabel}</p>
      
    )
  }

  if (tvContent.temperature === undefined) {
    return (
        <p className="text-sm text-rose-200">{tvContent.unavailableLabel}</p>
    )
  }

  return (
    <>
      {tvContent.city && (
        <p className="truncate text-sm font-semibold leading-tight text-white">
          {tvContent.city}
        </p>
      )}
      <div className="flex items-end gap-2">
        <p className="text-xl font-bold tracking-tight text-cyan-50">
          {tvContent.temperature}°C
        </p>
      </div>
    </>
  )
}

interface WeatherOutsideProps {
  weather: SceneWeather
  time: SceneTime
}

function WeatherOutside({ weather, time }: WeatherOutsideProps) {
  return (
    <div
      className="absolute inset-0"
      style={{
        backgroundColor:
          time === 'night' ? 'var(--scene-sky-night)' : 'var(--scene-sky-day)',
      }}
    >
      {weather === 'sunny' && <Sunny time={time} />}
      {weather === 'cloudy' && <Cloudy />}
      {weather === 'rainy' && <Rain />}
      {weather === 'snowy' && <Snow />}
    </div>
  )
}

interface SunnyProps {
  time: SceneTime
}

function Sunny({ time }: SunnyProps) {
  if (time === 'night') {
    return (
      <>
        <div className="absolute top-3 right-3 h-6 w-6 rounded-full" style={{ backgroundColor: 'var(--scene-moon)' }} />
        <div className="absolute top-3 right-1 h-6 w-6 rounded-full" style={{ backgroundColor: 'var(--scene-sky-night)' }} />
      </>
    )
  }

  return (
    <div className="absolute top-3 right-3 h-8 w-8 rounded-full shadow-md" style={{ backgroundColor: 'var(--scene-sun)' }} />
  )
}

function Cloudy() {
  return (
    <>
      <div className="absolute top-4 left-4 h-6 w-12 rounded-full" style={{ backgroundColor: 'var(--scene-cloud-1)' }} />
      <div className="absolute top-6 left-8 h-7 w-14 rounded-full" style={{ backgroundColor: 'var(--scene-cloud-2)' }} />
    </>
  )
}

function Rain() {
  return (
    <>
      <StormCloud />
      {[...Array(4)].map((_, i) => (
        <div
          key={i}
          className="absolute z-0 h-5 w-0.5 rotate-[12deg]"
          style={{
            backgroundColor: 'var(--scene-rain)',
            left: `${35 + i * 12}px`,
            top: '43px',
          }}
        />
      ))}
    </>
  )
}

function Snow() {
  return (
    <>
      <StormCloud />
      {snowDots.map(({ left, top }, index) => (
        <div
          key={index}
          className="absolute h-1.5 w-1.5 rounded-full"
          style={{
            backgroundColor: 'var(--scene-pillow)',
            left: `${left}px`,
            top: `${top}px`,
          }}
        />
      ))}
    </>
  )
}

function StormCloud() {
  return (
    <>
      <div className="absolute top-6 left-5 z-10 h-5 w-10 rounded-full" style={{ backgroundColor: 'var(--scene-cloud-1)' }} />
      <div className="absolute top-4 left-10 z-10 h-7 w-14 rounded-full" style={{ backgroundColor: 'var(--scene-cloud-2)' }} />
    </>
  )
}

const snowDots = [
  { left: 28, top: 44 },
  { left: 40, top: 44 },
  { left: 52, top: 44 },
  { left: 68, top: 44 },
  { left: 32, top: 54 },
  { left: 44, top: 54 },
  { left: 56, top: 54 },
  { left: 72, top: 54 },
  { left: 28, top: 64 },
  { left: 40, top: 64 },
  { left: 52, top: 64 },
  { left: 68, top: 64 },
  { left: 32, top: 74 },
  { left: 44, top: 74 },
  { left: 60, top: 74 },
  { left: 72, top: 74 },
]
