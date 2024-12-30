// src/components/Navbar.tsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import config from "../config";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

interface NavbarProps {
  setMenu: (menu: string) => void;
  searchRef: React.RefObject<HTMLInputElement>;
  setSearch: (searchQuery: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ setMenu, searchRef, setSearch }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const menuItems = [
    "Home",
    "US",
    "World",
    "Politics",
    "Business",
    "Health",
    "Entertainment",
    "Sports",
    "Science",
    "Technology",
  ];

  const handleSearchToggle = () => {
    setIsSearchVisible(!isSearchVisible);
    if (!isSearchVisible) {
      // Focus the search input when it becomes visible
      setTimeout(() => {
        searchRef.current?.focus();
      }, 0);
    }
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    setSearch(query); // Update the search query in the parent component
  };

  return (
    <nav className="bg-blue-600 text-white">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <img
          src={config.logo.src}
          alt={config.logo.alt}
          className="w-16 cursor-pointer"
          onClick={() => setMenu("Home")}
        />

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-4">
          {menuItems.map((item) => (
            <button
              key={item}
              onClick={() => setMenu(item)}
              className="hover:underline focus:outline-none capitalize"
            >
              {item}
            </button>
          ))}
        </div>

        {/* Search and Mobile Menu Button */}
        <div className="flex items-center space-x-4">
          {/* Search Icon */}
          <button
            onClick={handleSearchToggle}
            aria-label="Search"
            className="focus:outline-none"
          >
            🔍
          </button>

          {/* Search Input Field */}
          {isSearchVisible && (
            <input
              ref={searchRef}
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              className="ml-2 px-2 py-1 rounded-md text-black"
              placeholder="Search..."
            />
          )}

          {/* Login Button */}
          {/* <Link to="/login" className="hidden md:block">
            <button className="bg-white text-blue-600 px-3 py-1 rounded">
              Log in
            </button>
          </Link> */}

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? (
              <XIcon className="w-6 h-6" />
            ) : (
              <MenuIcon className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-blue-600">
          {menuItems.map((item) => (
            <button
              key={item}
              onClick={() => {
                setMenu(item);
                setIsOpen(false);
              }}
              className="block w-full text-left px-4 py-2 hover:bg-blue-700 focus:outline-none capitalize"
            >
              {item}
            </button>
          ))}
          <Link
            to="/login"
            className="block w-full text-left px-4 py-2 hover:bg-blue-700"
          >
            Log in
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
