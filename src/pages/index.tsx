import { useEffect, useState } from "react";
import { WeatherData, ForecastData } from "@/types/types";
import {
  getWeatherData,
  getForecastData,
  getWeatherByCoords,
} from "@/services/weatherService";
import SearchBar from "../components/SearchBar";
import WeatherCard from "../components/WeatherCard";
import LoadingSpinner from "../components/LoadingSpinner";
import Header from "@/components/Header";
import Chart from "@/components/Chart";
import Footer from "@/components/Footer";

export default function Home() {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [forecast, setForecast] = useState<ForecastData | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [isFetchingLocation, setIsFetchingLocation] = useState<boolean>(true);
  const [city, setCity] = useState<string>("");

  async function fetchWeather(cityName: string) {
    setLoading(true);
    setIsFetchingLocation(false);
    const weatherData = await getWeatherData(cityName);
    const forecastData = await getForecastData(cityName);
    if (weatherData && forecastData) {
      setWeather(weatherData);
      setForecast(forecastData);
      setCity(weatherData.name);
      localStorage.setItem("lastCity", weatherData.name);
    }
    setLoading(false);
  }

  async function fetchByCoords(lat: number, lon: number) {
    setLoading(true);
    setIsFetchingLocation(false);
    const weatherData = await getWeatherByCoords(lat, lon);

    if (weatherData) {
      await fetchWeather(weatherData.name);
    } else {
      const lastCity = localStorage.getItem("lastCity") || "São Paulo";
      await fetchWeather(lastCity);
    }
    setLoading(false);
  }

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          fetchByCoords(position.coords.latitude, position.coords.longitude);
        },
        () => {
          // Se o usuário negar a permissão, usamos o localStorage ou "São Paulo"
          fetchWeather(localStorage.getItem("lastCity") || "São Paulo");
        }
      );
    } else {
      fetchWeather(localStorage.getItem("lastCity") || "São Paulo");
    }
  }, []);

  const chartData = forecast
    ? forecast.list
        .filter((_, index) => index % 8 === 0)
        .map((data) => ({
          date: new Date(data.dt_txt).toLocaleDateString("pt-BR", {
            weekday: "short",
            day: "2-digit",
          }),
          temp: data.main.temp,
          humidity: data.main.humidity,
          windSpeed: data.wind.speed,
        }))
    : [];

  return (
    <div className="min-h-screen flex flex-col bg-background dark:bg-darkBackground text-text dark:text-darkText transition-colors duration-300">
      <Header />

 {/* Centers SearchBar while keeping it at the top */}
 <div className="flex justify-center w-full mt-6 px-4">
        <SearchBar onSearch={fetchWeather} />
      </div>

      <main className="flex-grow flex flex-col items-center justify-center gap-6 p-4 pb-20 w-full relative">
        {loading && (
          <div className="absolute inset-0 flex items-center justify-center bg-background dark:bg-darkBackground">
            <LoadingSpinner />
          </div>
        )}

        {!loading && isFetchingLocation && !weather && (
          <p className="text-gray-500 text-lg text-center">
            Aguarde, estamos tentando obter sua localização...
          </p>
        )}

        {!loading && weather && <WeatherCard weather={weather} />}

        {!loading && forecast && (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 max-w-7xl w-full">
            <Chart
              data={chartData.map(({ date, temp }) => ({ date, value: temp }))}
              title={`🌡️ Temperatura (${city})`}
              color="#00b4d8"
              unit="°C"
            />
            <Chart
              data={chartData.map(({ date, humidity }) => ({
                date,
                value: humidity,
              }))}
              title="💧 Umidade"
              color="#7C3AED"
              unit="%"
            />
            <Chart
              data={chartData.map(({ date, windSpeed }) => ({
                date,
                value: windSpeed,
              }))}
              title="🌬️ Velocidade do Vento"
              color="#FF007F"
              unit="m/s"
            />
          </div>
        )}

        {!loading && !weather && !isFetchingLocation && (
          <p className="mt-4 text-red-400">Cidade não encontrada</p>
        )}
      </main>

      <Footer />
    </div>
  );
}
