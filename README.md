## Real Time Weather Application
**https://realtime-we4th3r-app.netlify.app/**

### This small project was done using React, Bootstrap y SASS. 

## Component `App`. 
This component is responsible for rendering the main layout of the weather application. It imports necessary components like `Navbar`, `Footer`, and a custom hook `useTitulo`.
Inside the `App` component, the `useState` hook is used to manage the state of the weather data, city name, and temperature unit. The `getLocalTime` function is defined to extract the local time from the weather data.
The component renders the `Navbar` component, which includes the search bar for entering a city name and selecting the temperature unit. It also displays the current location, weather information, and the `Footer` component.
The weather information is fetched from an external API (*Weatherstack API*) and stored in the `weather` state. The component conditionally renders the location details and weather information based on the availability of the weather data.
Overall, the `App` component is the main entry point of the weather application and handles the rendering of the user interface.

## Component `Navbar`.
This component is responsible for rendering the navigation bar of the weather application. It includes features such as searching for a city, changing the temperature unit, and fetching weather data from an external API.

**Here's a breakdown of the code:**
* Import statements: The component imports necessary modules, including React, useState, useEffect, and the urls object from the main.jsx file.
* Function declaration: The Navbar component is declared as a functional component that takes props (setWeather, city, setCity, unit, setUnit).
* State variables: The component uses the useState hook to manage state variables. searchValue is used to store the value entered in the search input field.
* getWeather function: This is an asynchronous function that fetches weather data from the *Weatherstack API* based on the provided city and unit. It constructs the API URL, sets the request options, and makes the fetch request. If the request is successful, it updates the city and weather state variables with the fetched data. If an error occurs, it logs the error to the console.
* Event handlers: The component defines event handlers for input change (handleChange), form submission (handleSubmit), and unit selection (handleUnitChange).
* useEffect hook: The component uses the useEffect hook to fetch weather data when the unit state variable changes. It calls the getWeather function with the current city and unit.
* JSX: The component returns JSX code to render the navigation bar. It includes an image, a dropdown menu for selecting temperature units, a search form, and a submit button. The event handlers are attached to the form and dropdown menu items.

Overall, the Navbar component is responsible for fetching weather data, handling user interactions, and rendering the navigation bar of the weather application.