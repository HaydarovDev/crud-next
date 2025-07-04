"use client";

import { CiLight, CiSearch } from "react-icons/ci";
import { useTheme } from "./ThemeProvider";

const Header = ({ setValue }) => {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <header
      className={`flex w-full ${
        darkMode ? "bg-black" : "bg-white"
      } justify-between px-10 py-5 items-center shadow-sm fixed top-0`}
    >
      <h1 className="text-2xl">
        <a href="">CRUD</a>
      </h1>
      <label
        htmlFor="search"
        className="flex items-center gap-2 border-2 rounded p-1"
      >
        <CiSearch />
        <input
          type="text"
          placeholder="Search users..."
          className={`outline-none ${
            darkMode ? "placeholder:text-white" : "placeholder:text-black"
          }`}
          id="search"
          onChange={(e) => setValue(e.target.value)}
        />
      </label>
      <button
        className="cursor-pointer border p-1 rounded"
        onClick={toggleTheme}
      >
        <CiLight size={20} />
      </button>
    </header>
  );
};

export default Header;
