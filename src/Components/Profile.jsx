/* eslint-disable react/prop-types */
import { useState, useCallback } from "react";
import { Line } from "react-chartjs-2";
import { useUser, SignOutButton } from '@clerk/clerk-react';

import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import Cropper from "react-easy-crop";
import { getCroppedImg } from "../Components/cropImage";
// Register Chart.js components
ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Title,
  Tooltip,
  Legend
);

const Modal = ({ visible, onClose, userDetails, onSave }) => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [editedDetails, setEditedDetails] = useState(userDetails);
  const [imageSrc, setImageSrc] = useState(null);
  const [croppedArea, setCroppedArea] = useState(null);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handleEdit = () => setIsEditMode(true);

  const handleSave = async () => {
    if (croppedArea && imageSrc) {
      const croppedImage = await getCroppedImg(imageSrc, croppedArea);
      setEditedDetails({ ...editedDetails, profileImage: croppedImage });
    }
    onSave(editedDetails);
    setIsEditMode(false);
  };

  const handleCancel = () => {
    setEditedDetails(userDetails);
    setImageSrc(null); // Reset the image source to allow re-upload
    setIsEditMode(false);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setImageSrc(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleChangeImage = () => {
    setImageSrc(null); // Reset image source to allow a new upload
    setCroppedArea(null); // Reset cropped area for a fresh crop
  };

  const onCropComplete = useCallback(
    (croppedAreaPercentage, croppedAreaPixels) => {
      setCroppedArea(croppedAreaPixels);
    },
    []
  );

  if (!visible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 w-4/5 h-auto shadow-lg relative flex flex-col">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-purple-600">
            User Information
          </h2>
          <button
            onClick={onClose}
            className="text-gray-600 hover:text-gray-800 text-xl"
          >
            &#10005;
          </button>
        </div>

        {/* Image Upload and Cropping Section */}
        <div className="mb-4 text-center">
          <label className="block text-gray-600 font-medium mb-2">
            Profile Image
          </label>
          {imageSrc ? (
            <div className="relative w-full h-64 bg-gray-100 mb-4">
              <Cropper
                image={imageSrc}
                crop={crop}
                zoom={zoom}
                aspect={1}
                onCropChange={setCrop}
                onZoomChange={setZoom}
                onCropComplete={onCropComplete}
              />
              <button
                onClick={handleChangeImage}
                className="absolute top-2 right-2 bg-red-500 text-white px-4 py-1 rounded-full shadow-md hover:bg-red-600"
              >
                Change Image
              </button>
            </div>
          ) : (
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="mx-auto block"
              disabled={!isEditMode}
            />
          )}
        </div>

        <div className="space-y-4">
          {/* Other User Information Inputs */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-600 font-medium mb-1">
                Name:
              </label>
              <input
                type="text"
                name="name"
                value={editedDetails.name}
                onChange={handleChange}
                disabled={!isEditMode}
                className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                  isEditMode
                    ? "border-purple-400 focus:ring-purple-400"
                    : "border-gray-300"
                }`}
              />
            </div>
            <div>
              <label className="block text-gray-600 font-medium mb-1">
                Email:
              </label>
              <input
                type="email"
                name="email"
                value={editedDetails.email}
                onChange={handleChange}
                disabled={!isEditMode}
                className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                  isEditMode
                    ? "border-purple-400 focus:ring-purple-400"
                    : "border-gray-300"
                }`}
              />
            </div>
          </div>
          {/* Additional Inputs for Phone and Address */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-600 font-medium mb-1">
                Phone:
              </label>
              <input
                type="text"
                name="phone"
                value={editedDetails.phone}
                onChange={handleChange}
                disabled={!isEditMode}
                className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                  isEditMode
                    ? "border-purple-400 focus:ring-purple-400"
                    : "border-gray-300"
                }`}
              />
            </div>
            <div>
              <label className="block text-gray-600 font-medium mb-1">
                Address:
              </label>
              <input
                type="text"
                name="address"
                value={editedDetails.address}
                onChange={handleChange}
                disabled={!isEditMode}
                className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                  isEditMode
                    ? "border-purple-400 focus:ring-purple-400"
                    : "border-gray-300"
                }`}
              />
            </div>
          </div>
        </div>
        <div className="flex justify-end items-center mt-6 space-x-4">
          {isEditMode ? (
            <>
              <button
                onClick={handleCancel}
                className="px-4 py-2 text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="px-4 py-2 text-white bg-green-600 rounded-md hover:bg-green-700"
              >
                Save
              </button>
            </>
          ) : (
            <button
              onClick={handleEdit}
              className="px-4 py-2 text-white bg-red-600 rounded-md hover:bg-red-700"
            >
              Edit
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

/* Tickets Modal with a Responsive Image and Larger Card Size */
const TicketsModal = ({ visible, onClose, tickets, title }) => {
  // Hardcoded concert image URL from Pexels
  const concertImageUrl =
    "https://images.pexels.com/photos/625644/pexels-photo-625644.jpeg"; // Use a direct image URL from Pexels

  if (!visible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 w-3/4 h-4/5 shadow-lg overflow-y-auto relative flex flex-col">
        {" "}
        {/* Adjusted width and height for larger card size */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-blue-600">{title}</h2>
          <button
            onClick={onClose}
            className="text-gray-600 hover:text-gray-800 text-xl"
          >
            &#10005;
          </button>
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
  const { user } = useUser();
  const [showTicketsBoughtModal, setShowTicketsBoughtModal] = useState(false);
  const [showTicketsSoldModal, setShowTicketsSoldModal] = useState(false);

  const ticketsBought = ["Concert A", "Concert B", "Concert C"];
  const ticketsSold = ["Concert X", "Concert Y"];

  return (
    <div className="container mx-auto p-4">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        {/* User Profile Header */}
        <div className="bg-gradient-to-r from-purple-500 to-blue-500 p-6 text-white">
          <div className="flex items-center space-x-4">
            <img 
              src={user?.imageUrl} 
              alt="Profile" 
              className="w-24 h-24 rounded-full border-4 border-white"
            />
            <div>
              <h1 className="text-2xl font-bold">
                {user?.firstName} {user?.lastName}
              </h1>
              <p className="text-sm opacity-90">{user?.primaryEmailAddress?.emailAddress}</p>
              {user?.phoneNumbers && user.phoneNumbers[0] && (
                <p className="text-sm opacity-90">{user.phoneNumbers[0].phoneNumber}</p>
              )}
            </div>
          </div>
        </div>

        {/* User Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-6">
          <div className="bg-gray-50 p-4 rounded-lg text-center">
            <h3 className="text-lg font-semibold text-gray-700">Tickets Bought</h3>
            <p className="text-2xl font-bold text-purple-600">{ticketsBought.length}</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg text-center">
            <h3 className="text-lg font-semibold text-gray-700">Tickets Sold</h3>
            <p className="text-2xl font-bold text-blue-600">{ticketsSold.length}</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg text-center">
            <h3 className="text-lg font-semibold text-gray-700">Account Created</h3>
            <p className="text-sm text-gray-600">
              {new Date(user?.createdAt).toLocaleDateString()}
            </p>
          </div>
        </div>

        {/* Additional User Details */}
        <div className="p-6 border-t">
          <h2 className="text-xl font-semibold mb-4">Account Details</h2>
          <div className="space-y-3">
            <div>
              <label className="text-gray-600 text-sm">Email Verification</label>
              <p className="font-medium">
                {user?.emailAddresses?.[0]?.verification?.status === "verified" 
                  ? "✅ Verified" 
                  : "❌ Not Verified"}
              </p>
            </div>
            {user?.username && (
              <div>
                <label className="text-gray-600 text-sm">Username</label>
                <p className="font-medium">@{user.username}</p>
              </div>
            )}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="p-6 bg-gray-50">
          <div className="flex flex-wrap gap-4">
            <button 
              onClick={() => setShowTicketsBoughtModal(true)}
              className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
            >
              View Bought Tickets
            </button>
            <button 
              onClick={() => setShowTicketsSoldModal(true)}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              View Sold Tickets
            </button>
            <button 
              onClick={() => setShowTicketsSoldModal(true)}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            ><SignOutButton>Logout</SignOutButton>
            </button>
          </div>
        </div>
      </div>

      {/* Modals */}
      <TicketsModal
        visible={showTicketsBoughtModal}
        onClose={() => setShowTicketsBoughtModal(false)}
        tickets={ticketsBought}
        title="Tickets Bought"
      />
      <TicketsModal
        visible={showTicketsSoldModal}
        onClose={() => setShowTicketsSoldModal(false)}
        tickets={ticketsSold}
        title="Tickets Sold"
      />
    </div>
  );
};

export default ProfileDashboard;
