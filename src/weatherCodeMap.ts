export interface WeatherInfo {
  text: string;
  icon: string;
}

type WeatherCodes =
  | 0 | 1 | 2 | 3
  | 45 | 48
  | 51 | 53 | 55 | 56 | 57
  | 61 | 63 | 65 | 66 | 67
  | 71 | 73 | 75 | 77
  | 80 | 81 | 82 | 85 | 86
  | 95 | 96 | 99;

export const WeatherCodeMap: Record<WeatherCodes, WeatherInfo> = {
  0: { text: "Clear sky", icon: "☀️" },
  1: { text: "Mostly clear", icon: "🌤" },
  2: { text: "Partly cloudy", icon: "⛅" },
  3: { text: "Overcast", icon: "☁️" },
  45: { text: "Fog", icon: "🌫️" },
  48: { text: "Depositing rime fog", icon: "🌫️" },
  51: { text: "Light drizzel", icon: "🌦️" },
  53: { text: "Moderate drizzel", icon: "🌦️" },
  55: { text: "Dense drizzel", icon: "🌦️" },
  56: { text: "Light freezing drizzel", icon: "🌧️" },
  57: { text: "Dense freezing drizzel", icon: "🌧️" },
  61: { text: "Slight rain", icon: "🌦️" },
  63: { text: "Moderate rain", icon: "🌧️" },
  65: { text: "Dense rain", icon: "🌧️" },
  66: { text: "Light freezing rain", icon: "🌧️" },
  67: { text: "Dense freezing rain", icon: "🌧️" },
  71: { text: "Slight snow fall", icon: "🌨️" },
  73: { text: "Moderate snow fall", icon: "❄️" },
  75: { text: "Dense snow fall", icon: "❄️" },
  77: { text: "Snow grains", icon: "❄️" },
  80: { text: "Slight rain showers", icon: "🌦️" },
  81: { text: "Moderate rain showers", icon: "🌧️" },
  82: { text: "Violent rain showers", icon: "⛈️" },
  85: { text: "Slight snow showers", icon: "🌨️" },
  86: { text: "Heavy snow showers", icon: "❄️" },
  95: { text: "Thunderstorm (slight or moderate)", icon: "⛈️" },
  96: { text: "Thunderstorm with slight hail", icon: "⛈️" },
  99: { text: "Thunderstorm with heavy hail", icon: "⛈️" },
};
