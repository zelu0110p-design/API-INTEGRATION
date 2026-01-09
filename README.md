# API-INTEGRATION
#COMPANY: CODTECH IT SOLUTIONS PRIVATE LIMITED

#NAME: PATEL ZEEL MAHESHBHAI

#INTERN ID: CTIS2480

#DOMAIN: FULL STACK WEB DEVELOPMENT

#DURATION: 4 WEEKS

#MENTOR: NEELA SANTHOSH KUMAR


Weather App Documentation
1. Overview

This Weather App is a simple, responsive web application that allows users to retrieve real-time weather information for any city using the OpenWeatherMap API. The application is built using HTML, CSS, and JavaScript, following a clear separation of concerns: HTML for structure, CSS for styling, and JavaScript for logic and API interaction. Users can enter a city name, click a button, and instantly view current weather details such as temperature, humidity, wind speed, and weather conditions.

2. Project Structure

The project consists of three main files:

* `index.html` – Defines the structure and layout of the web page
* `styles.css` – Handles the visual design and responsiveness
* `script.js` – Implements the application logic and API communication

This modular structure makes the project easy to understand, maintain, and extend in the future.

3. HTML File (`index.html`)

The `index.html` file provides the base structure of the Weather App. It includes standard HTML5 elements such as the `<!DOCTYPE html>` declaration, meta tags for character encoding and responsiveness, and links to external CSS and JavaScript files.

The main content is wrapped inside a `<div class="container">`, which centers the application on the screen. Inside this container:

* A heading (`<h1>`) displays the title “Weather Dashboard”.
* An input field allows users to enter a city name.
* A button triggers the weather fetch operation.
* A `<div>` with the ID `weather-display` acts as a placeholder where weather data is dynamically inserted using JavaScript.

This structure ensures clarity and provides a clean user interface.

 4. JavaScript File (`script.js`)

The `script.js` file contains the core logic of the application. It begins by attaching a click event listener to the “Get Weather” button. When clicked, the script:

1. Reads and validates the city name entered by the user.
2. Constructs an API request URL using the OpenWeatherMap endpoint, an API key, and metric units.
3. Sends a `fetch` request to the API.
4. Processes the JSON response and extracts relevant weather information.

The retrieved data is then displayed dynamically inside the `weather-display` div using template literals. Error handling is implemented to manage invalid city names or API issues, ensuring that user-friendly error messages are shown instead of breaking the application.

 5. CSS File (`styles.css`)

The `styles.css` file defines the visual appearance of the app. It uses a linear gradient background to create a sky-like effect and centers the container using Flexbox. The container itself has padding, rounded corners, and a subtle box shadow for a modern look.

Form elements such as inputs and buttons are styled for usability and consistency. A hover effect on the button improves user interaction. Additionally, responsive design is achieved through a media query that adjusts layout and font sizes on smaller screens, ensuring the app works well on mobile devices.

6. Conclusion

Overall, this Weather App demonstrates a practical use of frontend web technologies and third-party APIs. Its clean structure, responsive design, and clear separation of responsibilities make it suitable for learning purposes, college projects, or as a foundation for more advanced weather-based applications.

7. Output
   <img width="1920" height="1080" alt="Image" src="https://github.com/user-attachments/assets/d6af4e8a-1030-413e-976e-a3b1c54a4e6b" />
