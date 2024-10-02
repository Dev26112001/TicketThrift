/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';

import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register Chart.js components
ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale, Title, Tooltip, Legend);

const Modal = ({ visible, onClose, userDetails, onSave }) => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [editedDetails, setEditedDetails] = useState(userDetails);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handleEdit = () => setIsEditMode(true);
  const handleSave = () => {
    onSave(editedDetails);
    setIsEditMode(false);
  };
  const handleCancel = () => {
    setEditedDetails(userDetails);
    setIsEditMode(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 w-4/5 h-auto shadow-lg relative flex flex-col">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-purple-600">User Information</h2>
          <button onClick={onClose} className="text-gray-600 hover:text-gray-800 text-xl">&#10005;</button>
        </div>

        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-600 font-medium mb-1">Name:</label>
              <input
                type="text"
                name="name"
                value={editedDetails.name}
                onChange={handleChange}
                disabled={!isEditMode}
                className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                  isEditMode ? 'border-purple-400 focus:ring-purple-400' : 'border-gray-300'
                }`}
              />
            </div>
            <div>
              <label className="block text-gray-600 font-medium mb-1">Email:</label>
              <input
                type="email"
                name="email"
                value={editedDetails.email}
                onChange={handleChange}
                disabled={!isEditMode}
                className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                  isEditMode ? 'border-purple-400 focus:ring-purple-400' : 'border-gray-300'
                }`}
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-600 font-medium mb-1">Phone:</label>
              <input
                type="text"
                name="phone"
                value={editedDetails.phone}
                onChange={handleChange}
                disabled={!isEditMode}
                className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                  isEditMode ? 'border-purple-400 focus:ring-purple-400' : 'border-gray-300'
                }`}
              />
            </div>
            <div>
              <label className="block text-gray-600 font-medium mb-1">Address:</label>
              <input
                type="text"
                name="address"
                value={editedDetails.address}
                onChange={handleChange}
                disabled={!isEditMode}
                className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                  isEditMode ? 'border-purple-400 focus:ring-purple-400' : 'border-gray-300'
                }`}
              />
            </div>
          </div>
        </div>
        <div className="flex justify-end items-center mt-6 space-x-4">
          {isEditMode ? (
            <>
              <button onClick={handleCancel} className="px-4 py-2 text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300">Cancel</button>
              <button onClick={handleSave} className="px-4 py-2 text-white bg-green-600 rounded-md hover:bg-green-700">Save</button>
            </>
          ) : (
            <button onClick={handleEdit} className="px-4 py-2 text-white bg-red-600 rounded-md hover:bg-red-700">Edit</button>
          )}
        </div>
      </div>
    </div>
  );
};

// Tickets Modal with Hover Effect
import React from 'react';

