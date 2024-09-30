import React, { useState } from 'react';
import { Bell, CreditCard, LogOut, Settings, Ticket } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer, BarChart, Bar, Legend } from 'recharts';

const data = [
  { name: 'Jan', profit: 400 },
  { name: 'Feb', profit: 800 },
  { name: 'Mar', profit: 650 },
  { name: 'Apr', profit: 1000 },
  { name: 'May', profit: 750 },
  { name: 'Jun', profit: 900 },
  { name: 'Jul', profit: 1100 },
  { name: 'Aug', profit: 1250 },
];

const ProfileDashboard = () => {
  // State variables for tickets and profit
  const [ticketsBought, setTicketsBought] = useState(15);
  const [ticketsSold, setTicketsSold] = useState(25);
  const [totalProfit, setTotalProfit] = useState(1250.00); // Profit in dollars
  const [notifications, setNotifications] = useState(true);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-100 via-white to-gray-300">
      {/* Header Section */}
      <header className="flex justify-between items-center p-6 bg-gradient-to-r from-purple-600 to-blue-500 text-white shadow-lg rounded-b-lg">
        <h1 className="text-3xl font-bold">TicketThrift Sales Dashboard</h1>
        <div className="flex items-center space-x-4">
          <button className="relative p-2 rounded-full bg-white bg-opacity-10 hover:bg-opacity-20 transition">
            <Bell className="w-6 h-6 text-white" />
            <span className="absolute top-1 right-1 h-2 w-2 bg-red-600 rounded-full"></span>
          </button>
          <div className="h-12 w-12 rounded-full bg-gray-300 flex items-center justify-center text-purple-600 font-bold text-xl border-2 border-purple-400 shadow-lg">
            JD
          </div>
        </div>
      </header>

      {/* Profile Information Section */}
      <main className="flex-1 p-8 space-y-8">
        {/* User Information Section */}
        <section className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* User Information */}
          <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-xl font-semibold text-purple-600">User Information</h2>
            <div className="flex items-center space-x-4 mt-4">
              <div className="h-16 w-16 rounded-full bg-gray-300 flex items-center justify-center text-purple-600 font-bold text-2xl border-2 border-purple-400 shadow-lg">
                JD
              </div>
              <div>
                <h3 className="text-2xl font-semibold">John Doe</h3>
                <p className="text-gray-500">john.doe@example.com</p>
              </div>
            </div>
          </div>

          {/* Tickets Bought */}
          <div className="bg-white shadow-lg rounded-lg p-6 text-center border border-gray-200 hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-xl font-semibold text-blue-600">Tickets Bought</h2>
            <p className="text-5xl font-semibold text-blue-700 mt-4">{ticketsBought}</p>
            <p className="text-gray-500 mt-2">Total tickets bought</p>
          </div>

          {/* Tickets Sold */}
          <div className="bg-white shadow-lg rounded-lg p-6 text-center border border-gray-200 hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-xl font-semibold text-green-600">Tickets Sold</h2>
            <p className="text-5xl font-semibold text-green-700 mt-4">{ticketsSold}</p>
            <p className="text-gray-500 mt-2">Total tickets sold</p>
          </div>

          {/* Profit Made */}
          <div className="bg-white shadow-lg rounded-lg p-6 text-center border border-gray-200 hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-xl font-semibold text-purple-600">Profit Made</h2>
            <p className="text-5xl font-semibold text-purple-700 mt-4">${totalProfit.toFixed(2)}</p>
            <p className="text-gray-500 mt-2">Total profit made</p>
          </div>
        </section>

        {/* Chart Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Line Chart for Profit */}
          <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-xl font-semibold text-indigo-600">Profit Trend</h2>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={data}>
                <CartesianGrid stroke="#eee" strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="profit" stroke="#8884d8" />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Bar Chart for Tickets Sold */}
          <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-xl font-semibold text-green-600">Tickets Sold Per Month</h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="profit" fill="#82ca9d" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </section>

        {/* Account Settings Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Recent Activity */}
          <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-xl font-semibold text-indigo-600">Recent Activity</h2>
            <ul className="space-y-4 mt-4">
              <li className="flex justify-between items-center bg-gray-50 p-4 rounded-lg hover:bg-indigo-50 transition">
                <span>Sold 2x tickets for "Rock Festival 2024"</span>
                <span className="text-green-600 font-semibold">+$150.00</span>
              </li>
              <li className="flex justify-between items-center bg-gray-50 p-4 rounded-lg hover:bg-indigo-50 transition">
                <span>Bought 1x ticket for "Jazz in the Park"</span>
                <span className="text-red-600 font-semibold">-$50.00</span>
              </li>
              <li className="flex justify-between items-center bg-gray-50 p-4 rounded-lg hover:bg-indigo-50 transition">
                <span>Sold 1x ticket for "EDM Concert 2024"</span>
                <span className="text-green-600 font-semibold">+$80.00</span>
              </li>
            </ul>
          </div>

          {/* Account Settings */}
          <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-xl font-semibold text-indigo-600">Account Settings</h2>
            <div className="flex items-center justify-between mt-4">
              <div className="space-y-1">
                <h3 className="font-medium">Email Notifications</h3>
                <p className="text-sm text-gray-500">Receive notifications about your account activity</p>
              </div>
              <input
                type="checkbox"
                checked={notifications}
                onChange={() => setNotifications(!notifications)}
                className="h-5 w-5 text-indigo-600 rounded-full focus:ring-indigo-500"
              />
            </div>
            <button className="w-full bg-indigo-600 text-white py-2 rounded-lg mt-4 hover:bg-indigo-500 transition">Manage Payment Methods</button>
            <button className="w-full border border-indigo-500 text-indigo-600 py-2 rounded-lg mt-2 hover:bg-indigo-100 transition">Account Settings</button>
            <button className="w-full bg-red-600 text-white py-2 rounded-lg mt-2 hover:bg-red-500 transition">Logout</button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ProfileDashboard;
