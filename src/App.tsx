import { useState } from 'react'
import './App.css'
import Weather from './weatherCard'


function App() {
  const [inputValue, setInput] = useState("")
  const [city, setCity] = useState("")

  function handleInput() {
    const trimmed = inputValue.trim();
    if (trimmed) setCity(inputValue.toLowerCase());
  }

  return (
    <section id="center">
      <form className="input-field" onSubmit={(e) => {e.preventDefault()}}>
        <input
        autoFocus
        type="search"
        value={inputValue}
        className="counter"
        onChange={(e) => setInput(e.target.value)}
        placeholder="City name"
        />
        <button onClick={handleInput}
          type="submit"
          className="counter"
        >
          Search
        </button>
      </form>
      <div>
        < Weather city={city} />
      </div>
    </section>
  )
}

export default App
