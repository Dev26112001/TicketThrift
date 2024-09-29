import{ useState } from "react";
import { FiTrash2, FiEdit2 } from "react-icons/fi";
import { v4 as uuidv4 } from "uuid";

const SellTicket = () => {
  const [eventName, setEventName] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [venueName, setVenueName] = useState("");
  const [venueAddress, setVenueAddress] = useState("");
  const [eventDescription, setEventDescription] = useState("");
  const [ticketType, setTicketType] = useState("General Admission");
  const [ticketQuantity, setTicketQuantity] = useState(1);
  const [ticketPrice, setTicketPrice] = useState("");
  const [seatInfo, setSeatInfo] = useState("");
  const [images, setImages] = useState([]);
  const [description, setDescription] = useState("");
  const [termsAndConditions, setTermsAndConditions] = useState("");
  const [listings, setListings] = useState([]);

  const handleFileUpload = (e) => {
    const files = Array.from(e.target.files);
    setImages((prev) => [...prev, ...files]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newListing = {
      id: uuidv4(),
      eventName,
      eventDate,
      venueName,
      venueAddress,
      eventDescription,
      ticketType,
      ticketQuantity,
      ticketPrice,
      seatInfo,
      description,
      termsAndConditions,
      images,
    };

    setListings((prev) => [...prev, newListing]);
    clearForm();
  };

  const clearForm = () => {
    setEventName("");
    setEventDate("");
    setVenueName("");
    setVenueAddress("");
    setEventDescription("");
    setTicketType("General Admission");
    setTicketQuantity(1);
    setTicketPrice("");
    setSeatInfo("");
    setImages([]);
    setDescription("");
    setTermsAndConditions("");
  };

  const handleDelete = (id) => {
    setListings(listings.filter((listing) => listing.id !== id));
  };

  const handleEdit = (listing) => {
    setEventName(listing.eventName);
    setEventDate(listing.eventDate);
    setVenueName(listing.venueName);
    setVenueAddress(listing.venueAddress);
    setEventDescription(listing.eventDescription);
    setTicketType(listing.ticketType);
    setTicketQuantity(listing.ticketQuantity);
    setTicketPrice(listing.ticketPrice);
    setSeatInfo(listing.seatInfo);
    setDescription(listing.description);
    setTermsAndConditions(listing.termsAndConditions);
    setImages(listing.images);
    handleDelete(listing.id); // Remove the current one for editing
  };

  return (
    <div className="container mx-auto py-10 px-4">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">Sell Your Tickets</h1>

      {/* Form for Ticket Listing */}
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg transition-shadow hover:shadow-2xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-6">
          {/* Event Name */}
          <div>
            <label className="block text-lg font-medium text-gray-700 mb-2">Event Name</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={eventName}
              onChange={(e) => setEventName(e.target.value)}
              required
            />
          </div>

          {/* Event Date */}
          <div>
            <label className="block text-lg font-medium text-gray-700 mb-2">Event Date</label>
            <input
              type="date"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={eventDate}
              onChange={(e) => setEventDate(e.target.value)}
              required
            />
          </div>

          {/* Venue Name */}
          <div>
            <label className="block text-lg font-medium text-gray-700 mb-2">Venue Name</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={venueName}
              onChange={(e) => setVenueName(e.target.value)}
              required
            />
          </div>

          {/* Venue Address */}
          <div>
            <label className="block text-lg font-medium text-gray-700 mb-2">Venue Address</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={venueAddress}
              onChange={(e) => setVenueAddress(e.target.value)}
              required
            />
          </div>
        </div>

        {/* Event Description */}
        <div className="mb-6">
          <label className="block text-lg font-medium text-gray-700 mb-2">Event Description</label>
          <textarea
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            value={eventDescription}
            onChange={(e) => setEventDescription(e.target.value)}
            required
          />
        </div>

        {/* Ticket Details */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-6">
          {/* Ticket Type */}
          <div>
            <label className="block text-lg font-medium text-gray-700 mb-2">Ticket Type</label>
            <select
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={ticketType}
              onChange={(e) => setTicketType(e.target.value)}
              required
            >
              <option value="General Admission">General Admission</option>
              <option value="VIP">VIP</option>
              <option value="Seated">Seated</option>
            </select>
          </div>

          {/* Quantity */}
          <div>
            <label className="block text-lg font-medium text-gray-700 mb-2">Quantity</label>
            <input
              type="number"
              min="1"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={ticketQuantity}
              onChange={(e) => setTicketQuantity(e.target.value)}
              required
            />
          </div>

          {/* Ticket Price */}
          <div>
            <label className="block text-lg font-medium text-gray-700 mb-2">Price</label>
            <input
              type="number"
              min="1"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={ticketPrice}
              onChange={(e) => setTicketPrice(e.target.value)}
              required
            />
          </div>

          {/* Seat Information */}
          {ticketType === "Seated" && (
            <div>
              <label className="block text-lg font-medium text-gray-700 mb-2">Seat Information (Section, Row, Seat)</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={seatInfo}
                onChange={(e) => setSeatInfo(e.target.value)}
              />
            </div>
          )}
        </div>

        {/* Upload Images */}
        <div className="mb-6">
          <label className="block text-lg font-medium text-gray-700 mb-2">Upload Images</label>
          <input
            type="file"
            multiple
            className="w-full border border-gray-300 rounded-lg px-4 py-2"
            onChange={handleFileUpload}
          />
          <div className="mt-4 flex space-x-4">
            {images.map((img, idx) => (
              <div key={idx} className="relative">
                <img
                  src={URL.createObjectURL(img)}
                  alt="Ticket"
                  className="w-24 h-24 object-cover rounded-lg shadow-md transition-transform duration-200 hover:scale-105"
                />
                <FiTrash2
                  className="absolute -top-2 -right-2 text-red-600 cursor-pointer hover:text-red-800 transition-colors duration-200"
                  onClick={() => setImages(images.filter((_, i) => i !== idx))}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Description */}
        <div className="mb-6">
          <label className="block text-lg font-medium text-gray-700 mb-2">Ticket Description</label>
          <textarea
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>

        {/* Terms and Conditions */}
        <div className="mb-6">
          <label className="block text-lg font-medium text-gray-700 mb-2">Terms and Conditions</label>
          <textarea
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            value={termsAndConditions}
            onChange={(e) => setTermsAndConditions(e.target.value)}
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition duration-200 shadow-lg"
        >
          Submit Listing
        </button>
      </form>

      {/* Seller Dashboard */}
      <h2 className="text-3xl font-bold text-gray-800 mt-10 mb-4">Your Listings</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {listings.map((listing) => (
          <div key={listing.id} className="bg-white p-6 rounded-lg shadow-lg transition-shadow hover:shadow-2xl">
            <h3 className="text-2xl font-bold text-gray-800 mb-2">{listing.eventName}</h3>
            <p className="text-gray-600">{listing.eventDate}</p>
            <p className="text-gray-600 mb-4">{listing.venueName}</p>
            <p className="text-gray-700 mb-2">Tickets: {listing.ticketQuantity}</p>
            <p className="text-gray-700 mb-4">Price: ${listing.ticketPrice}</p>
            <div className="flex space-x-2">
              <button
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-200 flex items-center"
                onClick={() => handleEdit(listing)}
              >
                <FiEdit2 className="inline mr-2" /> Edit
              </button>
              <button
                className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition duration-200 flex items-center"
                onClick={() => handleDelete(listing.id)}
              >
                <FiTrash2 className="inline mr-2" /> Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SellTicket;
