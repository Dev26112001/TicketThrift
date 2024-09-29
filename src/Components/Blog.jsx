

const BlogPage = () => {
    const blogs = [
        {
            title: "Exploring the Best Summer Festivals",
            excerpt: "Summer is the season of festivals! Discover the top events happening this summer.",
            date: "August 15, 2024",
            link: "/blog/summer-festivals"
        },
        {
            title: "How to Score Affordable Tickets",
            excerpt: "Learn tips and tricks on how to find the best deals on event tickets.",
            date: "July 10, 2024",
            link: "/blog/affordable-tickets"
        },
        {
            title: "The Impact of Live Music on Communities",
            excerpt: "Explore how live music events can transform local communities and boost economies.",
            date: "June 25, 2024",
            link: "/blog/live-music-impact"
        }
        // Add more blog objects as needed
    ];

    return (
        <div className="bg-gray-100 min-h-screen">
            <header className="bg-purple-600 text-white py-6">
                <div className="container mx-auto text-center">
                    <h1 className="text-4xl font-bold">Ticketthrift Blog</h1>
                    <p className="mt-2 text-lg">Your source for event news, tips, and insights</p>
                </div>
            </header>

            <main className="container mx-auto py-10 px-5">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {blogs.map((blog, index) => (
                        <div key={index} className="bg-white shadow-lg rounded-lg p-6">
                            <h2 className="text-2xl font-bold mb-2">{blog.title}</h2>
                            <p className="text-gray-600 mb-4">{blog.excerpt}</p>
                            <p className="text-gray-500 mb-4">{blog.date}</p>
                            <a 
                                href={blog.link} 
                                className="text-purple-600 hover:underline font-semibold"
                            >
                                Read More
                            </a>
                        </div>
                    ))}
                </div>
            </main>

            <footer className="bg-gray-900 text-white py-6">
                <div className="container mx-auto text-center">
                    <p className="text-sm">Developed by Quasitek Solutions</p>
                </div>
            </footer>
        </div>
    );
};

export default BlogPage;
