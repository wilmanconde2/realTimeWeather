import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import urls from '../main.jsx';

const Navbar = ({ setWeather, city, setCity, unit, setUnit }) => {
  const [searchValue, setSearchValue] = useState('');

  const getWeather = async (city, unit) => {
    const url = `https://api.weatherstack.com/current?access_key=${urls.urlAPIW}&query=${city}&units=${unit}`;

    const options = {
      method: 'GET',
    };

    try {
      const response = await fetch(url, options);
      const data = await response.json();
      console.log(data);

      setCity(data.location.name);
      setWeather(data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchValue) {
      setCity(searchValue);
      getWeather(searchValue, unit);
      setSearchValue('');
    }
  };

  useEffect(() => {
    if (city) {
      getWeather(city, unit);
    }
  }, [unit]);

  return (
    <>
      <nav className='navbar bg-body-tertiary '>
        <div className='container-fluid'>
          <img className='container-fluid-img' src='./weather.png' alt='logo' />
          <h1>Real Time Weather</h1>
          <form className='d-flex' role='search' onSubmit={handleSubmit}>
            <input
              className='form-control me-2'
              type='search'
              placeholder='City'
              aria-label='Search'
              onChange={handleChange}
              value={searchValue}
            />
            <button className='btn btn-outline-success' type='submit'>
              Search
            </button>
          </form>
        </div>
      </nav>
    </>
  );
};

Navbar.propTypes = {
  setWeather: PropTypes.func.isRequired,
  city: PropTypes.string.isRequired,
  setCity: PropTypes.func.isRequired,
  unit: PropTypes.string.isRequired,
  setUnit: PropTypes.func.isRequired,
};

export default Navbar;
