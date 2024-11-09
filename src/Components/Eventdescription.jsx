import React from "react";
import { useNavigate } from "react-router-dom";
import {
  FaShareAlt,
  FaTicketAlt,
  FaTwitter,
  FaFacebook,
  FaLink,
  FaInstagram,
} from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
  const navigate = useNavigate();

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
          alert("Error sharing the event. Please use the share links below.");
        });
    } else {
      alert(
        "Sharing is not supported on this browser. Please use the share links below."
      );
    }
  };

  return (
    <div
      className="min-h-screen bg-gray-100 text-gray-800"
      style={{
        backgroundImage: `url(${eventData.image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        animation: "backgroundParallax 10s infinite alternate ease-in-out",
      }}
    >
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

      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden flex justify-center items-center">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-white text-center p-6">
          <h1 className="text-4xl font-bold mb-2">{eventData.title}</h1>
          <p className="text-lg">{eventData.date}</p>
          <p className="text-lg">{eventData.time}</p>
          <p className="text-lg">{eventData.venue}</p>
        </div>
      </section>

      {/* Event Details */}
      <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden mt-8">
        <div className="p-6 bg-gradient-to-r from-blue-500 to-green-500 text-white">
          <h1 className="text-4xl font-bold mb-2">{eventData.title}</h1>
          <p className="text-lg mb-1">{eventData.date}</p>
          <p className="text-lg mb-1">{eventData.time}</p>
          <p className="text-lg mb-4">{eventData.venue}</p>
          <p className="text-md">{eventData.description}</p>

          {/* Social Sharing */}
          <div className="flex space-x-4 mt-4">
            <button
              onClick={handleShare}
              className="flex items-center bg-white text-blue-600 py-2 px-4 rounded-lg hover:bg-blue-700 hover:text-white transition duration-300"
            >
              <FaShareAlt className="mr-2" /> Share Event
            </button>
          </div>

          {/* Fallback: Social Media Links */}
          <div className="flex space-x-6 text-white mt-4">
            <a
              href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
                eventData.url
              )}&text=${encodeURIComponent(
                `Check out this event: ${eventData.title}`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400"
              aria-label="Share on Twitter"
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
              aria-label="Share on Facebook"
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
              aria-label="Share on Instagram"
            >
              <FaInstagram size={24} />
            </a>
            <button
              onClick={() => navigator.clipboard.writeText(eventData.url)}
              className="hover:text-green-500"
              aria-label="Copy event link"
            >
              <FaLink size={24} />
            </button>
          </div>
        </div>
      </div>

      {/* Ticket Information */}
      <div className="max-w-5xl mx-auto mt-8 p-6 bg-white rounded-lg shadow-lg text-gray-800">
        <h2 className="text-3xl font-bold mb-4">Ticket Information</h2>
        <ul>
          {eventData.ticketTypes.map((ticket, index) => (
            <li key={index} className="flex justify-between items-center mb-4">
              {/* Ticket Type */}
              <div className="w-1/3 flex items-center">
                <FaTicketAlt className="mr-2" />
                <span className="font-semibold">{ticket.type}</span>
              </div>

              {/* Ticket Price */}
              <div className="w-1/3 text-center">${ticket.price}</div>

              {/* Ticket Availability */}
              <div className="w-1/3 text-right">
                {ticket.availability} available
              </div>
            </li>
          ))}
        </ul>

        <button className="mt-6 w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-red-500 transition duration-300">
          Purchase Tickets
        </button>
      </div>

      {/* Similar Events Slider */}
      <div className="max-w-5xl mx-auto mt-8">
        <h2 className="text-3xl font-bold mb-4">Similar Events</h2>
        <Slider {...sliderSettings}>
          {eventData.similarEvents.map((event, index) => (
            <div key={index} className="p-2">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-lg">{event.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* Back to Event Listing Button */}
      <div className="max-w-5xl mx-auto mt-8">
        <button
          onClick={() => navigate(-1)}
          className="w-full bg-gray-700 text-white py-3 rounded-lg hover:bg-gray-600 transition duration-300"
        >
          Back to Events
        </button>
      </div>
    </div>
  );
};

export default EventDescription;
