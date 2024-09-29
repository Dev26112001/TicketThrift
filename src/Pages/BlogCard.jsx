import React from 'react';
import { Link } from 'react-router-dom'; // Make sure to import Link if you are using React Router

// Define blog data outside the component
const blogData = [
  { 
    title: "The Rising Trend of Secondhand Event Tickets", 
    description: "Explore how buying secondhand tickets is becoming a popular trend for event-goers.", 
    link: "/readmore" 
  },
  { 
    title: "Tips for Safe Online Ticket Purchases", 
    description: "Learn how to safely purchase secondhand tickets online and avoid scams.", 
    link: "#read-more" 
  },
];

const BlogCard = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-5xl font-extrabold mb-10 text-gray-800">Latest News</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {blogData.map((blog, index) => (
            <div 
              key={index} 
              className="bg-gray-100 p-8 rounded-lg shadow-xl hover:bg-gray-200 transition duration-300 transform hover:scale-105"
            >
              <h3 className="text-2xl font-bold mb-4">{blog.title}</h3>
              <p className="text-gray-600 mb-4">{blog.description}</p>
              <Link to={blog.link} className="text-purple-600 font-bold hover:underline">Read More</Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BlogCard;
