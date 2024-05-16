import React, { useState } from 'react';

const api = {
  key: "67be4eafd7534e2e94260011241505",
  base: "https://api.weatherapi.com/v1"
};

const App = () => {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState(null);

  const search = async () => {
    try {
      const response = await fetch(`${api.base}/current.json?key=${api.key}&q=${query}`);
      const data = await response.json();
      setWeather(data);
    } catch (error) {
      console.error("Error -> ", error.message);
    }
  };

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        name="query"
        value={query}
        onChange={handleChange}
      />
      <button onClick={search}>Click</button>
      {weather && weather.current && (
        <div>
          <h2>{weather.location.name}, {weather.location.country}</h2>
          <p>{weather.current.temp_c}°C</p>
          <p>{weather.current.condition.text}</p>
        </div>
      )}
    </div>
  );
};

export default App;
