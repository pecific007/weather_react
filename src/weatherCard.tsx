import { useEffect, useState } from 'react'

type WeatherProps = {
  city: string;
};

type WeatherData = {
  location: {
    name: string;
    country: string;
    localtime: string;
  };
  current: {
    temp_c: number;
    temp_f: number;
    humidity: number;
    uv: number;
    condition: {
      text: string;
      icon: string;
    };
  };
  error?: {
    message: string;
    code: number;
  };
}

export default function Weather({ city }: WeatherProps) {
  const [weather, setWeather] = useState<WeatherData | null>(null)
  const apiKey = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    if (!city) return;
    fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`)
      .then((res) => res.json())
      .then((data) => { setWeather(data) })
      .catch(err => console.error(err))
  }, [city, apiKey])

  if (!city) return <h3>Enter name of city to get data</h3>;

  if (!weather) {
    return (
      <h3>Loading...</h3>
    )
  }

  if (weather.error) {
    return (
      <div className="hero-border">
        <h1>An error occurred:</h1>
        <p>{weather.error.message}</p>
        <p>CODE: {weather.error.code}</p>
      </div>
    )
  }
  return (
    <>
      <h1>Weather Data:</h1>
      <div className="hero-border">
        <div className="condition">
          <img src={weather.current.condition.icon} />
          <h2>{weather.current.condition.text}</h2>
        </div>
        <div>
          <p><b>Name:</b><span>{weather.location.name}</span></p>
          <p><b>Country:</b><span>{weather.location.country}</span></p>
          <p><b>Time(iso):</b><span>{weather.location.localtime}</span></p>
          <p><b>Temp C:</b><span>{weather.current.temp_c}</span></p>
          <p><b>Temp F:</b><span>{weather.current.temp_f}</span></p>
          <p><b>Humidity:</b><span>{weather.current.humidity}</span></p>
          <p><b>Uv:</b><span>{weather.current.uv}</span></p>
        </div>
      </div>
    </>
  )
}
