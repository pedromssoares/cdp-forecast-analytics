import { render, screen } from "@testing-library/react";
import WeatherCard from "./WeatherCard";
import { WeatherData } from "@/types/types";

const mockWeather: WeatherData = {
  name: "São Paulo",
  main: { temp: 25, temp_min: 10, temp_max: 30, humidity: 60 },
  wind: { speed: 5 },
  weather: [{ main: "", description: "Céu limpo" }],
};

test("exibe corretamente os dados do clima", () => {
  render(<WeatherCard weather={mockWeather} />);
  
  // Verifica se o nome da cidade aparece (ignorando o ícone)
  expect(screen.getByText(/São Paulo/)).toBeInTheDocument();

  // Verifica a temperatura usando regex para ignorar espaços e formatação
  expect(screen.getByText(/25\.0\s*°C/)).toBeInTheDocument();
  
  // Verifica a umidade
  expect(screen.getByText(/Umidade:\s*60%/)).toBeInTheDocument();
  
  // Verifica o vento
  expect(screen.getByText(/Vento:\s*5\s*m\/s/)).toBeInTheDocument();
  
  // Verifica a descrição do clima
  expect(screen.getByText(/Céu limpo/)).toBeInTheDocument();
});