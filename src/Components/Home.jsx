import { useState, useEffect } from "react";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import FeaturedEventsCard from "../Pages/FeaturedEventsCard";
import BlogCard from "../Pages/BlogCard";
import tech3 from "../assets/Images/signup.png";
import tech4 from "../assets/Images/credit-card.png";
import tech5 from "../assets/Images/enjoy.png";
import eventData from "../data/data.json"; // Adjust the import according to your file structure

const TicketPlatform = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Set events from the imported JSON data
    setEvents(eventData.events);
  }, []);

  useEffect(() => {
    const stepInterval = setInterval(() => {
      setActiveStep((prevStep) => (prevStep + 1) % 3);
    }, 4000);

    return () => clearInterval(stepInterval);
  }, []);

  const stepStyles = [
    "bg-gradient-to-br from-blue-500 to-green-500",
    "bg-gradient-to-br from-purple-500 to-pink-500",
    "bg-gradient-to-br from-orange-500 to-red-500",
  ];

  return (
    <div className="bg-gray-100 text-gray-800">
      {/* Hero Section with Enhanced Parallax Effect */}
      <section
        className="relative bg-cover bg-fixed h-screen overflow-hidden"
        style={{
          backgroundImage: `url(https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2), linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.5))`,
          backgroundBlendMode: "overlay",
          backgroundSize: "cover",
          backgroundPosition: "center",
          animation: "backgroundParallax 10s infinite alternate ease-in-out",
        }}
      >
        <div className="container mx-auto px-5 py-36 relative z-30 text-center">
          <h1 className="text-6xl font-extrabold text-white mb-4 tracking-wide leading-tight">
            Find Tickets, Save Money
          </h1>
          <p className="text-2xl font-bold text-gray-200 mb-8 opacity-90">
            Explore the best secondhand event tickets at unbeatable prices!
          </p>
          <div className="space-x-4">
            <Link
              to="/buy"
              className="bg-blue-500 text-white py-4 px-8 rounded-lg font-bold border-2 border-blue-500 hover:bg-red-500 hover:border-red-500 hover:text-white transition duration-300 transform hover:scale-105 shadow-xl"
            >
              Buy Tickets
            </Link>
            <Link
              to="/sell"
              className="bg-blue-500 text-white py-4 px-8 rounded-lg font-bold border-2 border-blue-500 hover:bg-red-500 hover:border-red-500 hover:text-white transition duration-300 transform hover:scale-105 shadow-xl"
            >
              Sell Tickets
            </Link>
          </div>
        </div>

        {/* Parallax Effect Styles */}
        <style jsx>{`
          @keyframes backgroundParallax {
            0% {
              background-position: center 0;
            }
            50% {
              background-position: center 50px;
            }
            100% {
              background-position: center -100px;
            }
          }
        `}</style>
      </section>

      {/* Featured Events Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl font-extrabold mb-10 text-gray-800">
            Featured Events
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {events.map((event, index) => (
              <div
                key={index}
                className="relative overflow-hidden bg-white rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"
              >
                <img
                  src={`https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2`} // Replace with event.image if available
                  alt={event.eventName}
                  className="w-full h-48 object-cover transition-transform duration-500 ease-in-out transform hover:scale-110"
                />
                <div className="p-5">
                  <h3 className="text-2xl font-bold mb-2">{event.eventName}</h3>
                  <p className="text-gray-700 mb-2">{event.eventDescription}</p>
                  <p className="text-gray-600">
                    Date: {new Date(event.eventDate).toLocaleDateString()}
                  </p>
                  <p className="text-gray-600">Venue: {event.venueName}</p>
                  <p className="text-gray-600">Address: {event.venueAddress}</p>
                  <button type="button">
                    <Link
                      to={`/event/${index}`}
                      className="inline-block mt-4 px-6 py-2 text-lg font-semibold text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105"
                    >
                      View Tickets
                    </Link>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        className="py-16 relative bg-cover bg-fixed h-6/12 p-20  overflow-hidden"
        style={{
          backgroundImage: `url(https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2), linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.5))`,
          backgroundBlendMode: "overlay",
          backgroundSize: "cover",
          backgroundPosition: "center",
          animation: "backgroundParallax 10s infinite alternate ease-in-out",
        }}
      >
        <div className="container mx-auto text-center">
          <h2 className="text-5xl font-extrabold mb-10 text-white">
            What Our Users Say
          </h2>
          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="bg-gray-100 p-8 rounded-lg shadow-xl hover:bg-gray-200 transition duration-300 transform hover:scale-105">
                <p className="text-lg italic mb-4">
                  This platform is amazing! I found tickets to my favorite
                  concert at a fraction of the price!
                </p>
                <cite className="text-gray-600">- John Doe</cite>
              </div>
              <div className="bg-gray-100 p-8 rounded-lg shadow-xl hover:bg-gray-200 transition duration-300 transform hover:scale-105">
                <p className="text-lg italic mb-4">
                  I sold my event tickets quickly and easily. Great service!
                </p>
                <cite className="text-gray-600">- Jane Smith</cite>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced How It Works Section */}
      <section className="py-16 bg-white text-black">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl font-extrabold mb-10">
            How TicketThrift Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div
              className={`p-8 rounded-lg shadow-2xl ${stepStyles[activeStep]} transition duration-500 transform hover:scale-105`}
            >
              <img
                src={tech3}
                alt="Sign Up"
                className="mb-6 mx-auto w-24 h-24"
              />
              <h3 className="text-3xl font-bold mb-4">Sign Up</h3>
              <p className="text-lg">
                Create an account easily and get started with buying or selling
                tickets.
              </p>
            </div>
            <div
              className={`p-8 rounded-lg shadow-2xl ${
                stepStyles[(activeStep + 1) % 3]
              } transition duration-500 transform hover:scale-105`}
            >
              <img
                src={tech4}
                alt="Purchase"
                className="mb-6 mx-auto w-24 h-24"
              />
              <h3 className="text-3xl font-bold mb-4">Purchase Tickets</h3>
              <p className="text-lg">
                Buy tickets from verified sellers at the best prices.
              </p>
            </div>
            <div
              className={`p-8 rounded-lg shadow-2xl ${
                stepStyles[(activeStep + 2) % 3]
              } transition duration-500 transform hover:scale-105`}
            >
              <img
                src={tech5}
                alt="Enjoy Event"
                className="mb-6 mx-auto w-24 h-24"
              />
              <h3 className="text-3xl font-bold mb-4">Enjoy the Event</h3>
              <p className="text-lg">
                Attend your favorite events and have an unforgettable
                experience!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <BlogCard />

      {/* Newsletter Signup Section */}
      <section className="py-16 bg-purple-600 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Sign Up for Our Newsletter
          </h2>
          <p className="mb-6">
            Get the latest updates on events and exclusive ticket deals!
          </p>
          <form className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-5 rounded-lg text-gray-800 w-full md:w-1/3"
            />
            <button className="bg-white text-purple-600 font-bold py-5 px-10 rounded-lg hover:bg-gray-200 transition duration-300 transform hover:scale-105">
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 bg-gray-900 text-white text-center">
        <div className="container mx-auto">
          <p className="mb-4">Follow us on social media:</p>
          <div className="flex justify-center space-x-4">
            <Link
              to="#"
              className="text-blue-500 hover:text-blue-400 transition duration-300"
            >
              <FaFacebookF />
            </Link>
            <Link
              to="#"
              className="text-blue-400 hover:text-blue-300 transition duration-300"
            >
              <FaTwitter />
            </Link>
          </div>
          <p className="mt-4">
            &copy; 2024 TicketPlatform. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default TicketPlatform;
