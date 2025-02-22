export default function Footer() {
  return (
    <footer className="w-full bg-gray-200 dark:bg-gray-950 py-4 px-6 text-center text-gray-600 dark:text-gray-400 text-sm fixed bottom-0 left-0">
      <p>
        Developed by{" "}
        <span className="font-semibold text-gray-900 dark:text-white">
          Pedro Soares
        </span>
      </p>
      <p>
        Data provided by{" "}
        <a
          href="https://openweathermap.org/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 dark:text-blue-400 hover:underline"
        >
          OpenWeather API
        </a>
      </p>
    </footer>
  );
}
