import { useState } from 'react';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import useTitulo from './hooks/useTitulo.jsx';

const App = () => {
  useTitulo('Home');

  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState('');
  const [unit, setUnit] = useState('m');

  const getLocalTime = (localtime) => {
    return localtime.split(' ')[1];
  };

  const handleUnitChange = (newUnit) => {
    setUnit(newUnit);
  };

  return (
    <>
      <Navbar setWeather={setWeather} city={city} setCity={setCity} unit={unit} setUnit={setUnit} />
      <h1>Real Time Weather</h1>
      <header className='container'>
        <div className='card'>
          <div className='card__imgContainer'>
            {weather && (
              <>
                <img src={weather.current.weather_icons[0]} alt='WeatherIcon' />
              </>
            )}
          </div>
          <div className='card-body'>
            <h5 className='card-title'>
              {weather && weather.location && weather.location.name
                ? `${weather.location.name}, ${weather.location.country}`
                : ''}
            </h5>
            <p className='card-text'>
              {weather && weather.location && weather.location.name
                ? `at ${getLocalTime(weather.location.localtime)}, GMT ${weather.location.utc_offset}`
                : ''}
            </p>
          </div>
          <ul className='list-group list-group-flush'>
            <li className='list-group-item'>
              {weather && (
                <>
                  <p>Temperature: {weather.current.temperature}°</p>
                </>
              )}
            </li>
            <li className='list-group-item'>
              {weather && (
                <>
                  <p>Feels-like: {weather.current.feelslike}°</p>
                </>
              )}
            </li>
            <li className='list-group-item'>
              {weather && (
                <>
                  <p>Humidity: {weather.current.humidity}%</p>
                </>
              )}
            </li>
          </ul>
          <div className='card-body'>
            <a className='card-link' onClick={() => handleUnitChange('m')}>
              °C
            </a>
            <a className='card-link' onClick={() => handleUnitChange('f')}>
              °F
            </a>
          </div>
        </div>
      </header>

      <Footer />
    </>
  );
};

export default App;
