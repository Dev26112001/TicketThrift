import { useState } from 'react'
import { FaMapMarkerAlt as MapPinIcon, FaTicketAlt as TicketIcon } from 'react-icons/fa'

// Mock event data with placeholder images from Pexels
const events = [
  {
    id: 1,
    name: "Summer Music Festival",
    location: "Los Angeles",
    genre: "Music",
    ticketsAvailable: 500,
    image: "https://images.pexels.com/photos/3771065/pexels-photo-3771065.jpeg",
    date: "July 22, 2024",
    time: "6:00 PM"
  },
  {
    id: 2,
    name: "Comedy Night Extravaganza",
    location: "New York",
    genre: "Comedy",
    ticketsAvailable: 200,
    image: "https://images.pexels.com/photos/3775537/pexels-photo-3775537.jpeg",
    date: "August 15, 2024",
    time: "8:00 PM"
  },
  {
    id: 3,
    name: "Broadway Musical Showcase",
    location: "New York",
    genre: "Theater",
    ticketsAvailable: 350,
    image: "https://images.pexels.com/photos/4669265/pexels-photo-4669265.jpeg",
    date: "September 10, 2024",
    time: "7:30 PM"
  },
  {
    id: 4,
    name: "Electronic Dance Party",
    location: "Miami",
    genre: "Music",
    ticketsAvailable: 1000,
    image: "https://images.pexels.com/photos/2973407/pexels-photo-2973407.jpeg",
    date: "October 5, 2024",
    time: "9:00 PM"
  }
]

function BuyNowPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [filteredEvents, setFilteredEvents] = useState(events)

  // Handle search based on location
  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase()
    setSearchQuery(query)

    const filtered = events.filter(event => 
      event.location.toLowerCase().includes(query) ||
      event.name.toLowerCase().includes(query) // Optionally include search by name
    )
    setFilteredEvents(filtered)
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <nav className="bg-white shadow-md sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center h-16">
            <div className="flex items-center">
              <TicketIcon className="h-10 w-10 text-indigo-600" />
              <span className="ml-3 text-3xl font-bold text-gray-900">Find Me Here</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Search & Event Listing */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search Bar */}
        <form className="mb-8">
          <div className="relative">
            <input
              type="text"
              placeholder="Search by location or event name..."
              value={searchQuery}
              onChange={handleSearch}
              className="pl-12 pr-6 py-4 rounded-full bg-indigo-50 border border-indigo-300 shadow-sm text-indigo-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 w-full text-lg"
            />
          </div>
        </form>

        {/* Event Divs */}
        <div className="space-y-8">
          {filteredEvents.length > 0 ? (
            filteredEvents.map((event) => (
              <div 
                key={event.id} 
                className="relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 bg-gray-900 text-white cursor-pointer"
                style={{ backgroundImage: `url(${event.image})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '300px' }}
              >
                {/* Event Name */}
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                  <h2 className="text-4xl font-bold">{event.name}</h2>
                </div>

                {/* Hover Content */}
                <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-black via-transparent to-transparent">
                  <div className="absolute bottom-0 p-6 w-full bg-transparent bg-opacity-70">
                    <div className="text-lg">
                      <div className="flex items-center mb-2">
                        <MapPinIcon className="h-5 w-5 mr-2" />
                        <span>{event.location}</span>
                      </div>
                      <div className="flex items-center mb-2">
                        <TicketIcon className="h-5 w-5 mr-2" />
                        <span>{event.ticketsAvailable} tickets available</span>
                      </div>
                      <div className="mb-2">
                        <span>{event.date}</span>
                      </div>
                      <div>
                        <span>{event.time}</span>
                      </div>
                    </div>
                    <button className="mt-4 w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 rounded-full transition duration-300">
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-xl text-gray-700">No events found for "{searchQuery}"</p>
          )}
        </div>
      </div>
    </div>
  )
}

export default BuyNowPage
