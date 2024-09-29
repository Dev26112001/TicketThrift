import { useState } from 'react';
import { FaCreditCard, FaLock } from 'react-icons/fa';

function Checkout() {
  const [discountCode, setDiscountCode] = useState('');
  const [isDiscountApplied, setIsDiscountApplied] = useState(false);

  const ticketPrice = 150;
  const serviceFee = 15;
  const discountAmount = isDiscountApplied ? 20 : 0;
  const total = ticketPrice + serviceFee - discountAmount;

  const handleApplyDiscount = () => {
    if (discountCode.toLowerCase() === 'save20') {
      setIsDiscountApplied(true);
    }
  };

  return (
    <div className="container mx-auto p-6 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8 text-center text-indigo-600">Checkout</h1>
      <div className="grid gap-8 md:grid-cols-2">
        {/* Ticket Summary Card */}
        <div className="shadow-lg rounded-lg bg-gradient-to-br from-indigo-50 to-white border border-indigo-200 p-6">
          <div>
            <h2 className="text-2xl font-semibold text-indigo-800">Ticket Summary</h2>
            <p className="text-gray-600">Review event details and pricing</p>
          </div>
          <div className="space-y-4 mt-4">
            <div>
              <h3 className="font-semibold text-indigo-700">Event Name</h3>
              <p className="text-gray-800">Summer Music Festival 2024</p>
            </div>
            <div>
              <h3 className="font-semibold text-indigo-700">Date & Time</h3>
              <p className="text-gray-800">July 15, 2024 at 7:00 PM</p>
            </div>
            <div>
              <h3 className="font-semibold text-indigo-700">Seat</h3>
              <p className="text-gray-800">Section A, Row 5, Seat 23</p>
            </div>
            <div className="border-t border-gray-200 my-4"></div>
            <div className="flex justify-between text-gray-700">
              <span>Ticket Price</span>
              <span>${ticketPrice.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-gray-700">
              <span>Service Fee</span>
              <span>${serviceFee.toFixed(2)}</span>
            </div>
            {isDiscountApplied && (
              <div className="flex justify-between text-green-600">
                <span>Discount</span>
                <span>-${discountAmount.toFixed(2)}</span>
              </div>
            )}
            <div className="border-t border-gray-200 my-4"></div>
            <div className="flex justify-between text-indigo-800 font-bold">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>
        </div>

        {/* Payment Details Card */}
        <div className="shadow-lg rounded-lg bg-gradient-to-br from-indigo-50 to-white border border-indigo-200 p-6">
          <div>
            <h2 className="text-2xl font-semibold text-indigo-800">Payment Details</h2>
            <p className="text-gray-600">Enter your payment information</p>
          </div>
          <form className="mt-4 space-y-6">
            <div>
              <label htmlFor="name" className="block text-indigo-600 font-medium">Name on Card</label>
              <input
                id="name"
                type="text"
                placeholder="John Doe"
                className="w-full mt-1 border border-indigo-300 rounded-lg p-2"
              />
            </div>
            <div>
              <label htmlFor="card-number" className="block text-indigo-600 font-medium">Card Number</label>
              <div className="relative mt-1">
                <input
                  id="card-number"
                  type="text"
                  placeholder="1234 5678 9012 3456"
                  className="w-full border border-indigo-300 rounded-lg p-2"
                />
                <FaCreditCard className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div>
                <label htmlFor="expiry-month" className="block text-indigo-600 font-medium">Expiry Month</label>
                <select
                  id="expiry-month"
                  className="w-full mt-1 border border-indigo-300 rounded-lg p-2"
                >
                  {Array.from({ length: 12 }, (_, i) => i + 1).map((month) => (
                    <option key={month} value={month.toString().padStart(2, '0')}>
                      {month.toString().padStart(2, '0')}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="expiry-year" className="block text-indigo-600 font-medium">Expiry Year</label>
                <select
                  id="expiry-year"
                  className="w-full mt-1 border border-indigo-300 rounded-lg p-2"
                >
                  {Array.from({ length: 10 }, (_, i) => new Date().getFullYear() + i).map((year) => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="cvc" className="block text-indigo-600 font-medium">CVC</label>
                <div className="relative mt-1">
                  <input
                    id="cvc"
                    type="text"
                    placeholder="123"
                    className="w-full border border-indigo-300 rounded-lg p-2"
                  />
                  <FaLock className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                </div>
              </div>
            </div>
            <div>
              <label htmlFor="discount-code" className="block text-indigo-600 font-medium">Discount Code</label>
              <div className="flex mt-1 gap-2">
                <input
                  id="discount-code"
                  type="text"
                  placeholder="Enter code"
                  value={discountCode}
                  onChange={(e) => setDiscountCode(e.target.value)}
                  className="w-full border border-indigo-300 rounded-lg p-2"
                />
                <button
                  type="button"
                  onClick={handleApplyDiscount}
                  className="bg-indigo-600 text-white rounded-lg p-2"
                >
                  Apply
                </button>
              </div>
            </div>
          </form>
          <div className="mt-6">
            <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-lg transition duration-300">
              Complete Purchase
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
