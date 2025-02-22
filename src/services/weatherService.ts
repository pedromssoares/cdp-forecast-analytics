import { ForecastData, WeatherData } from "@/types/types";

const BASE_URL = process.env.NEXT_PUBLIC_WEATHER_API_URL;
const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

export async function getWeatherByCoords(
  lat: number,
  lon: number
): Promise<WeatherData | null> {
  try {
    const response = await fetch(
      `${BASE_URL}/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=pt_br`
    );
    if (!response.ok) throw new Error("Erro ao buscar dados do clima");

    return await response.json();
  } catch (error) {
    console.error("Erro ao buscar clima:", error);
    return null;
  }
}

export async function getWeatherData(
  city: string
): Promise<WeatherData | null> {
  try {
    const response = await fetch(
      `${BASE_URL}/weather?q=${city}&appid=${API_KEY}&units=metric&lang=pt_br`
    );
    if (!response.ok) throw new Error("Erro ao buscar dados do clima");
    return await response.json();
  } catch (error) {
    console.error("Error fetching weather data", error);
    return null;
  }
}

export async function getForecastData(
  city: string
): Promise<ForecastData | null> {
  try {
    const response = await fetch(
      `${BASE_URL}/forecast?q=${city}&appid=${API_KEY}&units=metric&lang=pt_br`
    );
    if (!response.ok) throw new Error("Erro ao buscar previsão do tempo");

    return await response.json();
  } catch (error) {
    console.error("Erro ao buscar previsão:", error);
    return null;
  }
}
