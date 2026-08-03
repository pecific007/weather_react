export interface GeocodingLocation {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
  country: string;
  country_code?: string;
}

export interface GeocodingResponse {
  result?: GeocodingLocation[];
  generationtime_ms: number;
}

interface OpenMeteoCurrentUnits {
  time: string;
  interval: string;
  temperature_2m: string;
  relative_humidity_2m: string;
  uv_index: string;
  weather_code: string;
  wind_speed_10m: string;
}

interface OpenMeteoCurrent {
  time: string;
  interval: number;
  temperature_2m: number;
  relative_humidity_2m: number;
  weather_code: number;
  uv_index: number;
  wind_speed_10m: number;
}

export interface OpenMeteoWeather {
  latitude: number,
  longitude: number,
  generationtime_ms: number,
  timezone: string,
  timezone_abbreviation: string;
  current_units: OpenMeteoCurrentUnits;
  current: OpenMeteoCurrent;
}
