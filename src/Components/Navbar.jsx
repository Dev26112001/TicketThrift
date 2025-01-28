import { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
  useUser,
} from "@clerk/clerk-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedCity, setSelectedCity] = useState("Bengaluru");
  const menuRef = useRef(null);
  const navigate = useNavigate();
  const { isSignedIn } = useUser();

  // Handle logo click
  const handleLogoClick = (e) => {
    e.preventDefault();
    if (isSignedIn) {
      navigate('/profile');
    } else {
      navigate('/');
    }
  };

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
    { name: "Delhi", icon: "https://i.postimg.cc/4nw2C2VB/delhi.webp" },
    { name: "Mumbai", icon: "https://i.postimg.cc/XXNxgKmF/mumbai.webp" },
    { name: "Kolkata", icon: "https://i.postimg.cc/hzssBhzf/kolkata.webp" },
    { name: "Bengaluru", icon: "https://i.postimg.cc/vDG2Nwg4/bengaluru.webp" },
    { name: "Pune", icon: "https://i.postimg.cc/0KNf2xDZ/pune.webp" },
    { name: "Jaipur", icon: "https://i.postimg.cc/JG2T0yTX/jaipur.webp" },
    {
      name: "Chandigarh",
      icon: "https://i.postimg.cc/5Q9PY8dB/chandigarh.webp",
    },
    { name: "Goa", icon: "https://i.postimg.cc/QHt4jgqs/goa.webp" },
    { name: "Lucknow", icon: "https://i.postimg.cc/jwtcmyjp/lucknow.webp" },
  ];

  // Redirect to profile when user signs in
  useEffect(() => {
    if (isSignedIn) {
      navigate('/profile');
    }
  }, [isSignedIn, navigate]);

  return (
    <div>
      <nav className="bg-white py-4 shadow-md flex items-center justify-between px-6 relative">
        <div className="flex items-center w-full space-x-4">
          {/* Logo */}
          <a onClick={handleLogoClick} className="flex items-center cursor-pointer">
            <span className="text-black text-xl font-semibold">Ticket</span>
            <span className="text-black text-xl font-semibold">Thrift</span>
          </a>

          {/* Search bar */}
          <div className="flex-grow">
            <input
              type="text"
              className="border w-full rounded-md px-4 py-2 text-gray-700 focus:outline-none focus:ring focus:ring-blue-200"
              placeholder="Search for Movies, Events, Plays, Sports and Activities"
            />
          </div>

          {/* Auth Status Dependent Navigation */}
          <div className="flex items-center space-x-4">
            <SignedIn>
              <button 
                onClick={() => navigate('/buy')}
                className="text-gray-600 hover:text-gray-800"
              >
                Buy
              </button>
              <button 
                onClick={() => navigate('/sell')}
                className="text-gray-600 hover:text-gray-800"
              >
                Sell
              </button>
              <button 
                onClick={() => navigate('/profile')}
                className="text-gray-600 hover:text-gray-800"
              >
                Profile
              </button>
              <UserButton afterSignOutUrl="/" />
            </SignedIn>
            <SignedOut>
              <button 
                onClick={() => navigate('/blog')}
                className="text-gray-600 hover:text-gray-800"
              >
                Blog
              </button>
              <button 
                onClick={() => navigate('/readmore')}
                className="text-gray-600 hover:text-gray-800"
              >
                Read More
              </button>
              <SignInButton mode="modal" />
            </SignedOut>
          </div>

          {/* Location Dropdown */}
          <div className="relative">
            <button
              className="text-gray-600 focus:outline-none"
              onClick={toggleDropdown}
            >
              {selectedCity}
              <span className="ml-1">▼</span>
            </button>
            {isDropdownOpen && (
              <div className="absolute mt-2 right-0 bg-white border rounded-lg shadow-lg z-50 p-6 w-72">
                <p className="text-center text-lg mb-4 font-semibold text-gray-700">
                  Select a City
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {metroCities.map((city) => (
                    <div
                      key={city.name}
                      className="flex flex-col items-center p-4 bg-gray-100 rounded-lg hover:bg-blue-100 hover:shadow-lg transition-all duration-300 ease-in-out cursor-pointer group"
                      onClick={() => {
                        setSelectedCity(city.name);
                        setIsDropdownOpen(false); // Close the dropdown after selection
                      }}
                    >
                      {/* City Icon */}
                      <img
                        src={city.icon}
                        alt={city.name}
                        className="w-8 h-8 mb-2"
                      />
                      <span className="text-gray-800 font-medium">
                        {city.name}
                      </span>

                      {/* Neon Glow on Hover */}
                      <style jsx>{`
                        .group:hover {
                          box-shadow: 0 0 15px 2px rgba(255, 20, 147, 1),
                            /* Neon Pink */ 0 0 25px 5px rgba(255, 20, 147, 1),
                            /* Neon Pink */ 0 0 35px 10px rgba(255, 20, 147, 1); /* Neon Pink */
                        }
                      `}</style>
                    </div>
                  ))}
                </div>
              </div>
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
          ref={menuRef}
          className="fixed top-0 right-0 bg-white h-full max-w-screen-sm w-3/4 md:w-1/2 lg:w-1/3 p-4 shadow-lg z-50 overflow-y-auto"
        >
          <div className="sticky top-0 bg-lime-100 p-4 rounded-md z-10">
            <p className="text-gray-800 font-bold text-lg md:text-xl lg:text-2xl">
              Hey!
            </p>
            <div className="flex justify-between items-center mt-2">
              <p className="text-gray-600 text-sm sm:text-base lg:text-lg">
                Unlock special offers & great benefits
              </p>
              <button className="text-red-500 border border-red-500 px-4 py-1 rounded-md text-sm sm:text-base lg:text-lg">
                <SignedOut>
                  <SignInButton />
                </SignedOut>
                <SignedIn>
                  <UserButton />
                </SignedIn>
              </button>
            </div>
          </div>

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