/* Tickets Modal with a Responsive Image and Larger Card Size */
const TicketsModal = ({ visible, onClose, tickets, title }) => {
  // Hardcoded concert image URL from Pexels
  const concertImageUrl = 'https://images.pexels.com/photos/625644/pexels-photo-625644.jpeg'; // Use a direct image URL from Pexels

  if (!visible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 w-3/4 h-4/5 shadow-lg overflow-y-auto relative flex flex-col"> {/* Adjusted width and height for larger card size */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-blue-600">{title}</h2>
          <button onClick={onClose} className="text-gray-600 hover:text-gray-800 text-xl">&#10005;</button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {tickets.map((ticket, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 cursor-pointer"
            >
              <img
                src={concertImageUrl}
                alt={`Concert ${index}`}
                className="w-full h-60 object-cover md:h-72 lg:h-80" // Responsive height
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="text-white text-center px-4 py-2">
                  <h3 className="text-lg font-bold">{ticket}</h3>
                  <p className="text-sm">Venue: Madison Square Garden</p>
                  <p className="text-sm">Date: 25th Dec 2024</p>
                  <p className="text-sm">Price: $100</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};



// Main Profile Dashboard
const ProfileDashboard = () => {
  const [showModal, setShowModal] = useState(false);
  const [showTicketsBoughtModal, setShowTicketsBoughtModal] = useState(false);
  const [showTicketsSoldModal, setShowTicketsSoldModal] = useState(false);

  const [userDetails, setUserDetails] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '123-456-7890',
    address: '123 Main St, City, Country',
  });

  const ticketsBought = ['Concert A', 'Concert B', 'Concert C'];
  const ticketsSold = ['Concert X', 'Concert Y'];

  const recentActivities = [
    { type: 'bought', ticket: 'Concert A', amount: -50 },
    { type: 'sold', ticket: 'Concert X', amount: 100 },
  ];

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const handleOpenTicketsBoughtModal = () => setShowTicketsBoughtModal(true);
  const handleCloseTicketsBoughtModal = () => setShowTicketsBoughtModal(false);

  const handleOpenTicketsSoldModal = () => setShowTicketsSoldModal(true);
  const handleCloseTicketsSoldModal = () => setShowTicketsSoldModal(false);

  const handleSaveChanges = (newDetails) => setUserDetails(newDetails);

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-8 text-blue-600">TicketThrift Profile Dashboard</h1>
      
      {/* Profile Info */}
      <div className="bg-white p-6 rounded-lg shadow-md grid grid-cols-2 gap-8 mb-8">
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Personal Information</h2>
          <p className="text-lg mb-4"><strong>Name:</strong> {userDetails.name}</p>
          <p className="text-lg mb-4"><strong>Email:</strong> {userDetails.email}</p>
          <p className="text-lg mb-4"><strong>Phone:</strong> {userDetails.phone}</p>
          <p className="text-lg mb-4"><strong>Address:</strong> {userDetails.address}</p>
          <button onClick={handleOpenModal} className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700">Edit Information</button>
        </div>

        {/* Tickets & Recent Activities */}
        <div className="space-y-6">
          {/* Tickets Bought & Sold */}
          <div className="grid grid-cols-2 gap-4">
            <div
              onClick={handleOpenTicketsBoughtModal}
              className="bg-purple-100 p-6 rounded-lg shadow-lg cursor-pointer hover:shadow-xl transition duration-300 ease-in-out"
            >
              <h2 className="text-2xl font-bold text-blue-600 mb-4">Tickets Bought</h2>
              <p className="text-gray-600">You have bought {ticketsBought.length} tickets.</p>
            </div>
            <div
              onClick={handleOpenTicketsSoldModal}
              className="bg-green-100 p-6 rounded-lg shadow-lg cursor-pointer hover:shadow-xl transition duration-300 ease-in-out"
            >
              <h2 className="text-2xl font-bold text-green-600 mb-4">Tickets Sold</h2>
              <p className="text-gray-600">You have sold {ticketsSold.length} tickets.</p>
            </div>
          </div>

          {/* Recent Activities */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-purple-600 mb-4">Recent Activities</h2>
            <ul className="space-y-2">
              {recentActivities.map((activity, index) => (
                <li key={index} className={`text-lg ${activity.type === 'sold' ? 'text-green-600' : 'text-blue-600'}`}>
                  <i className={`fas fa-ticket-alt mr-2`}></i> {activity.type === 'sold' ? 'Sold' : 'Bought'} <strong>{activity.ticket}</strong> for ${Math.abs(activity.amount)}.
                </li>
              ))}
            </ul>
          </div>

          {/* Account Settings */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Account Settings</h2>
            <ul className="space-y-4">
              <li><strong>Profile Settings:</strong> Update your personal details</li>
              <li><strong>Security & Privacy:</strong> Change password, 2FA</li>
              <li><strong>Notification Preferences:</strong> Email, SMS, Push</li>
              <li><strong>Payment Methods:</strong> Manage cards, PayPal, etc.</li>
              <li><strong>Connected Apps:</strong> See and manage third-party integrations</li>
            </ul>
            <button className="mt-4 px-4 py-2 text-white bg-gray-600 rounded-md hover:bg-gray-700">Manage Settings</button>
          </div>
        </div>
      </div>

      {/* Modals */}
      <Modal visible={showModal} onClose={handleCloseModal} userDetails={userDetails} onSave={handleSaveChanges} />
      <TicketsModal visible={showTicketsBoughtModal} onClose={handleCloseTicketsBoughtModal} tickets={ticketsBought} title="Tickets Bought" />
      <TicketsModal visible={showTicketsSoldModal} onClose={handleCloseTicketsSoldModal} tickets={ticketsSold} title="Tickets Sold" />
    </div>
  );
};

export default ProfileDashboard;
