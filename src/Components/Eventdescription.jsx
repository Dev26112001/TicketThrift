import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import {
  FaShareAlt,
  FaTicketAlt,
  FaTwitter,
  FaFacebook,
  FaLink,
  FaInstagram,
} from "react-icons/fa";
import Slider from "react-slick"; // Ensure you have react-slick installed
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Sample data
const eventData = {
  title: "Music Festival 2024",
  date: "April 15, 2024",
  time: "5:00 PM",
  venue: "Central Park, New York",
  description:
    "Join us for an unforgettable evening of music featuring top artists from around the world.",
  image: "https://images.pexels.com/photos/167636/pexels-photo-167636.jpeg",
  url: window.location.href,
  ticketTypes: [
    { type: "General Admission", price: 50, availability: 100 },
    { type: "VIP Admission", price: 100, availability: 50 },
    { type: "Backstage Pass", price: 200, availability: 20 },
  ],
  seller: {
    username: "ticket_master",
    rating: 4.8,
  },
  similarEvents: [
    {
      title: "Rock Concert",
      image:
        "https://images.pexels.com/photos/1181701/pexels-photo-1181701.jpeg",
    },
    {
      title: "Jazz Night",
      image:
        "https://images.pexels.com/photos/1852303/pexels-photo-1852303.jpeg",
    },
    {
      title: "Cultural Festival",
      image:
        "https://images.pexels.com/photos/3580275/pexels-photo-3580275.jpeg",
    },
    {
      title: "EDM Party",
      image:
        "https://images.pexels.com/photos/1643374/pexels-photo-1643374.jpeg",
    },
  ],
};

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const EventDescription = () => {
  const navigate = useNavigate(); // Use useNavigate to handle navigation

  // Web Share API handler
  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: eventData.title,
          text: `${eventData.description}\n\nDate: ${eventData.date}, ${eventData.time} at ${eventData.venue}`,
          url: eventData.url,
        })
        .then(() => {
          console.log("Event shared successfully!");
        })
        .catch((error) => {
          console.error("Error sharing the event:", error);
        });
    } else {
      alert(
        "Sharing is not supported on this browser. Please use the share links below."
      );
    }
  };

  return (
    <div className="bg-gradient-to-b from-gray-800 via-gray-900 to-black min-h-screen py-12 px-4 relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/167636/pexels-photo-167636.jpeg')",
          transform: "translateZ(-1px) scale(1.5)",
          zIndex: -1,
        }}
      />
      {/* Event Header */}
      <div className="max-w-5xl mx-auto bg-white bg-opacity-10 backdrop-blur-lg rounded-lg shadow-lg overflow-hidden">
        <img
          src={eventData.image}
          alt={eventData.title}
          className="w-full h-64 object-cover opacity-80"
        />
        <div className="p-6">
          <h1 className="text-4xl font-bold text-gray-100 mb-2">
            {eventData.title}
          </h1>
          <p className="text-gray-400 mb-1">{eventData.date}</p>
          <p className="text-gray-400 mb-1">{eventData.time}</p>
          <p className="text-gray-400 mb-4">{eventData.venue}</p>
          <p className="text-gray-300 mb-4">{eventData.description}</p>

          {/* Social Sharing */}
          <div className="flex space-x-4 mb-4">
            <button
              onClick={handleShare}
              className="flex items-center text-blue-500 hover:underline focus:outline-none"
            >
              <FaShareAlt className="mr-2" /> Share Event
            </button>
          </div>

          {/* Fallback: Social Media Links */}
          <div className="flex space-x-6 text-gray-300">
            <a
              href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
                eventData.url
              )}&text=${encodeURIComponent(
                `Check out this event: ${eventData.title}`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400"
            >
              <FaTwitter size={24} />
            </a>
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                eventData.url
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600"
            >
              <FaFacebook size={24} />
            </a>
            <a
              href={`https://www.instagram.com/sharer/sharer.php?u=${encodeURIComponent(
                eventData.url
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-500"
            >
              <FaInstagram size={24} />
            </a>
            <button
              onClick={() => navigator.clipboard.writeText(eventData.url)}
              className="hover:text-green-500 focus:outline-none"
            >
              <FaLink size={24} />
            </button>
          </div>
        </div>
      </div>

      {/* Ticket Information */}
      <div className="max-w-5xl mx-auto mt-8 p-6 bg-white bg-opacity-10 rounded-lg shadow-lg text-gray-300 backdrop-blur-lg border border-white/20">
        <h2 className="text-3xl font-bold mb-4">Ticket Information</h2>
        <ul>
          {eventData.ticketTypes.map((ticket, index) => (
            <li
              key={index}
              className="flex justify-between items-center mb-4 text-gray-300"
            >
              {/* Ticket Type */}
              <div className="w-1/3 flex items-center">
                <FaTicketAlt className="text-gray-300 mr-2" />
                <span className="font-semibold">{ticket.type}</span>
              </div>

              {/* Ticket Price */}
              <div className="w-1/3 text-center text-gray-300">
                ${ticket.price}
              </div>

              {/* Ticket Availability */}
              <div className="w-1/3 text-right text-gray-300">
                {ticket.availability} available
              </div>
            </li>
          ))}
        </ul>

        {/* Purchase Button */}
        <button className="mt-6 w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-red-500 transition duration-200">
          Purchase Tickets
        </button>
      </div>

      {/* Similar Events Slider */}
      <div className="max-w-5xl mx-auto mt-8">
        <h2 className="text-3xl font-bold mb-4 text-gray-100">
          Similar Events
        </h2>
        <Slider {...sliderSettings}>
          {eventData.similarEvents.map((event, index) => (
            <div key={index} className="p-2">
              <div className="bg-white bg-opacity-10 rounded-lg shadow-lg overflow-hidden transition hover:scale-105 backdrop-blur-lg border border-white/20">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-40 object-cover"
                />
                <div className="p-4 text-gray-300">
                  <h3 className="font-semibold text-lg">{event.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* Trust and Security
      <div className="max-w-5xl mx-auto mt-8 bg-white bg-opacity-10 backdrop-blur-lg rounded-lg shadow-md p-6">
        <h2 className="text-3xl font-bold text-gray-100 mb-4">
          Trust & Security
        </h2>
        <p className="text-gray-300 mb-2">
          We ensure the authenticity of all tickets. Our platform employs
          advanced fraud prevention measures.
        </p>
        <p className="text-gray-300">
          Secure payment options are available for all transactions, providing
          peace of mind while you shop.
        </p>
      </div> */}

      {/* Back to Event Listing Button */}
      <div className="max-w-5xl mx-auto mt-8">
        <button
          onClick={() => navigate(-1)} // Navigate back to the previous page
          className="w-full bg-gray-700 text-white py-3 rounded-lg hover:bg-gray-600 transition duration-200"
        >
          Back to Events
        </button>
      </div>
    </div>
  );
};

export default EventDescription;
