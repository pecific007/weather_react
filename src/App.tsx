import { useEffect, useState } from 'react'
import './App.css'

type WeatherProps = {
    city: string;
};

function Weather({ city }: WeatherProps) {
    const [weather, setWeather] = useState(null)
    const apiKey = import.meta.env.VITE_API_KEY;

    useEffect(() => {
        if (!city) return;
        fetch(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`)
            .then((res) => res.json())
            .then((data) => { setWeather(data) })
            .catch(err => console.error(err))
    }, [city])

    if (!weather) {
        return (
            <h3>Enter name of city to get data</h3>
        )
    }

    if (weather.error) {
        return (
            <>
                <div className="hero-border">
                    <h1>An error occurred:</h1>
                    <p>{weather.error.message}</p>
                    <p>CODE: {weather.error.code}</p>
                </div>
            </>
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
            {/* <pre> */}
            {/*     {JSON.stringify(weather, null, 2)} */}
            {/* </pre> */}
        </>
    )
}

function App() {
    const [inputValue, setInput] = useState("")
    const [city, setCity] = useState("")

    function handleInput() {
        setCity(inputValue.toLowerCase());
    }

    return (
        <section id="center">
            <div className="input-field">
                <input
                    autoFocus
                    type="text"
                    value={inputValue}
                    className="counter"
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="City name"
                />
                <button onClick={handleInput}
                    className="counter"
                >
                    Search
                </button>
            </div>
            <div>
                < Weather city={city} />
            </div>
        </section>
    )
}

export default App
