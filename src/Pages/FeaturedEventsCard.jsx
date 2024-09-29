

// Define event data outside the component or fetch it dynamically from an API.
const eventData = [
  { 
    title: "Concert Night", 
    location: "Madison Square Garden", 
    date: "December 1, 2024", 
    price: "Rs 1499", 
    availability: "Few Tickets Left", 
    image: 'https://images.pexels.com/photos/2263436/pexels-photo-2263436.jpeg' 
  },
  { 
    title: "Tech Conference 2024", 
    location: "Silicon Valley", 
    date: "January 15, 2025", 
    price: "Rs 2999", 
    availability: "Available", 
    image: 'https://images.pexels.com/photos/5716018/pexels-photo-5716018.jpeg' 
  },
  { 
    title: "Football Finals", 
    location: "Wembley Stadium", 
    date: "November 10, 2024", 
    price: "Rs 3999", 
    availability: "Sold Out", 
    image: 'https://images.pexels.com/photos/1142969/pexels-photo-1142969.jpeg'
  },
];

const FeaturedEventsCard = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-5xl font-extrabold mb-10 text-gray-800">Featured Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {eventData.map((event, index) => (
            <div 
              key={index} 
              className="relative group bg-white rounded-lg shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105"
            >
              <img 
                src={event.image} 
                alt={event.title} 
                className="w-full h-56 object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300" 
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold">{event.title}</h3>
                <p className="text-gray-500 mb-2 flex items-center">
                  <i className="fas fa-map-marker-alt mr-2"></i>{event.location}
                </p>
                <p className="text-gray-500 mb-4 flex items-center">
                  <i className="fas fa-calendar-alt mr-2"></i>{event.date}
                </p>
                <p className="text-xl font-bold mb-2">{event.price}</p>
                <p className={`text-sm ${event.availability === "Sold Out" ? 'text-red-500' : 'text-green-500'}`}>
                  {event.availability}
                </p>
                <a href="#details" className="text-purple-600 font-bold hover:underline">View Details</a>
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedEventsCard;
