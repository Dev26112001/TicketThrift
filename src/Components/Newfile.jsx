import  { useState, useEffect } from 'react';
// import tech1 from '../assets/Images/pexels-artempodrez-5716018.jpg'
// import tech from '../assets/Images/pexels-teddy-2263436.jpg'
import tech2 from '../assets/Images/pexels-pixabay-47730.jpg'
import tech3 from '../assets/Images/signup.png'
import tech4 from '../assets/Images/credit-card.png'
import tech5 from '../assets/Images/enjoy.png'
import Buy from '../Components/BuyNow.jsx'; 



// Import images related to events (you can add more images here)
const images = [
    'https://images.pexels.com/photos/1860618/pexels-photo-1860618.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/4670978/pexels-photo-4670978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/953776/pexels-photo-953776.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/3199429/pexels-photo-3199429.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
];

const TicketPlatform = () => {
    const [currentImage, setCurrentImage] = useState(0);
    const [transitioning, setTransitioning] = useState(false);
    // Change the background image every 5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setTransitioning(true); // Start transition
            setTimeout(() => {
                setCurrentImage((prevImage) => (prevImage + 1) % images.length);
                setTransitioning(false); // End transition
            }, 1000); // Transition duration is 1 second
        }, 5000); // Change image every 5 seconds

        return () => clearInterval(interval); // Clean up the interval on component unmount
    }, []);

    return (

        <div className="bg-gray-100 text-gray-800">
            {/* Hero Section */}
            <section className="relative bg-cover bg-center h-screen overflow-hidden">
                {/* Animated Image Wrapper */}
                <div
                    className={`absolute inset-0 bg-cover bg-center h-full w-full transition-transform duration-1000 ${transitioning ? 'transform translate-x-full' : ''}`}
                    style={{ backgroundImage: `url(${images[currentImage]})` }}
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-70"></div>
                </div>

                <div className="container mx-auto px-5 py-36 relative z-10">
                    <h1 className="text-6xl font-extrabold text-white mb-4 tracking-wide leading-tight">
                        Find Tickets, Save Money
                    </h1>
                    <p className="text-2xl text-gray-200 mb-8 opacity-90">
                        Explore the best secondhand event tickets at unbeatable prices!
                    </p>
                    <div className="space-x-4">
                    <button   to="/buy"
                     className="bg-blue-500 text-white py-4 px-8 rounded-lg font-bold border-2 border-blue-500 hover:bg-red-500 hover:border-red-500 hover:text-white transition duration-300 transform hover:scale-105 shadow-xl" >
        Buy Tickets
      </button>
      <a
        href="#sell"
        className="bg-blue-500 text-white py-4 px-8 rounded-lg font-bold border-2 border-blue-500 hover:bg-red-500 hover:border-red-500 hover:text-white transition duration-300 transform hover:scale-105 shadow-xl"
      >
        Sell Tickets
      </a>
    </div>
                </div>
            </section>

            {/* Featured Events Section */}
            <section className="py-16 bg-gray-100">
                <div className="container mx-auto text-center">
                    <h2 className="text-5xl font-extrabold mb-10 text-gray-800">Featured Events</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {[
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
                                image: tech2
                            },
                        ].map((event, index) => (
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

            {/* Rest of the sections... */}
            {/* Testimonials Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto text-center">
                    <h2 className="text-5xl font-extrabold mb-10 text-gray-800">What Our Users Say</h2>
                    <div className="relative">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                            <div className="bg-gray-100 p-8 rounded-lg shadow-xl hover:bg-gray-200 transition duration-300 transform hover:scale-105">
                                <p className="text-lg italic mb-4">This platform is amazing! I found tickets to my favorite concert at a fraction of the price!</p>
                                <cite className="text-gray-600">- John Doe</cite>
                            </div>
                            <div className="bg-gray-100 p-8 rounded-lg shadow-xl hover:bg-gray-200 transition duration-300 transform hover:scale-105">
                                <p className="text-lg italic mb-4">I sold my event tickets quickly and easily. Great service!</p>
                                <cite className="text-gray-600">- Jane Smith</cite>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* How It Works Section */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto text-center">
                    <h2 className="text-5xl font-extrabold mb-10 text-gray-800">How It Works</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {[
                            { step: "Sign Up & List Tickets", description: "Sign up and browse events or list your tickets for sale.", image: tech3 },
                            { step: "Secure Transaction", description: "Choose your preferred payment method and make a secure transaction.", image: tech4 },
                            { step: "Enjoy the Event", description: "Receive your tickets and enjoy the event!", image: tech5 },
                        ].map((item, index) => (
                            <div key={index} className="bg-white p-10 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
                                <img src={item.image} alt={item.step} className="w-24 mx-auto mb-6" />
                                <h3 className="text-2xl font-bold mb-4">{item.step}</h3>
                                <p className="text-gray-600">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Blog Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto text-center">
                    <h2 className="text-5xl font-extrabold mb-10 text-gray-800">Latest News</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        <div className="bg-gray-100 p-8 rounded-lg shadow-xl hover:bg-gray-200 transition duration-300 transform hover:scale-105">
                            <h3 className="text-2xl font-bold mb-4">The Rising Trend of Secondhand Event Tickets</h3>
                            <p className="text-gray-600 mb-4">Explore how buying secondhand tickets is becoming a popular trend for event-goers.</p>
                            <a href="#read-more" className="text-purple-600 font-bold hover:underline">Read More</a>
                        </div>
                        <div className="bg-gray-100 p-8 rounded-lg shadow-xl hover:bg-gray-200 transition duration-300 transform hover:scale-105">
                            <h3 className="text-2xl font-bold mb-4">Tips for Safe Online Ticket Purchases</h3>
                            <p className="text-gray-600 mb-4">Learn how to safely purchase secondhand tickets online and avoid scams.</p>
                            <a href="#read-more" className="text-purple-600 font-bold hover:underline">Read More</a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Newsletter Signup */}
            <section className="py-16 bg-purple-600 text-white">
                <div className="container mx-auto text-center">
                    <h2 className="text-4xl font-bold mb-6">Sign Up for Our Newsletter</h2>
                    <p className="mb-6">Get the latest updates on events and exclusive ticket deals!</p>
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
        <div className="flex justify-center space-x-6 mb-4">
            <a href="https://www.facebook.com/" className="text-gray-400 hover:text-white transition duration-300 transform hover:scale-110">
                <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://x.com/quasitek" className="text-gray-400 hover:text-white transition duration-300 transform hover:scale-110">
                <i className="fab fa-twitter"></i>
            </a>
            <a href="https://www.instagram.com/" className="text-gray-400 hover:text-white transition duration-300 transform hover:scale-110">
                <i className="fab fa-instagram"></i>
            </a>
        </div>
        <p className="text-sm">Developed by Quasitek Solutions</p>
    </div>
</footer>

        </div>
    );
};

export default TicketPlatform;
