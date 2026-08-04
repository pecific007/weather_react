import type { GeocodingLocation, GeocodingResponse, WeatherInfo, OpenMeteoWeather, Display } from './types';
import { WeatherCodeMap } from './weatherCodeMap'

async function fetchGeocodeData(city: string): Promise<GeocodingLocation> {
  if (!city.trim()) throw new Error("City is required");
  const url = `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=1`
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Geocoding api error: ${res.status}`)
  const data = (await res.json()) as GeocodingResponse;
  if (!data.results || data.results.length == 0)
    throw new Error(`No location found for ${city}`);
  return data.results[0];
}

async function fetchWeatherData(lat: number, lon: number): Promise<OpenMeteoWeather> {
  const params = new URLSearchParams({
      latitude: lat.toString(),
      longitude: lon.toString(),
      current: [ "temperature_2m", "relative_humidity_2m",
        "uv_index", "weather_code", "wind_speed_10m" ].join(","),
      timezone: "auto",
    });

  const res = await fetch(`https://api.open-meteo.com/v1/forecast?${params}`);
  if (!res.ok) throw new Error(`Forecast api error: ${res.status}`)
  const data = (await res.json()) as OpenMeteoWeather;
  if (!data) throw new Error(`Couldn't fetch data`);
  return data;
}

function getWeatherInfo(code: number): WeatherInfo {
  const default_value: WeatherInfo = { text: "Unknown", icon: "❓" };
  // return WeatherCodeMap[code] ?? default_value;
  return (WeatherCodeMap as Record<number, WeatherInfo>)[code] ?? default_value;
}

export default async function gatherData(city: string): Promise<Display> {
  const geocode = await fetchGeocodeData(city);
  const data = await fetchWeatherData(geocode.latitude, geocode.longitude);
  const info = getWeatherInfo(data.current.weather_code);


  const display: Display = {
    name: geocode.name,
    country: geocode.country,
    time: data.current.time,
    tempC: `${data.current.temperature_2m}${data.current_units.temperature_2m}`,
    humidity: `${data.current.relative_humidity_2m}${data.current_units.relative_humidity_2m}`,
    uv: data.current.uv_index,
    windspeed: `${data.current.wind_speed_10m}${data.current_units.wind_speed_10m}`,
    info: info,
  }

  return display;
}
