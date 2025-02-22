import { WeatherData } from "@/types/types";
import { Thermometer, Droplets, Wind, MapPin } from "lucide-react";

interface WeatherCardProps {
  weather: WeatherData;
}

export default function WeatherCard({ weather }: WeatherCardProps) {
  return (
    <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-lg text-center w-96 border border-secondary transition-colors duration-300">
      {" "}
      <h1 className="text-3xl font-bold text-text dark:text-darkText flex items-center justify-center gap-2">
        <MapPin size={24} /> {weather.name}
      </h1>
      <div className="mt-4 flex flex-col gap-2">
        <p className="text-xl flex items-center justify-center gap-2">
          <Thermometer size={24} /> {weather.main.temp.toFixed(1)}°C
        </p>
        <p className="text-md flex items-center justify-center gap-2 text-gray-400">
          <Droplets size={20} /> Umidade: {weather.main.humidity}%
        </p>
        <p className="text-md flex items-center justify-center gap-2 text-gray-400">
          <Wind size={20} /> Vento: {weather.wind.speed} m/s
        </p>
        <p className="italic text-gray-400">{weather.weather[0].description}</p>
      </div>
    </div>
  );
}
