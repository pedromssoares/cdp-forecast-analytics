# Interactive Weather Dashboard

A modern, responsive dashboard application built with **Next.js**, **Tailwind CSS**, and **TypeScript** that displays weather data using the **OpenWeather API**. This dashboard provides interactive charts for temperature, humidity, and wind speed. It also supports dark mode by default and leverages browser geolocation to display local weather information. The project follows best practices with a well-organized code structure and includes unit tests with Jest and React Testing Library.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Environment Variables](#environment-variables)
- [Running the Application](#running-the-application)
- [Running Tests](#running-tests)
- [Project Structure](#project-structure)
- [Future Improvements](#future-improvements)
- [Acknowledgements](#acknowledgements)

## Features

- **Responsive Dashboard:** Clean and responsive UI built with Tailwind CSS.
- **Real-Time Weather Data:** Fetches weather information from the OpenWeather API.
- **Interactive Charts:** Visualize temperature, humidity, and wind speed using a reusable chart component.
- **Geolocation Integration:** Automatically attempts to detect the user's current location to display local weather data.
- **Dark Mode:** Dark mode is enabled by default, with an option to toggle.
- **LocalStorage Persistence:** Remembers the last searched city across sessions.
- **Unit Testing:** Comprehensive tests using Jest and React Testing Library ensure quality and stability.

## Tech Stack

- **Next.js:** Framework for server-rendered React applications.
- **React & TypeScript:** For building robust and type-safe UI components.
- **Tailwind CSS:** Utility-first CSS framework for rapid and modern styling.
- **OpenWeather API:** Provides weather data.
- **Recharts:** Library for building responsive charts (or another chart library if preferred).
- **Jest & React Testing Library:** For unit and integration tests.
- **SWC/Babel:** Configured for code transpilation (depending on your setup).

## Getting Started

### Prerequisites

- Node.js (>= 14.x)
- npm (>= 6.x) or yarn

### Images

<img width="1470" alt="image" src="https://github.com/user-attachments/assets/aa17453a-a97e-4ec9-bf95-6903ef726a96" />


### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/interactive-weather-dashboard.git
   cd interactive-weather-dashboard
   ```

2. **Install dependencies:**

   ```bash
   npm install
   # or
   yarn install
   ```

### Environment Variables

Create a `.env.local` file in the root directory and add your OpenWeather API key:

```env
NEXT_PUBLIC_OPENWEATHER_API_KEY=YOUR_API_KEY_HERE
```

## Running the Application

To start the development server, run:

```bash
npm run dev
# or
yarn dev
```

Then, open [http://localhost:3000](http://localhost:3000) in your browser to view the dashboard.

## Running Tests

This project uses Jest and React Testing Library for testing. To run the tests, execute:

```bash
npm test
# or
yarn test
```

Make sure your Jest configuration is set up to transform ESM modules if necessary.

## Project Structure

The project is organized following best practices for Next.js applications:

```
interactive-weather-dashboard/
├── public/                      # Static files (images, icons, etc.)
├── src/
│   ├── components/              # Reusable React components
│   │   ├── Chart.tsx
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   ├── LoadingSpinner.tsx
│   │   ├── SearchBar.tsx
│   │   └── WeatherCard.tsx
│   ├── pages/                   # Next.js pages (routing is based on file names)
│   │   ├── _app.tsx
│   │   ├── _document.tsx
│   │   └── index.tsx
│   ├── services/                # API services (e.g., weatherService.ts)
│   ├── styles/                  # Global styles (globals.css)
│   ├── utils/                   # Utility functions (if any)
│   └── hooks/                   # Custom hooks (if any)
├── .babelrc                     # Babel configuration (if used)
├── jest.config.js               # Jest configuration
├── jest.setup.js                # Jest setup file
├── package.json
├── tsconfig.json
└── README.md
```

## Future Improvements

- **7-Day Forecast:** Explore using alternative APIs or upgrading your plan to include extended forecasts.
- **Enhanced Testing:** Add more integration tests and increase coverage.
- **Progressive Web App (PWA):** Convert the dashboard into a PWA for offline support.
- **Advanced Data Visualization:** Incorporate more complex charts and animations.
- **Additional Features:** Consider implementing user authentication, saving favorite cities, or tracking historical data.

## Acknowledgements

- **OpenWeather API:** For providing the weather data.
- **Next.js Team:** For the powerful framework.
- **Tailwind CSS:** For rapid and modern styling.
- **Jest & React Testing Library:** For making testing easier.

---

