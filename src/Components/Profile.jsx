/* eslint-disable react/prop-types */
import { useState } from 'react';
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

// User Information Modal
// eslint-disable-next-line react/prop-types
const Modal = ({ visible, onClose, userDetails, onSave }) => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [editedDetails, setEditedDetails] = useState(userDetails);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handleEdit = () => {
    setIsEditMode(true);
  };

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
          <button onClick={onClose} className="text-gray-600 hover:text-gray-800 text-xl">
            &#10005;
          </button>
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
                className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${isEditMode ? 'border-purple-400 focus:ring-purple-400' : 'border-gray-300'}`}
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
                className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${isEditMode ? 'border-purple-400 focus:ring-purple-400' : 'border-gray-300'}`}
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
                className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${isEditMode ? 'border-purple-400 focus:ring-purple-400' : 'border-gray-300'}`}
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
                className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${isEditMode ? 'border-purple-400 focus:ring-purple-400' : 'border-gray-300'}`}
              />
            </div>
          </div>
        </div>
        <div className="flex justify-end items-center mt-6 space-x-4">
          {isEditMode ? (
            <>
              <button onClick={handleCancel} className="px-4 py-2 text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300">
                Cancel
              </button>
              <button onClick={handleSave} className="px-4 py-2 text-white bg-green-600 rounded-md hover:bg-green-700">
                Save
              </button>
            </>
          ) : (
            <button onClick={handleEdit} className="px-4 py-2 text-white bg-purple-600 rounded-md hover:bg-purple-700">
              Edit
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

// Tickets Modal
// eslint-disable-next-line react/prop-types
const TicketsModal = ({ visible, onClose, tickets, title }) => {
  if (!visible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 w-4/5 h-auto shadow-lg relative flex flex-col">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-blue-600">{title}</h2>
          <button onClick={onClose} className="text-gray-600 hover:text-gray-800 text-xl">
            &#10005;
          </button>
        </div>

        <div className="space-y-4">
          <ul>
            {tickets.map((ticket, index) => (
              <li key={index} className="border-b py-2">
                {ticket}
              </li>
            ))}
          </ul>
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

  const ticketsBought = ["Concert A", "Concert B", "Concert C"];
  const ticketsSold = ["Concert D", "Concert E", "Concert F"];

  const recentActivities = [
    { type: 'sold', ticket: 'Rock Festival 2024', amount: 150 },
    { type: 'bought', ticket: 'Jazz in the Park', amount: -50 },
    { type: 'sold', ticket: 'EDM Concert 2024', amount: 80 },
  ];

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleSaveChanges = (updatedDetails) => {
    setUserDetails(updatedDetails);
    setShowModal(false);
  };

  const handleOpenTicketsBoughtModal = () => {
    setShowTicketsBoughtModal(true);
  };

  const handleCloseTicketsBoughtModal = () => {
    setShowTicketsBoughtModal(false);
  };

  const handleOpenTicketsSoldModal = () => {
    setShowTicketsSoldModal(true);
  };

  const handleCloseTicketsSoldModal = () => {
    setShowTicketsSoldModal(false);
  };

  return (
    <div className="p-8 bg-gray-50">
      <h1 className="text-3xl font-bold mb-6">Profile Dashboard</h1>
      <div className='grid grid-cols-12 gap-4'>
        <div className="bg-white col-span-4 p-6 rounded-lg shadow-md mb-6">
          <h2 className="text-2xl font-semibold">User Profile</h2>
          <div className="flex items-center justify-between mt-4">
            <div>
              <p className="text-gray-600">{userDetails.name}</p>
              <p className="text-gray-600">{userDetails.email}</p>
              <p className="text-gray-600">{userDetails.phone}</p>
              <p className="text-gray-600">{userDetails.address}</p>
            </div>
            <button onClick={handleOpenModal} className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700">
              Edit
            </button>
          </div>
        </div>
        <button onClick={handleOpenTicketsBoughtModal} className="bg-white col-span-4 p-6 rounded-lg shadow-md mb-6">
          <h2 className="text-2xl font-semibold">Tickets Bought</h2>
         
        </button>
        <button onClick={handleOpenTicketsSoldModal} className="bg-white col-span-4 p-6 rounded-lg shadow-md mb-6">
          <h2 className="text-2xl font-semibold">TicketsSold</h2>
         
        </button>
      </div>
     

      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-2xl font-semibold">Sales Overview</h2>
        <Line
          data={{
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            datasets: [
              {
                label: 'Sales Amount ($)',
                data: [400, 450, 300, 500, 700, 800],
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderWidth: 2,
                fill: true,
              },
            ],
          }}
          options={{
            responsive: true,
            plugins: {
              legend: {
                position: 'top',
              },
              title: {
                display: true,
                text: 'Sales Over Time',
              },
            },
          }}
        />
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-2xl font-semibold">Recent Activities</h2>
        <ul className="space-y-2 mt-4">
          {recentActivities.map((activity, index) => (
            <li key={index} className={`p-4 rounded-md ${activity.type === 'sold' ? 'bg-green-100' : 'bg-red-100'}`}>
              <p className="font-semibold">{activity.type === 'sold' ? 'Sold' : 'Bought'} Ticket: {activity.ticket}</p>
              <p className="text-gray-600">Amount: ${Math.abs(activity.amount)}</p>
            </li>
          ))}
        </ul>
      </div>

      {/* <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold">Ticket Management</h2>
        <div className="flex justify-between mt-4">
          <button onClick={handleOpenTicketsBoughtModal} className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700">
            View Tickets Bought
          </button>
          <button onClick={handleOpenTicketsSoldModal} className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700">
            View Tickets Sold
          </button>
        </div>
      </div> */}

      {/* User Information Modal */}
      <Modal
        visible={showModal}
        onClose={handleCloseModal}
        userDetails={userDetails}
        onSave={handleSaveChanges}
      />

      {/* Tickets Bought Modal */}
      <TicketsModal
        visible={showTicketsBoughtModal}
        onClose={handleCloseTicketsBoughtModal}
        tickets={ticketsBought}
        title="Tickets Bought"
      />

      {/* Tickets Sold Modal */}
      <TicketsModal
        visible={showTicketsSoldModal}
        onClose={handleCloseTicketsSoldModal}
        tickets={ticketsSold}
        title="Tickets Sold"
      />
    </div>
  );
};

export default ProfileDashboard;
