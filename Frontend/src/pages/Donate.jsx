import React, { useState, useEffect } from "react";
import qrImage from "../assets/qr_code.jpg";

const Donate = () => {
  const [ngos, setNgos] = useState([]);
  const [selectedNgo, setSelectedNgo] = useState(null);
  const [form, setForm] = useState({
    name: "",
    contact: "",
    email: "",
    amount: "",
  });
  const [showQR, setShowQR] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch NGOs from backend
  useEffect(() => {
    const fetchNgos = async () => {
      setLoading(true);
      try {
        const response = await fetch("http://localhost:5000/api/ngos");
        if (!response.ok) {
          throw new Error("Failed to fetch NGOs");
        }
        const data = await response.json();
        setNgos(data);
        setError(null);
      } catch (error) {
        console.error("Error fetching NGOs:", error);
        setError("Failed to load NGOs. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    fetchNgos();
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedNgo) return alert("Please select an NGO");
    setShowQR(true);
  };

  const handleNgoClick = (ngo) => {
    setSelectedNgo(ngo);
    setShowForm(true);
  };

  const handleBackToNgos = () => {
    setShowForm(false);
    setShowQR(false);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-6 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold">NGO Connect</h1>
          <nav className="space-x-6 hidden sm:flex">
            <a href="/" className="text-white hover:underline transition-all duration-300">
              Home
            </a>
            <a href="/about" className="text-white hover:underline transition-all duration-300">
              About
            </a>
            <a href="/donate" className="text-white hover:underline transition-all duration-300">
              Donate
            </a>
            <a href="/contact" className="text-white hover:underline transition-all duration-300">
              Contact
            </a>
            <a href="/ngos" className="text-white hover:underline transition-all duration-300">
              Register NGOs
            </a>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow container mx-auto mt-10 p-6 sm:p-12">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
          Make a Donation
        </h2>
        <p className="text-lg text-gray-600 mb-8 text-center">
          Select an NGO and help bring change through your contribution.
        </p>

        {/* Loading State */}
        {loading && (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500"></div>
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative max-w-lg mx-auto" role="alert">
            <strong className="font-bold">Error: </strong>
            <span className="block sm:inline">{error}</span>
          </div>
        )}

        {!loading && !error && !showForm && (
          /* NGO Listing */
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ngos.map((ngo) => (
              <div 
                key={ngo._id || ngo.id} 
                className="bg-white rounded-xl overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer"
                onClick={() => handleNgoClick(ngo)}
              >
                {/* NGO Logo/Image */}
                <div className="h-48 bg-blue-100 flex items-center justify-center">
                  <img 
                    src={ngo.logo || "/api/placeholder/300/200"} 
                    alt={ngo.name} 
                    className="max-h-full object-contain"
                  />
                </div>
                
                {/* NGO Details */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-blue-600 mb-3">{ngo.name}</h3>
                  
                  {/* Description Section */}
                  <div className="mb-4 pb-4 border-b border-gray-200">
                    <h4 className="text-sm font-semibold uppercase text-gray-500 mb-1">About</h4>
                    <p className="text-gray-700">{ngo.description || "No description available"}</p>
                  </div>
                  
                  {/* Mission Section */}
                  <div className="mb-4 pb-4 border-b border-gray-200">
                    <h4 className="text-sm font-semibold uppercase text-gray-500 mb-1">Mission</h4>
                    <p className="text-gray-700">{ngo.mission || "Mission statement not available"}</p>
                  </div>
                  
                  {/* Impact Section */}
                  <div className="mb-4 pb-4 border-b border-gray-200">
                    <h4 className="text-sm font-semibold uppercase text-gray-500 mb-1">Impact</h4>
                    <p className="text-gray-700">{ngo.impact || "Impact details not available"}</p>
                  </div>
                  
                  {/* Founded Section */}
                  <div>
                    <h4 className="text-sm font-semibold uppercase text-gray-500 mb-1">Founded</h4>
                    <p className="text-gray-700">{ngo.founded || "Founding date not available"}</p>
                  </div>
                </div>
                
                {/* Donate Button */}
                <div className="px-6 pb-6">
                  <button 
                    className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition-all duration-300 transform hover:translate-y-1"
                  >
                    Donate Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {!loading && !error && showForm && !showQR && (
          /* Donation Form */
          <div className="bg-white p-8 rounded-xl shadow-lg max-w-lg mx-auto">
            <button 
              onClick={handleBackToNgos}
              className="mb-6 text-blue-600 hover:text-blue-800 flex items-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
              </svg>
              Back to NGOs
            </button>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-6">
              Donate to {selectedNgo?.name}
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Full Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  className="mt-2 block w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                />
              </div>

              {/* Contact */}
              <div>
                <label
                  htmlFor="contact"
                  className="block text-sm font-medium text-gray-700"
                >
                  Contact Number
                </label>
                <input
                  type="text"
                  id="contact"
                  name="contact"
                  required
                  value={form.contact}
                  onChange={handleChange}
                  className="mt-2 block w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  className="mt-2 block w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                />
              </div>

              {/* Amount */}
              <div>
                <label
                  htmlFor="amount"
                  className="block text-sm font-medium text-gray-700"
                >
                  Donation Amount
                </label>
                <input
                  type="number"
                  id="amount"
                  name="amount"
                  required
                  value={form.amount}
                  onChange={handleChange}
                  className="mt-2 block w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition-all duration-300 transform hover:translate-y-1"
              >
                Continue to Payment
              </button>
            </form>
          </div>
        )}

        {!loading && !error && showQR && (
          /* QR Code Display */
          <div className="bg-white p-8 rounded-xl shadow-lg max-w-lg mx-auto text-center">
            <button 
              onClick={handleBackToNgos}
              className="mb-6 text-blue-600 hover:text-blue-800 flex items-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
              </svg>
              Back to NGOs
            </button>
            
            <h3 className="text-xl font-semibold text-gray-700 mb-4">
              Scan to Pay for {selectedNgo?.name}
            </h3>
            <div className="border-4 border-blue-500 inline-block p-2 rounded-lg mb-4">
              <img
                src={qrImage}
                alt="QR Code"
                className="w-64 h-64 object-contain"
              />
            </div>
            <p className="text-sm text-gray-500 mb-4">
              Scan this code using any UPI app
            </p>
            <div className="mt-6 bg-gray-50 p-4 rounded-lg text-left">
              <p className="text-gray-700"><span className="font-medium">NGO:</span> {selectedNgo?.name}</p>
              <p className="text-gray-700"><span className="font-medium">Donor:</span> {form.name}</p>
              <p className="text-gray-700"><span className="font-medium">Amount:</span> ₹{form.amount}</p>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center p-6 mt-12">
        <p>&copy; 2024 NGO Connect. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Donate;