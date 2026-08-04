import type { Display } from './types';

type WeatherProps = {
  data: Display;
}

export function Weather({ data }: WeatherProps) {
  return (
    <div id="weatherDataCard">
      <h1>Weather Data:</h1>
      <div className="hero-border">
        <div className="condition">
          <h1>{ data.info.icon }</h1>
          <h2>{ data.info.text }</h2>
        </div>
        <div>
          <p><b>Name: </b><span>{data.name}</span></p>
          <p><b>Country: </b><span>{data.country}</span></p>
          <p><b>Time(iso): </b><span>{data.time}</span></p>
          <p><b>Temp: </b><span>{data.tempC}</span></p>
          <p><b>Humidity: </b><span>{data.humidity}</span></p>
          <p><b>Uv: </b><span>{data.uv}</span></p>
          <p><b>Wind Speed: </b><span>{data.windspeed}</span></p>
        </div>
      </div>
    </div>
  )
}
