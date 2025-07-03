"use client";
import { CiLight } from "react-icons/ci";
import { useTheme } from "./ThemeProvider";

const Header = () => {
  const { toggleTheme } = useTheme();

  return (
    <header className="flex justify-between px-10 py-5 items-center">
      <h1 className="text-2xl">
        <a href="">CRUD</a>
      </h1>
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
