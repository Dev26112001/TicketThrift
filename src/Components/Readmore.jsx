
import { Link } from 'react-router-dom';

const ReadMore = () => {
    return (
        <div className="bg-gray-100 min-h-screen">
            <header className="bg-purple-600 text-white py-6">
                <div className="container mx-auto text-center">
                    <h1 className="text-4xl font-bold">Ticketthrift</h1>
                    <p className="mt-2 text-lg">Your go-to platform for affordable event tickets</p>
                </div>
            </header>

            <main className="container mx-auto py-10 px-5">
                <article className="bg-white shadow-lg rounded-lg p-8">
                    <h2 className="text-3xl font-bold mb-4">The Rising Trend of Secondhand Event Tickets</h2>
                    <p className="text-gray-700 mb-4">
                        In recent years, buying secondhand tickets has become increasingly popular. Event-goers are discovering that they can find
                        tickets to their favorite concerts, sports events, and shows at much lower prices than buying directly from the venue or primary
                        ticket sellers.
                    </p>
                    <p className="text-gray-700 mb-4">
                        This trend not only helps consumers save money but also promotes sustainability by reducing waste. As more people turn to
                        resale platforms like Ticketthrift, the secondhand ticket market is thriving.
                    </p>
                    <h3 className="text-2xl font-semibold mt-6 mb-2">Why Choose Secondhand Tickets?</h3>
                    <ul className="list-disc list-inside mb-4">
                        <li className="text-gray-700">Significant savings on ticket prices.</li>
                        <li className="text-gray-700">Access to sold-out events.</li>
                        <li className="text-gray-700">Opportunities for unique experiences.</li>
                    </ul>
                    <p className="text-gray-700 mb-4">
                        If you're looking for the best deals on event tickets, exploring secondhand options could be the perfect solution. Just
                        remember to use trusted platforms to ensure a safe and secure transaction.
                    </p>
                    <p className="text-gray-700">
                        For more tips on safe online ticket purchases and updates on events, stay tuned to our blog!
                    </p>

                    {/* Responsive Button */}
                    <div className="text-center mt-8">
                        <Link to="/blog" // Change this to your desired URL
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="inline-block bg-purple-600 text-white py-2 px-6 rounded-lg font-bold hover:bg-purple-800 transition duration-300 transform hover:scale-105"
                        >
                            Visit our Blog Page
                        </Link>
                        
                    </div>
                </article>
            </main>

            <footer className="bg-gray-900 text-white py-6">
                <div className="container mx-auto text-center">
                    <p className="mb-2">Follow us on social media:</p>
                    <div className="flex justify-center space-x-6 mb-4">
                        <a href="https://www.facebook.com/" className="text-gray-400 hover:text-white transition duration-300">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="https://x.com/quasitek" className="text-gray-400 hover:text-white transition duration-300">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="https://www.instagram.com/" className="text-gray-400 hover:text-white transition duration-300">
                            <i className="fab fa-instagram"></i>
                        </a>
                    </div>
                    <p className="text-sm">Developed by Quasitek Solutions</p>
                </div>
            </footer>
        </div>
    );
};

export default ReadMore;
