
      <header>
        <div className='container'>
          <h1>Real Time Weather</h1>
          <div className='container__location'>
            {/* {weather && weather.location && weather.location.name
              ? `${weather.location.name}, ${weather.location.country}, at ${getLocalTime(
                  weather.logit cation.localtime,
                )}, GMT ${weather.location.utc_offset}`
              : ''} */}

            {weather && city && weather.location && weather.location.name
              ? `${weather.location.name}, at ${weather.data.time}`
              : ''}
          </div>
          <div className='container__weatherInfo'>
            {/* {weather && (
              <>
                <p>{weather.current.weather_descriptions[0]}</p>
                <img src={weather.current.weather_icons[0]} alt='WeatherIcon' />
                <p>Temperature: {weather.current.temperature}°</p>
                <p>Feels-like: {weather.current.feelslike}°</p>
                <p>Humidity: {weather.current.humidity}%</p>
              </>
            )} */}

            {weather && weather.data && (
              <>
                <p>Temperature: {weather.data.values.temperature}°</p>
                <p>Feels-like: {weather.data.values.temperatureApparent}°</p>
                <p>Humidity: {weather.data.values.humidity}%</p>
              </>
            )}
          </div>
        </div>
      </header>