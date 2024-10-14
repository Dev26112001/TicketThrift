import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom"; // Import Link

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const menuRef = useRef(null); // Ref for the menu

  // Toggle the hamburger menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close menu if clicked outside
  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsMenuOpen(false);
    }
  };

  // Handle body overflow when the menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden"; // Disable body scroll when menu is open
      document.addEventListener("mousedown", handleClickOutside); // Add event listener for clicks
    } else {
      document.body.style.overflow = "auto"; // Enable body scroll when menu is closed
      document.removeEventListener("mousedown", handleClickOutside); // Remove event listener
    }
    return () => {
      // Cleanup event listener on component unmount
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const metroCities = [
    "Delhi",
    "Mumbai",
    "Kolkata",
    "Chennai",
    "Bengaluru",
    "Hyderabad",
    "Pune",
    "Ahmedabad",
    "Jaipur",
  ];

  return (
    <div>
      <nav className="bg-white py-4 shadow-md flex items-center justify-between px-6 relative">
        {/* Left Section: Logo and Search */}
        <div className="flex items-center w-full space-x-4">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-black text-xl font-semibold">Ticket</span>
            <span className="text-black text-xl font-semibold">Thrift</span>
          </Link>

          {/* Search bar */}
          <div className="flex-grow">
            <input
              type="text"
              className="border w-full rounded-md px-4 py-2 text-gray-700 focus:outline-none focus:ring focus:ring-blue-200"
              placeholder="Search for Movies, Events, Plays, Sports and Activities"
            />
          </div>

          {/* Location Dropdown */}
          <div className="relative">
            <button
              className="text-gray-600 focus:outline-none"
              onClick={toggleDropdown}
            >
              Bengaluru
              <span className="ml-1">▼</span>
            </button>
            {isDropdownOpen && (
              <ul className="absolute mt-2 bg-white border rounded-lg shadow-lg z-50">
                {metroCities.map((city) => (
                  <li key={city} className="px-4 py-2 hover:bg-gray-100">
                    {city}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Hamburger Menu */}
          <div className="text-gray-700 cursor-pointer" onClick={toggleMenu}>
            <div className="space-y-1">
              <span className="block w-6 h-1 bg-gray-700"></span>
              <span className="block w-6 h-1 bg-gray-700"></span>
              <span className="block w-6 h-1 bg-gray-700"></span>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile & Desktop Menu */}
      {isMenuOpen && (
        <div
          ref={menuRef} // Attach the ref to the menu container
          className="fixed top-0 right-0 bg-white h-full max-w-screen-sm w-3/4 md:w-1/2 lg:w-1/3 p-4 shadow-lg z-50 overflow-y-auto"
        >
          {/* Fixed Section */}
          <div className="sticky top-0 bg-lime-100 p-4 rounded-md z-10">
            <p className="text-gray-800 font-bold text-lg md:text-xl lg:text-2xl">
              Hey!
            </p>
            <div className="flex justify-between items-center mt-2">
              <p className="text-gray-600 text-sm sm:text-base lg:text-lg">
                Unlock special offers & great benefits
              </p>
              <button className="text-red-500 border border-red-500 px-4 py-1 rounded-md text-sm sm:text-base lg:text-lg">
                Login / Register
              </button>
            </div>
          </div>

          {/* Scrollable Section */}
          <ul className="space-y-4 mt-6">
            {/* Notifications Button */}
            <button className="w-full flex justify-between items-center bg-gray-100 p-4 rounded-md hover:bg-gray-200 focus:ring-2 focus:ring-blue-300 text-left">
              <span className="text-gray-700 text-sm sm:text-base lg:text-lg">
                Notifications
              </span>
              <span className="text-sm sm:text-base lg:text-lg">▶</span>
            </button>

            {/* Your Orders Button */}
            <button className="w-full flex flex-col bg-gray-50 p-4 rounded-md hover:bg-gray-100 focus:ring-2 focus:ring-blue-300 text-left">
              <span className="text-gray-400 text-sm sm:text-base lg:text-lg">
                Your Orders
              </span>
              <span className="text-xs sm:text-sm lg:text-base text-gray-500">
                View all your bookings & purchases
              </span>
            </button>

            {/* Stream Library Button */}
            <button className="w-full flex flex-col bg-gray-50 p-4 rounded-md hover:bg-gray-100 focus:ring-2 focus:ring-blue-300 text-left">
              <span className="text-gray-400 text-sm sm:text-base lg:text-lg">
                Stream Library
              </span>
              <span className="text-xs sm:text-sm lg:text-base text-gray-500">
                Rented & Purchased Movies
              </span>
            </button>

            {/* Play Credit Card Button */}
            <button className="w-full flex flex-col bg-gray-100 p-4 rounded-md hover:bg-gray-200 focus:ring-2 focus:ring-blue-300 text-left">
              <span className="text-gray-700 text-sm sm:text-base lg:text-lg">
                Play Credit Card
              </span>
              <span className="text-xs sm:text-sm lg:text-base text-gray-500">
                View your Play Credit Card details and offers
              </span>
            </button>

            {/* Help & Support Button */}
            <button className="w-full flex flex-col bg-gray-100 p-4 rounded-md hover:bg-gray-200 focus:ring-2 focus:ring-blue-300 text-left">
              <span className="text-gray-700 text-sm sm:text-base lg:text-lg">
                Help & Support
              </span>
              <span className="text-xs sm:text-sm lg:text-base text-gray-500">
                View commonly asked queries and Chat
              </span>
            </button>

            {/* Accounts & Settings Button */}
            <button className="w-full flex flex-col bg-gray-50 p-4 rounded-md hover:bg-gray-100 focus:ring-2 focus:ring-blue-300 text-left">
              <span className="text-gray-400 text-sm sm:text-base lg:text-lg">
                Accounts & Settings
              </span>
              <span className="text-xs sm:text-sm lg:text-base text-gray-500">
                Location, Payments, Permissions & More
              </span>
            </button>

            {/* Rewards Button */}
            <button className="w-full flex flex-col bg-gray-100 p-4 rounded-md hover:bg-gray-200 focus:ring-2 focus:ring-blue-300 text-left">
              <span className="text-gray-700 text-sm sm:text-base lg:text-lg">
                Rewards
              </span>
              <span className="text-xs sm:text-sm lg:text-base text-gray-500">
                View your rewards & unlock new ones
              </span>
            </button>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
