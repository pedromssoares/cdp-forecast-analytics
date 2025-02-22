import { useState } from "react";
import { Search } from "lucide-react"; // Search icon

interface SearchBarProps {
  onSearch: (city: string) => void;
}

export default function SearchBar({ onSearch }: SearchBarProps) {
  const [input, setInput] = useState("");

  const handleSearch = () => {
    if (input.trim() !== "") {
      onSearch(input);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="flex items-center bg-gray-600 dark:bg-gray-800 p-2 rounded-lg shadow-md w-96">
      <input
        type="text"
        placeholder="Digite uma cidade..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
        className="w-80 p-2 rounded bg-gray-200 dark:bg-gray-800 text-text dark:text-darkText border border-secondary focus:outline-none focus:ring-2 focus:ring-primary transition-colors duration-300"
      />
      <button
        onClick={handleSearch}
        className="ml-2 p-2 bg-secondary hover:bg-blue-600 rounded-lg transition-all duration-200"
      >
        <Search className="text-white" size={20} />
      </button>
    </div>
  );
}