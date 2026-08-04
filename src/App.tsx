import React, { useState } from 'react'
import './App.css'
import gatherData from './fetchData'
import { type Display } from './types'
import { Weather } from './weatherCard'

function Form() {
  const [inputVal, setInputVal] = useState("");
  const [display, setDisplay] = useState<Display | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  async function handleSubmit(event: React.SubmitEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!inputVal.trim()) return;

    setError(null);
    setLoading(true);

    try {
      const res = await gatherData(inputVal);
      setDisplay(res);
    } catch(err) {
      setDisplay(null);
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Unknown error occured.");
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="center">
      <form className="input-field" onSubmit={handleSubmit}>
        <input
          autoFocus
          type="search"
          className="counter"
          placeholder='City name'
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
        />
        <button type="submit" className="counter">Go!</button>
      </form>
      { loading && <p>Loading...</p> }
      { !loading && !display && !error && <p>Enter the name of a city to get weather</p>}
      { error && <p>{error}</p> }
      { display && <Weather data={display} /> }
    </section>
  )
}

function App() {
  return (
    <>
      <Form />
    </>
  )
}

export default App
