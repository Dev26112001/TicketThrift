import React from "react";

const movieData = [
  {
    title: "Inception",
    rating: "8.8",
    image: "https://ibb.co/4JCz5xZ",
  },
  {
    title: "Interstellar",
    rating: "8.6",
    image: "https://via.placeholder.com/300x400?text=Interstellar",
  },
  {
    title: "The Dark Knight",
    rating: "9.0",
    image: "https://via.placeholder.com/300x400?text=The+Dark+Knight",
  },
];

const BlogCard = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-5xl font-extrabold mb-10 text-gray-800">Movies</h2>

        {/* Movie Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {movieData.map((movie, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-lg shadow-xl"
            >
              <img
                src={movie.image}
                alt={movie.title}
                className="w-full h-full object-cover transform transition duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                <div className="text-center text-white">
                  <h3 className="text-3xl font-bold">{movie.title}</h3>
                  <p className="text-xl font-semibold mt-2">
                    Rating: {movie.rating}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogCard;
