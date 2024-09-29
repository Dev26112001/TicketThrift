import { useState, useEffect } from 'react';
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { Link } from 'react-router-dom';
import FeaturedEventsCard from '../Pages/FeaturedEventsCard';
import BlogCard from '../Pages/BlogCard';
import tech3 from '../assets/Images/signup.png';
import tech4 from '../assets/Images/credit-card.png';
import tech5 from '../assets/Images/enjoy.png';

// Updated concert-related images
const images = [
    'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', // Img 1
    'https://images.pexels.com/photos/196652/pexels-photo-196652.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', // Img 2
    'https://images.pexels.com/photos/518389/pexels-photo-518389.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', // Img 3
    'https://images.pexels.com/photos/1267317/pexels-photo-1267317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'  // Img 4
];


const TicketPlatform = () => {
    const [currentImage, setCurrentImage] = useState(0);
    const [transitioning, setTransitioning] = useState(false);
    const [activeStep, setActiveStep] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setTransitioning(true);
            setTimeout(() => {
                setCurrentImage((prevImage) => (prevImage + 1) % images.length);
                setTransitioning(false);
            }, 1000);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const stepInterval = setInterval(() => {
            setActiveStep((prevStep) => (prevStep + 1) % 3);
        }, 4000);

        return () => clearInterval(stepInterval);
    }, []);

    // Define unique gradient styles for each step
    const stepStyles = [
        "bg-gradient-to-br from-blue-500 to-green-500",
        "bg-gradient-to-br from-purple-500 to-pink-500",
        "bg-gradient-to-br from-orange-500 to-red-500",
    ];

    return (
        <div className="bg-gray-100 text-gray-800">
            {/* Hero Section */}
            <section className="relative bg-cover bg-center h-screen overflow-hidden">
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
                        <Link to="/buy" className="bg-blue-500 text-white py-4 px-8 rounded-lg font-bold border-2 border-blue-500 hover:bg-red-500 hover:border-red-500 hover:text-white transition duration-300 transform hover:scale-105 shadow-xl">
                            Buy Tickets
                        </Link>
                        <Link to="/sell" className="bg-blue-500 text-white py-4 px-8 rounded-lg font-bold border-2 border-blue-500 hover:bg-red-500 hover:border-red-500 hover:text-white transition duration-300 transform hover:scale-105 shadow-xl">
                            Sell Tickets
                        </Link>
                    </div>
                </div>
            </section>

            {/* Featured Events Section */}
            <FeaturedEventsCard />

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

            {/* Enhanced How It Works Section */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto text-center">
                    <h2 className="text-5xl font-extrabold mb-10 text-gray-800">How It Works</h2>
                    <div className="relative">
                        {/* Step Indicators */}
                        <div className="flex justify-center mb-10 space-x-4">
                            {[...Array(3)].map((_, index) => (
                                <div key={index} className={`h-4 w-4 rounded-full ${index === activeStep ? 'bg-purple-600' : 'bg-gray-300'}`}></div>
                            ))}
                        </div>

                        {/* Step Content */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                            {[ 
                                { step: "Sign Up & List Tickets", description: "Sign up and browse events or list your tickets for sale.", image: tech3 },
                                { step: "Secure Transaction", description: "Choose your preferred payment method and make a secure transaction.", image: tech4 },
                                { step: "Enjoy the Event", description: "Receive your tickets and enjoy the event!", image: tech5 },
                            ].map((item, index) => (
                                <div
                                    key={index}
                                    className={`transition-all transform ${activeStep === index ? `opacity-100 translate-y-0 scale-100 ${stepStyles[index]} shadow-2xl` : 'opacity-0 translate-y-8 scale-95'} duration-700 ease-in-out p-10 rounded-lg shadow-lg text-white hover:shadow-xl transition-shadow duration-300`}
                                >
                                    <img src={item.image} alt={item.step} className="w-24 mx-auto mb-6" />
                                    <h3 className="text-2xl font-bold mb-4">{item.step}</h3>
                                    <p className="text-gray-100">{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Blog Section */}
            <BlogCard />

            {/* Newsletter Signup Section */}
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
                    <div className="flex justify-center space-x-4">
                        <Link to="#" className="text-blue-500 hover:text-blue-400 transition duration-300"><FaFacebookF /></Link>
                        <Link to="#" className="text-blue-400 hover:text-blue-300 transition duration-300"><FaTwitter /></Link>
                    </div>
                    <p className="mt-4">&copy; 2024 TicketPlatform. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default TicketPlatform;
